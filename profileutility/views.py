from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import json

from django.contrib.sessions.models import Session
from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login
from django.http import JsonResponse

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import HttpResponseBadRequest
from .serializers import *
from .models import *
import requests
from .firebase import fireNotification
from utilsplayground.models import *
from loyalti.models import *
from loyalti.loyalti import *


@api_view(['POST', ])
@csrf_exempt
def createEquiry(request):
    requestData = json.loads(request.body)
    ResponseData = None
    try:
        rawDistData = Enquirylog.objects.create(
            type_of_enq=requestData['type_of_enq'],
            title=requestData['title'],
            list=requestData['list'],
            detail=requestData['detail'],
            mobile=requestData['mobile'],
            email=requestData['email'],
            kmdriven=requestData['kmdriven'],
            price=requestData['price'],
            lat=requestData['lat'],
            long=requestData['long'],
            enquire_at=requestData['enquire_at'],
            scheduled=requestData['scheduled'])
        rawDistData.save()
        ResponseData = {"status": 200, "data": "created successfully"}
    except Exception as e:
        ResponseData = {"status": 400, "data": str(e)}
    return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getProfile(request, cust_id):
    ResponseData = None
    if request.method == 'GET':
        try:
            rawDistData = Profile.objects.prefetch_related(
                'profile_address', 'profile_fb', 'profile_preference', 'profile_aoi', 'profile_search', 'activity_profile').filter(id=cust_id)
            serialize = ProfileSerializer(rawDistData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Profile.DoesNotExist:
            ResponseData = {"status": 404, "data": "data not found"}
        return Response(ResponseData)


@api_view(['POST', 'PUT', ])
@csrf_exempt
def profileCU(request):
    requestData = json.loads(request.body)
    ResponseData = None
    if request.method == 'POST':
        try:
            # We have already created the user when register so add extra detail you have to update the profile
            user = User.objects.get(id=requestData['user'])
            rawProfileData = Profile.objects.create(
                app_version=requestData['app_version'],
                phone=requestData['phone'],
                user=user)
            rawProfileData.save()
            loyalti = LoyaltiEntity.objects.filter(
                category='Inaugural', status=True)
            print(loyalti)
            if loyalti:
                inagural_point = loyalti[0].points_upgrade
                loyalti_data = Loyalti.objects.create(
                    profile_id=rawProfileData.id,
                    balance_points=0,
                    total_earned_points=0,
                    business_turnover=0,
                    inaugural_points=inagural_point
                )
                loyalti_data.save()

            ResponseData = {"status": 200, 'data': "Created Succesfully"}
        except Exception as e:
            ResponseData = {
                "status": 400, "data": str(e)}
        return Response(ResponseData)

    if request.method == 'PUT':
        try:
            # Update User table
            user = User.objects.get(id=requestData['user'])
            serialize = UserSerializer(user, data=request.data, partial=True)
            if serialize.is_valid():
                serialize.save()

            # Update Profile(Profile Table)
            profile_detail = Profile.objects.get(user_id=requestData['user'])
            serializer = SimpleProfileSerializer(
                profile_detail, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()

            ResponseData = {"status": 200, 'message': 'update successfully'}

        except Exception as e:
            print(e)
            ResponseData = {"status": 404, 'error': str(e)}
        return Response(ResponseData)


@api_view(['POST', 'GET', ])
@csrf_exempt
def profileSearch(request):
    ResponseData = None
    requestData = json.loads(request.body)
    if request.method == 'POST':
        if requestData['profile'] != 0:
            try:
                profile = Profile.objects.get(id=requestData['profile'])
                rawProfileData = ProfileSearch.objects.create(
                    profile=profile,
                    keyword=requestData['keyword']
                )
                rawProfileData.save()
                ResponseData = {"status": 200,
                                "data": "data created successfully"}
            except Exception as e:
                ResponseData = {"status": 400,
                                "data": "Check the payload once again"}
            return Response(ResponseData)
        return Response({"status": 200, "data": "user does not exist"})

    if request.method == 'GET':
        try:
            c_id = requestData['profile']
            rawDistData = ProfileSearch.objects.filter(profile_id=c_id)
            serialize = ProfileSearchSerializer(rawDistData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {"status": 400, "data": "Something went wrong"}
        return Response(ResponseData)


@api_view(['POST', ])
@csrf_exempt
def createWish(request):
    ResponseData = None
    if request.method == 'POST':
        requestData = json.loads(request.body)
        try:
            profile_ins = Profile.objects.get(id=requestData['profile'])
            item_ins = ItemDescription.objects.get(id=requestData['item'])
            rawProfileData = Wishlist.objects.create(
                profile=profile_ins, item=item_ins)
            rawProfileData.save()

            ResponseData = {"status": 200, "data": rawProfileData.id}
        except Exception as e:
            ResponseData = {
                "status": 400, "data": "profile is exisitig with mention id duplicate entry"}
        return Response(ResponseData)


@api_view(['GET', 'PUT', ])
@csrf_exempt
def makeWish(request, query):
    ResponseData = None
    if request.method == 'GET':
        try:
            rawProfileData = Wishlist.objects.prefetch_related(
                'item').filter(profile_id=query)
            serialize = WishlistSerializer(rawProfileData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {"status": 400, "data": str(e)}
        return Response(ResponseData)

    if request.method == 'PUT':
        try:
            rawProfileData = Wishlist.objects.filter(pk=query)
            rawProfileData.delete()
            ResponseData = {"status": 200, "data": "success"}
        except Exception as e:
            ResponseData = {
                "status": 400, "data": "profile is exisitig with mention id duplicate entry"}
        return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getWishlist(request, id):
    ResponseData = None
    if request.method == 'GET':
        try:
            rawProfileData = Wishlist.objects.prefetch_related(
                'item').filter(profile_id=id)
            serialize = SimpleWishlistSerializer(rawProfileData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {"status": 400, "data": str(e)}
        return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getAllWishlist(request, key):
    ResponseData = None
    if request.method == 'GET':
        try:
            data = Wishlist.objects.filter(profile_id=key)
            serialize = AllWishlistSerializer(data, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {"status": 400, "data": "check the inputs"}
        return Response(ResponseData)


@api_view(['POST', ])
@csrf_exempt
def custActivity(request):
    requestData = json.loads(request.body)
    ResponseData = None
    if request.method == 'POST':
        try:
            profile_ins = Profile.objects.get(id=requestData['profile'])
            rawProfileData = ProfileActivity.objects.create(profile=profile_ins,
                                                            type=requestData['type'],
                                                            instance=requestData['instance']
                                                            )
            rawProfileData.save()

            ResponseData = {"status": 200, "data": "Posted Successfully"}
        except Exception as e:
            ResponseData = {"status": 400, "data": "check the inputs"}
        return Response(ResponseData)


@api_view(['POST', ])
@csrf_exempt
def userExistance(request):
    """
    POST check existance
    """
    try:
        data = json.loads(request.body)
        phone = data.get('phone')
        ResponseData = None

        if phone is None:
            return JsonResponse({
                "data": 400,
                "errors": {
                    "detail": "Please  enter phone number"
                }
            }, status=400)

        # User and Profile Fetch
        rawDistData = Profile.objects.filter(phone=phone)

        if not rawDistData:
            ResponseData = {
                "status": 404, "data": "user does not exist with given phone number!"}
        else:
            serialize = ProfileSerializer(rawDistData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}

        return Response(ResponseData)

    except Exception as e:
        return Response({
            "status": 500, "data": "something went wrong!"})


@api_view(['POST', ])
@csrf_exempt
def login_view(request):
    """
    POST API for login
    """
    ResponseData = {"status": 404,
                    "data":  "user does not exist with given credential!"}
    try:
        data = json.loads(request.body)
        phone = data.get('phone')
        password = data.get('password')
        app_ver = data.get('app_version')
        if phone is None:
            ResponseData = {"status": 400, "data": "check the  input"}
        elif password is None:
            ResponseData = {"status": 400, "data": "check the  input"}

        user = authenticate(phone=phone, password=password)
        if user is not None:
            login(request, user)
            cust = Profile.objects.values('id').filter(phone=phone)
            Profile.objects.filter(phone=phone).update(app_version=app_ver)
            cust_id = cust[0]['id']
            rawDistData = Profile.objects.prefetch_related(
                'profile_address', 'profile_fb', 'profile_preference', 'profile_aoi', 'profile_search', 'activity_profile').filter(id=cust_id)
            serialize = ProfileSerializer(rawDistData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
            # ResponseData = {"profile_name":user.username, "profile_id":cust_id}
        return Response(ResponseData)
    except Exception as e:
        return Response({"status": 500, "data": str(e)})


@api_view(['POST', ])
@csrf_exempt
def profileCrm(request):
    requestData = json.loads(request.body)
    pg = PaymentMode.objects.get(status="Active")
    mode_of_payment = pg.payment_mode_name
    profile = None
    try:
        # create a new PaymentRequest object with the provided data
        profile = Profile.objects.get(phone=requestData['phone'])
    except Exception as e:
        profile = None
    try:
        instance = PaymentRequest(
            internal_profile=profile,
            register_no_or_cust_id=requestData.get('register_no', None),
            phone=requestData.get('phone', None),
            name=requestData.get('name', None),
            amount=requestData.get('amount', None),
            crmId=requestData.get('crmId', None),
            purpose=requestData.get('purpose', None),
            billNumberOrInvoiceNumber=requestData.get(
                'billNumberOrInvoiceNumber', None),
            transactionReferenceNumber=requestData.get(
                'transactionReferenceNumber', None),
            requested_employee_id=requestData.get(
                'requested_employee_id', None),
            requested_employee_name=requestData.get(
                'requested_employee_name', None),
            requested_employee_mobile=requestData.get(
                'requested_employee_mobile', None),
            requested_employee_location=requestData.get(
                'requested_employee_location', None),
            payment_gateway=mode_of_payment
        )
        instance.save()

        #  Firebase Curl Implementation
        if profile != None:
            profile = Profile.objects.get(phone=requestData['phone'])
            token_id = ProfileFbtoken.objects.filter(
                profile_id=profile.id).first()

            amount = requestData['amount']
            purpose = requestData['purpose']
            name = requestData['name']
            if profile is not None:
                profile = Profile.objects.get(phone=requestData['phone'])
                token_ids = ProfileFbtoken.objects.filter(
                    profile_id=profile.id)

                amount = requestData['amount']
                purpose = requestData['purpose']
                name = requestData['name']

                if token_ids.exists():
                    for token_id in token_ids:
                        token = token_id.token
                        test_res = fireNotification(
                            token, name, amount, purpose)

        # Payment Gateway Integeration

        # phone_no = "+91" + requestData.get('phone')
        # pg = PaymentMode.objects.get(status="Active")
        # if mode_of_payment == "CashFree":
        #     url = "https://sandbox.cashfree.com/pg/orders"
        #     payload = json.dumps({
        #         "customer_details": {
        #             "customer_id": "12344",
        #             "customer_email": "kalyanimotors@gmail.com",
        #             "customer_phone": requestData.get('phone')
        #         },
        #         "order_currency": "INR",
        #         "order_amount": requestData.get('amount')
        #     })
        #     headers = {
        #         'accept': 'application/json',
        #         'content-type': 'application/json',
        #         'x-api-version': '2022-09-01',
        #         'x-client-id': 'TEST39299103b4c1d2c5e88f578997199293',
        #         'x-client-secret': 'TESTdc53476372f92f5e23c8f7ffc1d04e93b9f0e85b'
        #     }

        #     response = requests.request(
        #         "POST", url, headers=headers, data=payload)
        #     deser = response.json()
        #     payment_req_update = PaymentRequest.objects.get(id=instance.id)

        #     payment_req_update.gateway_session_id = deser['payment_session_id']
        #     payment_req_update.gateway_order_id = deser['order_id']
        #     payment_req_update.save()

        # Payment Gateway Integeration Ends

        #  Firebase implementations Ends here

        # return success response
        response_data = {'status': 200,
                         'data': 'PaymentRequest created successfully.'}
        return Response(response_data)
    except Exception as e:
        # return error response for exceptions
        response_data = {'status': 500, 'data': str(e)}
        if str(e) == "'NoneType' object has no attribute 'id'":
            response_data = {
                'status': 200, 'data': 'new Payment Request has been created but customer not initated '}

        return Response(response_data)


@api_view(['GET', 'PUT', ])
@csrf_exempt
def profileCrmRD(request, phone):
    ResponseData = None
    if request.method == 'GET':
        try:
            rawProfileData = PaymentRequest.objects.filter(
                phone=phone).order_by('-created_at')
            serialize = PaymentRequestSerializer(rawProfileData, many=True)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {'status': 500, 'data': str(e)}
        return Response(ResponseData)

    if request.method == 'PUT':
        requestData = json.loads(request.body)
        try:
            profile = PaymentRequest.objects.get(phone=phone)
            profile.phone = requestData['phone']
            profile.name = requestData['name']
            profile.amount = requestData['amount']
            profile.purpose = requestData['purpose']
            profile.register_no_or_cust_id = requestData['register_no_or_cust_id']
            profile.billNumberOrInvoiceNumber = requestData['billNumberOrInvoiceNumber']
            profile.transactionReferenceNumber = requestData['transactionReferenceNumber']
            profile.requested_employee_id = requestData['requested_employee_id']
            profile.requested_employee_name = requestData['requested_employee_name']
            profile.requested_employee_mobile = requestData['requested_employee_mobile']
            profile.requested_employee_location = requestData['requested_employee_location']
            profile.dont_show = requestData['dont_show']
            profile.save()
            ResponseData = {"status": 200, "data": "success"}
        except Exception as e:
            ResponseData = {"status": 404, "data": str(e)}
        return Response(ResponseData)


@api_view(['POST'])
@csrf_exempt
def crmTransaction(request):
    if request.method == 'POST':

        try:
            transaction_reference_no = request.data.get(
                'transaction_reference_no')
            payment_instance = request.data.get('payment_instance')
            transaction_status = request.data.get(
                'transaction_status', 'pending')
            mode_of_payment = request.data.get('mode_of_payment')
            transaction_date = request.data.get('transaction_date')
            transaction_charge = request.data.get('transaction_charge')
            total_amount_received = request.data.get('total_amount_received')
            remarks = request.data.get('remarks')

            profile = Profile.objects.get(
                id=request.data.get('internal_profile'))

            transaction_reference = PaymentTransaction.objects.filter(
                transaction_reference_no=request.data.get('transaction_reference_no'))
            if not transaction_reference:
                crm_transaction = PaymentTransaction.objects.create(
                    crm_profile=profile,
                    payment_instance_id=payment_instance,
                    transaction_reference_no=transaction_reference_no,
                    transaction_status=transaction_status,
                    mode_of_payment=mode_of_payment,
                    transaction_date=transaction_date,
                    transaction_charge=transaction_charge,
                    total_amount_received=total_amount_received,
                    remarks=remarks
                )

                crm_transaction.save()
                if transaction_status == 'Success':
                    instance = PaymentRequest.objects.get(id=payment_instance)
                    instance.payment_status = 'Success'
                    instance.internal_profile = profile
                    instance.transaction_number = transaction_reference_no
                    instance.save()
                    try:
                        crm_ins_id = instance.crmId
                        crm_transaction_id = transaction_reference_no

                        url = 'http://192.168.41.63:8080/api/v1/PaymentRequest/' + crm_ins_id

                        payload = json.dumps({
                            "gatewayTransactionID": crm_transaction_id,
                            "paymentStatus": "Success"
                        })
                        headers = {
                            'Authorization': 'Basic YWRtaW46MTIzNDU=',
                            'Content-Type': 'application/json',
                            'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                        }

                        response = requests.request(
                            "PUT", url, headers=headers, data=payload)

                    except Exception as e:
                        return Response({'status': 500, 'data': str(e)})

                return Response({"status": 201, "data": "success"})
            else:
                return Response({"status": 403, "data": "duplicated entry"})

        except Exception as e:
            return Response({"status": 500, "data": str(e)})


@api_view(['POST'])
@csrf_exempt
def logTransaction(request):
    serialize = PaymentTransactionSerializer(data=request.data)
    if serialize.is_valid():
        serialize.save()
        return Response({'status': 200, 'data': serialize.data})
    return Response({'status': 400, 'data': serialize.errors})


@api_view(['PUT', ])
@csrf_exempt
def forgotPassword(request):
    requestData = json.loads(request.body)
    ResponseData = None

    if request.method == 'PUT':
        try:
            phone = requestData['phone']
            profile = Profile.objects.get(phone=phone)
            user = profile.user_id
            user_ins = User.objects.get(id=user)
            user_ins.set_password(requestData['password'])
            user_ins.save()
            serialize = UserSerializer(user_ins)
            ResponseData = {"status": 200, "data": serialize.data}
        except Exception as e:
            ResponseData = {"status": 500, "data": str(e)}
        return Response(ResponseData)


# To Get,Delete and update particular address
@api_view(['PUT', 'GET', 'DELETE'])
@csrf_exempt
def getProfileAddressModify(request, id):
    try:
        if request.method == 'PUT':
            profile_address = ProfileAddress.objects.get(id=id)
            serializer = ProfileAddressSerializer(
                profile_address, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": 200, "data": serializer.data})

        if request.method == 'GET':
            data = ProfileAddress.objects.get(id=id)
            serializer = ProfileAddressSerializer(data)
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'DELETE':
            address = get_object_or_404(ProfileAddress, id=id)
            address.delete()
            return Response({"status": 200, "data": "success"})
    except Exception as e:
        return Response({"status": 500, "data": str(e)})


# Fetch and post address of profile by profile id
@api_view(['GET', 'POST'])
@csrf_exempt
def getAddressByProfile(request, id):
    if request.method == 'GET':
        try:
            profile = Profile.objects.prefetch_related(
                'profile_address').filter(id=id).get()
            serializer = Profile_ProfileAddressSerializer(profile)
            return Response({"status": 200, "data": serializer.data})
        except Exception as e:
            return Response({"status": 500, "data": str(e)})

    if request.method == 'POST':
        try:
            deserialize = json.loads(request.body)
            profile = Profile.objects.get(id=id)
            data = ProfileAddress.objects.create(
                profile=profile,
                type_of_address=deserialize['type_of_address'],
                door_no=deserialize['door_no'],
                street=deserialize['street'],
                area=deserialize['area'],
                city=deserialize['city'],
                pincode=deserialize['pincode'],
                landmark=deserialize['landmark'],
                lat=deserialize['lat'],
                long=deserialize['long'],
            )
            data.save()
            return Response({"status": 200, "data": 'Successfully Stored'})
        except Exception as e:
            return Response({"status": 500, "data": str(e)})


# ---- Profile FbToken ----
# Fetch and post ProfileFbtoken of profile by profile id
@api_view(['GET', 'POST'])
@csrf_exempt
def getFbtokenByProfile(request, id):
    if request.method == 'GET':
        try:
            fb_token = ProfileFbtoken.objects.filter(profile_id=id)
            serializer = ProfileFbtokenSerializer(fb_token, many=True)
            return Response({"status": 200, "data": serializer.data})
        except Exception as e:
            return Response({"status": 404, "data": str(e)})

    if request.method == 'POST':
        try:
            criteria = {
                'token': request.data['token'],
                'profile_id': id
            }
            obj, created = ProfileFbtoken.objects.get_or_create(**criteria)
            if created:
                return Response({"status": 200, "data": "Created Successfully"})
            else:
                return Response({"status": 200, "data": "Already Exists"})
        except Exception as e:
            return Response({"status": 500, "data": str(e)})


# #To Get,Delete and update particular Fbtoken
@api_view(['PUT', 'GET', 'DELETE'])
@csrf_exempt
def getProfileFbtokenModify(request, id):
    try:

        if request.method == 'PUT':
            profile_Fbtoken = ProfileFbtoken.objects.get(id=id)
            serializer = ProfileFbtokenSerializer(
                profile_Fbtoken, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": 200, "data": serializer.data})
        if request.method == 'GET':
            data = ProfileFbtoken.objects.get(id=id)
            serializer = ProfileFbtokenSerializer(data)
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'DELETE':
            address = get_object_or_404(ProfileFbtoken, id=id)
            address.delete()
            return Response({"status": 200, "data": "success"})
    except Exception as e:
        return Response({"status": 400, "data": str(e)})


# ---- Profile Aoi ----
# Fetch and post ProfileAoi of profile by profile id
@api_view(['GET', 'POST'])
@csrf_exempt
def getaoiByProfile(request, id):
    try:
        if request.method == 'GET':
            # profile = Profile.objects.prefetch_related('profile_aoi').filter(id=id).get()
            # serializer = Profile_ProfileAoiSerializer(profile)
            profile_aoi = ProfileAoi.objects.filter(profile_id=id)
            serializer = ProfileAoiSerializer(profile_aoi, many=True)
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'POST':
            deserialize = json.loads(request.body)
            profile_id = id
            profile = Profile.objects.get(id=profile_id)
            data = ProfileAoi.objects.create(profile=profile,
                                             type=deserialize['type'],
                                             interest=deserialize['interest'],
                                             remarks=deserialize['remarks']
                                             )
            data.save()
            return Response({"status": 200, "data": 'Successfully Stored'})
    except Exception as e:
        return Response({"status": 400, "data": str(e)})

#
# To Get, Delete and update particular Fbtoken


@api_view(['PUT', 'GET', 'DELETE'])
@csrf_exempt
def getProfileaoiModify(request, id):
    try:
        if request.method == 'PUT':
            profile_Aoi = ProfileAoi.objects.get(id=id)
            serializer = ProfileAoiSerializer(
                profile_Aoi, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response({"status": 200, "data": serializer.data})
        if request.method == 'GET':
            data = ProfileAoi.objects.get(id=id)
            serializer = ProfileAoiSerializer(data)
            return Response({"status": 200, "data": serializer.data})
        if request.method == 'DELETE':
            address = get_object_or_404(ProfileAoi, id=id)
            address.delete()
            return Response({"status": 200, "data": "Success"})
    except Exception as e:
        return Response({"status": 400, "data": str(e)})


# ---- Profile Notification preference ----
# Fetch and post Profile preference of profile by profile id
@api_view(['GET', 'POST'])
@csrf_exempt
def getnotficationByProfile(request, id):
    try:
        if request.method == 'GET':
            profile_np = ProfileNoticationPreference.objects.filter(
                profile_id=id)
            serializer = ProfileNoticationPreferenceSerializer(
                profile_np, many=True)
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'POST':
            deserialize = json.loads(request.body)
            profile_id = id
            profile = Profile.objects.get(id=profile_id)
            data = ProfileNoticationPreference.objects.create(profile=profile,
                                                              type_of_notification=deserialize['type_of_notification'],
                                                              status=deserialize['status']
                                                              )
            data.save()
            return Response({"status": 200, "data": 'Successfully Stored'})
    except Exception as e:
        return Response({"status": 400, "data": str(e)})


# To Get, Delete and update particular Notification
@api_view(['PUT', 'GET', 'DELETE'])
@csrf_exempt
def getProfileanoticationModify(request, id):
    try:
        if request.method == 'PUT':
            profile_np = ProfileNoticationPreference.objects.get(id=id)
            serializer = ProfileNoticationPreferenceSerializer(
                profile_np, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'GET':
            data = ProfileNoticationPreference.objects.get(id=id)
            serializer = ProfileNoticationPreferenceSerializer(data)
            return Response({"status": 200, "data": serializer.data})

        if request.method == 'DELETE':
            address = get_object_or_404(ProfileNoticationPreference, id=id)
            address.delete()
            return Response({"status": 200, "data": "Success"})

    except Exception as e:
        return Response({"status": 400, "data": str(e)})


@api_view(['POST'])
def updatePan(request):
    if request.method == 'POST':
        serialize = ProfileVerificationSerializers(data=request.data)
        if serialize.is_valid():
            serialize.save()
            profile = Profile.objects.filter(
                id=request.data['profile']).update(verified_profile=True)
        return Response({"status": 200, "data": serialize.data})
    return Response({"status": 400, "data": "Bad request"})


@api_view(['POST'])
def paymentStatus(request):
    payment_gateway = request.data["payment_gateway"]

    try:
        if payment_gateway == "CashFree":
            order_id = request.data['order_id']
            url = "https://sandbox.cashfree.com/pg/orders/" + order_id + "/payments"

            payload = {}
            headers = {
                'accept': 'application/json',
                'x-api-version': '2022-09-01',
                'x-client-id': 'TEST39299103b4c1d2c5e88f578997199293',
                'x-client-secret': 'TESTdc53476372f92f5e23c8f7ffc1d04e93b9f0e85b'
            }

            response = requests.request(
                "GET", url, headers=headers, data=payload)
            data = response.json()

            try:
                instance = PaymentRequest.objects.get(
                    gateway_order_id=order_id)
                if data:
                    if data[0]['payment_status'] == 'SUCCESS':

                        try:
                            loyalti_transaction_check = LoyaltiTransaction.objects.get(
                                transaction_number=instance.gateway_order_id)
                        except LoyaltiTransaction.DoesNotExist:

                            p_id = instance.internal_profile.id
                            gross_amount = instance.gross_amount
                            amount = instance.amount
                            type_of_transaction = instance.loyalti_transaction_type
                            transaction_ref_no = order_id
                            redeem_val = 0
                            i_val = 0
                            if type_of_transaction == 'Redeem':
                                redeem_val = instance.e_point
                                i_val = instance.i_point

                            loyalti_data = makeLoyalti(
                                p_id, amount, type_of_transaction, gross_amount, transaction_ref_no, redeem_val, i_val)

                        instance.payment_status = 'Success'
                        instance.save()
                        crm_ins_id = instance.crmId
                        crm_transaction_id = order_id
                        url = 'http://192.168.41.63:8080/api/v1/PaymentRequest/' + crm_ins_id
                        payload = json.dumps({
                            "gatewayTransactionID": crm_transaction_id,
                            "paymentStatus": "Success"
                        })
                        headers = {
                            'Authorization': 'Basic YWRtaW46MTIzNDU=',
                            'Content-Type': 'application/json',
                            'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                        }
                        response = requests.request(
                            "PUT", url, headers=headers, data=payload)
                elif not data:
                    return Response({"status": 400, "data": "Order Id did not tried to make payment"})

            except Exception as e:
                return Response({"status": 500, "data": str(e)})

        if payment_gateway == "Razorpay":
            payment_request_id = request.data["payment_request_id"]
            transaction_id = request.data["transaction_id"]
            payment_status = request.data["payment_status"]
            instance = PaymentRequest.objects.get(id=payment_request_id)
            if payment_status == 'Success':
                try:
                    loyalti_transaction_check = LoyaltiTransaction.objects.get(
                        transaction_number=instance.transaction_number)
                except LoyaltiTransaction.DoesNotExist:
                    p_id = instance.internal_profile.id 
                    gross_amount = instance.gross_amount
                    amount = instance.amount
                    type_of_transaction = instance.loyalti_transaction_type
                    redeem_val = 0
                    i_val = 0
                    if type_of_transaction == 'Redeem':
                        redeem_val = instance.e_point
                        i_val = instance.i_point
                    transaction_ref_no = transaction_id
                    loyalti_data = makeLoyalti(
                        p_id, amount, type_of_transaction, gross_amount, transaction_ref_no, redeem_val, i_val)

                instance.payment_status = 'Success'
                instance.transaction_number = transaction_id
                instance.save()
                crm_ins_id = instance.crmId
                url = 'http://192.168.41.63:8080/api/v1/PaymentRequest/' + crm_ins_id
                payload = json.dumps({
                    "gatewayTransactionID": transaction_id,
                    "paymentStatus": "Success"
                })
                headers = {
                    'Authorization': 'Basic YWRtaW46MTIzNDU=',
                    'Content-Type': 'application/json',
                    'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                }
                response = requests.request(
                    "PUT", url, headers=headers, data=payload)

        serialize = PaymentRequestSerializer(instance)
        return Response({"status": 200, "data": serialize.data})
    except Exception as e:
        return Response({"status": 400, "data": str(e)})


@api_view(['GET', ])
def checkLoyaltiPoints(request, p_id):
    profile_data = Loyalti.objects.filter(profile_id=p_id)
    serialize = LoyaltiSerializer(profile_data, many=True)
    return Response({"status": 200, "data": serialize.data})


@api_view(['POST', ])
def makeSession(request, p_id):
    requestData = json.loads(request.body)
    net_paid = requestData['net_paid']
    ResponseData = None

    make_session = PaymentRequest.objects.get(id=p_id)
    print(make_session.payment_gateway)
    # Payment Gateway Integeration
    mode_of_payment = make_session.payment_gateway
    mobile_no = "+91" + make_session.phone

    if mode_of_payment == "CashFree":

        url = "https://sandbox.cashfree.com/pg/orders"
        payload = json.dumps({
            "customer_details": {
                "customer_id": "12344",
                "customer_email": "kalyanimotors@gmail.com",
                "customer_phone": mobile_no
            },
            "order_currency": "INR",
            "order_amount": net_paid
        })
        headers = {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-api-version': '2022-09-01',
            'x-client-id': 'TEST39299103b4c1d2c5e88f578997199293',
            'x-client-secret': 'TESTdc53476372f92f5e23c8f7ffc1d04e93b9f0e85b'
        }

        response = requests.request(
            "POST", url, headers=headers, data=payload)
        deser = response.json()

        make_session.gateway_session_id = deser['payment_session_id']
        make_session.gateway_order_id = deser['order_id']
        make_session.loyalti_transaction_type = requestData['loyalti_transaction_type']
        make_session.gross_amount = requestData['gross_amount']
        make_session.special_coupon = requestData['special_coupon']
        make_session.e_point = requestData['e_point']
        make_session.i_point = requestData['i_point']
        make_session.cgst_sgst = requestData['cgst_sgst']
        make_session.net_paid = requestData['net_paid']

        make_session.save()
        serialize = PaymentRequestSerializer(make_session)
        ResponseData = {"status": 200, "data": serialize.data}
        # Payment Gateway Integeration Ends

    if mode_of_payment == 'Razorpay':
        make_session.loyalti_transaction_type = requestData['loyalti_transaction_type']
        make_session.gross_amount = requestData['gross_amount']
        make_session.special_coupon = requestData['special_coupon']
        make_session.e_point = requestData['e_point']
        make_session.i_point = requestData['i_point']
        make_session.cgst_sgst = requestData['cgst_sgst']
        make_session.net_paid = requestData['net_paid']

        make_session.save()
        serialize = PaymentRequestSerializer(make_session)
        ResponseData = {"status": 200, "data": serialize.data}

    return Response(ResponseData)
