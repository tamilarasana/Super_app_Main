from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import *
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
import jwt
import json
import requests
from loyalti.loyalti import *
from loyalti.models import *
from django.db.models import Q
from utilsplayground.models import PaymentMode


@api_view(['GET', 'POST'])
def appBooking(request):
    if request.method == 'GET':
        category_data = AppBooking.objects.all()
        serialize = AppBookingSerializers(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})

    elif request.method == 'POST':
        serialize = AppBookingSerializers(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({'status': 200, 'data': serialize.data})
        return Response({'status': 400, 'data': serialize.errors})


# @api_view(['PUT', 'DELETE'])
@api_view(['GET', ])
def appBookingUD(request, id):
    try:
        detail = AppBooking.objects.get(id=id)
    except AppBooking.DoesNotExist:
        return Response({'status': 404, 'data': 'App Booking does not exist'})

    if request.method == 'GET':
        serialize = AppBookingSerializers(detail)
        return Response({'status': 200, 'data': serialize.data})

    if request.method == 'PUT':
        serialize = AppBookingSerializers(AppBooking, data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({'status': 200, 'data': serialize.data})
        return Response({'status': 400, 'data': serialize.errors})

    elif request.method == 'DELETE':
        detail.delete()
        return Response({'status': 200, 'data': 'data deleted successfully'})


@api_view(['POST'])
def commonBooking(request):
    serialize = None

    if request.data.get('source') == 'NewCar':
        serialize = NewCarBookingSerializers(data=request.data)

    elif request.data.get('source') == 'UsedCar':
        serialize = UsedCarBookingSerializers(data=request.data)

    elif request.data.get('source') == 'Service':
        serialize = ServiceSerializers(data=request.data)

    elif request.data.get('source') == 'Accessories':
        serialize = AccessorySerializers(data=request.data)

    elif request.data.get('source') == 'Insurance':
        serialize = InsuranceSerializers(data=request.data)

    if serialize is not None and serialize.is_valid():
        serialize.save() 
        return Response({'status': 200, 'data': serialize.data})
    return Response({'status': 400, 'data': serialize.errors})


@api_view(['POST'])
def bookingDecode(request):
    if request.method == 'POST':
        token = request.data.get('token')
        try:
            decoded_token = jwt.decode(token, 'secret', algorithms=['HS256'])
            serialize = AppBookingSerializers(data=decoded_token)
            if serialize.is_valid():
                serialize.save()
                return Response({'status': 200, 'data': serialize.data})
            return Response({'status': 400, 'data': serialize.errors})
            # return decoded_token['payload']
        except jwt.exceptions.InvalidTokenError:
            return Response({'status': 400, 'data': 'payload error. check the payload!'})


@api_view(['POST', ])
def commonDecodeBooking(request):
    try:
        token = request.data.get('token')
        decoded_token = jwt.decode(token, 'secret', algorithms=['HS256'])
        mode_of_payment = PaymentMode.objects.get(status='Active')
        if decoded_token['source'] != 'UsedCar':
            check_booking_existance = AppBooking.objects.filter(
                profile=decoded_token['profile'], itemlist=decoded_token['itemlist'], item_description=decoded_token['item_description']).exclude(payment_status="Success")
            if not check_booking_existance:
                if mode_of_payment.payment_mode_name == 'CashFree':
                    url = "https://sandbox.cashfree.com/pg/orders"
                    payload = json.dumps({
                        "customer_details": {
                            "customer_id": "12344",
                            "customer_email": decoded_token['email'],
                            "customer_phone": decoded_token['mobile']
                        },
                        "order_currency": "INR",
                        "order_amount": decoded_token['amount']
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
                    decoded_token['mode_of_payment'] = mode_of_payment.payment_mode_name
                    decoded_token['gateway_session_id'] = deser['payment_session_id']
                    decoded_token['gateway_order_id'] = deser['order_id']

                if mode_of_payment.payment_mode_name == 'Razorpay':
                    decoded_token['mode_of_payment'] = mode_of_payment.payment_mode_name

                serialize = AppBookingSerializers(data=decoded_token)
                if serialize.is_valid():
                    bookin = serialize.save()
                    dez_data = decoded_token
                    bookin_id = bookin.id

                    dez_data['booking_id'] = bookin_id

                    if dez_data['source'] == 'NewCar':
                        serialize = NewCarBookingSerializers(data=dez_data)
                    elif dez_data['source'] == 'UsedCar':
                        serialize = UsedCarBookingSerializers(data=dez_data)
                    elif dez_data['source'] == 'Service':
                        serialize = ServiceSerializers(data=dez_data)
                    elif dez_data['source'] == 'Accessories':
                        serialize = AccessorySerializers(data=dez_data)
                    elif dez_data['source'] == 'Insurance':
                        serialize = InsuranceSerializers(data=dez_data)
                    if serialize is not None and serialize.is_valid():
                        serialize.save()

                        # Copy to CRM starts here
                        if dez_data['source'] == 'NewCar':
                            address = decoded_token['address']
                            item_list = decoded_token['itemlist']
                            item_description = decoded_token['item_description']
                            address_data = ProfileAddress.objects.get(
                                id=address)
                            item_details = Itemlist.objects.get(id=item_list)
                            channel = Category.objects.get(
                                id=item_details.category_id)
                            item_desc_data = ItemDescription.objects.get(
                                id=item_description)
                            price = str(item_desc_data.ex_price)
                            print(item_details.name)

                            url = 'http://superapi.kalyanicrm.com:8080/api/v1/NewCarBooking'
                            payload = json.dumps({
                                "bookingId": bookin_id,
                                # "customerID":null,
                                "paymentID": decoded_token['payment_id'],
                                "employeeId": decoded_token['employee_id'],
                                "referredBy": decoded_token['referred_by'],
                                "firstName": decoded_token['name'],
                                "lastName": " ",
                                "phoneNumber": decoded_token['mobile'],
                                "emailAddress": decoded_token['email'],
                                "addressPostalCode": address_data.pincode,
                                "addressStreet": address_data.street,
                                "addressCity": address_data.city,
                                "addressCountry": "India",
                                "lat": address_data.lat,
                                "lng": address_data.long,
                                # "model": item_details.name,
                                "model": "Alto",
                                "varientDesc": item_desc_data.title,
                                "region": decoded_token['city'],
                                "outlet": decoded_token['outlets'],
                                "bookingStatus": decoded_token['booking_status'],
                                "paymentStatus": 'Pending',
                                # "channel": channel.title,
                                "channel": "Arena",
                                "bookingAmountReceived": decoded_token['amount'],
                                "bookingAmountReceivedCurrency": "INR",
                                "exPrice": price,
                                "exPriceCurrency": "INR",
                                "forceDuplicate": "true",
                            })
                            headers = {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic YWRtaW46MTIzNDU=',
                                'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                            }
                            response = requests.request(
                                "POST", url, headers=headers, data=payload)
                            data1 = response.json()
                            print(data1)

                        elif dez_data['source'] == 'UsedCar':
                            address = decoded_token['address']
                            address_data = ProfileAddress.objects.get(
                                id=address)
                            price = str(decoded_token['price'])

                            url = 'http://superapi.kalyanicrm.com:8080/api/v1/UsedCarBooking'
                            payload = json.dumps({
                                "firstName": decoded_token['name'],
                                "lastName": " ",
                                "phoneNumber": decoded_token['phone'],
                                "emailAddress": decoded_token['email'],

                                "addressPostalCode": address_data.pincode,
                                "addressStreet": address_data.street,
                                "addressCity": address_data.city,
                                "addressCountry": "India",

                                "bookingId": bookin_id,
                                "bookingStatus": "Enquired",
                                "paymentID": "-",
                                "paymentStatus": "Pending",

                                # "enquireAt": serialize.enquire_at,
                                "bookingAmountReceived": 0,
                                "bookingAmountReceivedCurrency": "INR",

                                "lat": address_data.lat,
                                "lng": address_data.long,
                                "brand": decoded_token['brand'],
                                "model": decoded_token['model'],

                                "transmission": decoded_token['transmission'],
                                "year": decoded_token['year'],
                                "fuel": decoded_token['fuel'],
                                "expectedPrice": price,
                                "kmsStart": decoded_token['kms_driven_starting'],

                                "kmsEnd": decoded_token['kms_driven_ending'],
                                "employeeId": decoded_token['employee_id'],
                                "referredBy": decoded_token['referred_by'],
                                "forceDuplicate": "true",
                            })
                            headers = {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic YWRtaW46MTIzNDU=',
                                'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                            }
                            response = requests.request(
                                "POST", url, headers=headers, data=payload)
                            data1 = response.json()

                        elif dez_data['source'] == 'Service': 
                            address = decoded_token['address']
                            item_list = decoded_token['itemlist']
                            item_description = decoded_token['item_description']
                            address_data = ProfileAddress.objects.get(
                                id=address)
                            item_details = Itemlist.objects.get(id=item_list)
                            channel = Category.objects.get(
                                id=item_details.category_id)
                            item_desc_data = ItemDescription.objects.get(
                                id=item_description)
                            price = str(item_desc_data.price)
                            print(item_details.title)

                            url = 'http://superapi.kalyanicrm.com:8080/api/v1/ServiceBooking'
                            payload = json.dumps({
                                "firstName": decoded_token['name'],
                                "lastName": " ",
                                "bookingId": bookin_id,
                                "paymentID": decoded_token['payment_id'],
                                "lat": address_data.lat,
                                "lng": address_data.long,
                                "itemDescID": item_desc_data.title,
                                "varient": decoded_token['varient'],
                                "color": decoded_token['color'],
                                "vehicleRegNo": decoded_token['cust_id_or_reg_no'],
                                "employeeId": decoded_token['employee_id'],
                                "referredBy": decoded_token['referred_by'],
                                "emailAddress": decoded_token['email'],
                                "phoneNumber": decoded_token['mobile'],
                                "addressStreet": address_data.street,
                                "addressCity": address_data.city,
                                "addressCountry": "India",
                                "outlets": decoded_token['outlet'],
                                "bookingStatus": "Booked",
                                "paymentStatus": 'Pending',
                                # "paymentStatus": decoded_token['payment_status'],
                                "serviceType": item_details.title,
                                "model": decoded_token['model'],
                                "city": decoded_token['city'],
                                "pickupSlot": decoded_token['pickup_slot'],
                                "itemPrice": price,
                                "itemPriceCurrency": "INR",
                                "bookingAmountReceived": decoded_token['amount'],
                                "bookingAmountReceivedCurrency": "INR",
                                "forceDuplicate": "true"
                            })
                            headers = {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic YWRtaW46MTIzNDU=',
                                'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                            }
                            response = requests.request(
                                "POST", url, headers=headers, data=payload)
                            data1 = response.json()
                            print(data1)
                        if data1:
                            if isinstance(data1, list) and len(data1) > 0:
                                AppBooking.objects.filter(
                                    id=bookin_id).update(crmId=data1[0]['id'])
                            else:
                                AppBooking.objects.filter(
                                    id=bookin_id).update(crmId=data1['id'])

                            # Copy to CRM ends here

                        app_res = AppBooking.objects.get(
                            id=serialize.data['booking_id'])
                        app_res.source = dez_data['source']
                        ser = simpleAppBookingSerializers(app_res)
                        return Response({'status': 200, 'data': ser.data})
                else:
                    return Response({'status': 400, 'data': str(serialize.errors)})

                return Response({'status': 400, 'data': serialize.errors})
            elif check_booking_existance:
                return Response({'status': 400, "data": "Already Booked and Pending"})

    except Exception as e:
        return Response({"status": 400, "data": str(e)})


@api_view(['GET', 'POST'])
def usedCarSellEnquiry(request):
    if request.method == 'GET':
        usedcar = UsedcarSellEnquiry.UsedCarSellSerializerobjects.all()
        serialize = UsedcarSellEnquirySerializer(usedcar, many=True)
        return Response({'status': 200, 'data': serialize.data})

    elif request.method == 'POST':
        serialize = UsedcarSellEnquirySerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({'status': 200, 'data': 'stored successfully'})
        return Response({'status': 400, 'data': serialize.errors})


@api_view(['GET'])
def getBookingTransaction(request, phone):
    booking_type = request.GET.get('type')
    if booking_type == 'Service':
        transaction_data = Service.objects.filter(
            mobile=phone).order_by('-created_at')
        serialize = DetailServiceSerializers(transaction_data, many=True)
        return Response({"status": 200, "data": serialize.data})
    if booking_type == 'NewCar':
        transaction_data = NewCarBooking.objects.filter(mobile=phone)
        serialize = DetailNewCarBookingSerializers(transaction_data, many=True)
        return Response({"status": 200, "data": serialize.data})


@api_view(['GET'])
def verifyBookingPayment(request):
    book_status = "Pending"

    try:
        if request.GET.get('mode_of_payment') == 'CashFree':
            req_order_id = request.GET.get('order_id')
            url = "https://sandbox.cashfree.com/pg/orders/" + req_order_id + "/payments"

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
                app_booking_instance = AppBooking.objects.get(
                    gateway_order_id=req_order_id)

                if data:
                    if data[0]['payment_status'] == 'SUCCESS':
                        try:
                            loyalti_transaction_check = LoyaltiTransaction.objects.get(
                                transaction_number=app_booking_instance.gateway_order_id)

                        except LoyaltiTransaction.DoesNotExist:
                            p_id = app_booking_instance.profile.id
                            gross_amount = app_booking_instance.gross_amount
                            amount = app_booking_instance.amount
                            type_of_transaction = app_booking_instance.loyalti_transaction_type
                            transaction_ref_no = req_order_id
                            redeem_val = 0
                            i_val = 0
                            if type_of_transaction == 'Redeem':
                                redeem_val = app_booking_instance.e_point
                                i_val = app_booking_instance.i_point
                            loyalti_data = makeLoyalti(
                                p_id, amount, type_of_transaction, gross_amount, transaction_ref_no, redeem_val, i_val)

                        app_booking_instance.payment_status = 'Success'
                        book_status = 'Success'
                        app_booking_instance.save()
                        crm_ins_id = app_booking_instance.crmId

                        if request.GET.get('source') == 'NewCar':
                            url = 'http://superapi.kalyanicrm.com:8080/api/v1/NewCarBooking/' + crm_ins_id
                        if request.GET.get('source') == 'Service':
                            url = 'http://superapi.kalyanicrm.com:8080/api/v1/ServiceBooking/' + crm_ins_id

                        payload = json.dumps({
                            "paymentID": req_order_id,
                            "paymentStatus": "Success",
                            "bookingStatus": "Booked"
                        })
                        headers = {
                            'Authorization': 'Basic YWRtaW46MTIzNDU=',
                            'Content-Type': 'application/json',
                            'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                        }
                        response = requests.request(
                            "PUT", url, headers=headers, data=payload)

                    if data[0]['payment_status'] == 'FAILED':
                        app_booking_instance.payment_status = 'Failed'
                        app_booking_instance.save()

                elif not data:
                    return Response({"status": 400, "data": "Order Id did not tried to make payment"})

            except Exception as e:
                return Response({"status": 500, "data": str(e)})

        if request.GET.get('mode_of_payment') == 'Razorpay':
            if request.GET.get('payment_status') == 'Success':
                req_order_id = request.GET.get('order_id')
                book_id = request.GET.get('booking_id')
                app_booking_instance = AppBooking.objects.get(
                    id=book_id)
                redeem_val = 0
                i_val = 0
                try:
                    loyalti_transaction_check = LoyaltiTransaction.objects.get(
                        transaction_number=app_booking_instance.payment_id)

                except LoyaltiTransaction.DoesNotExist:
                    p_id = app_booking_instance.profile.id
                    gross_amount = app_booking_instance.gross_amount
                    amount = app_booking_instance.amount
                    type_of_transaction = app_booking_instance.loyalti_transaction_type
                    transaction_ref_no = req_order_id

                    if type_of_transaction == 'Redeem':
                        redeem_val = app_booking_instance.e_point
                        i_val = app_booking_instance.i_point

                    loyalti_data = makeLoyalti(
                        p_id, amount, type_of_transaction, gross_amount, transaction_ref_no, redeem_val, i_val)

                app_booking_instance.payment_status = 'Success'
                app_booking_instance.payment_id = req_order_id

                book_status = 'Success'
                app_booking_instance.save()
                crm_ins_id = app_booking_instance.crmId
                if request.GET.get('source') == 'NewCar':
                    url = 'http://superapi.kalyanicrm.com:8080/api/v1/NewCarBooking/' + crm_ins_id
                if request.GET.get('source') == 'Service':
                    url = 'http://superapi.kalyanicrm.com:8080/api/v1/ServiceBooking/' + crm_ins_id

                payload = json.dumps({
                    "paymentID": req_order_id,
                    "paymentStatus": "Success",
                    "bookingStatus": "Booked"
                })
                headers = {
                    'Authorization': 'Basic YWRtaW46MTIzNDU=',
                    'Content-Type': 'application/json',
                    'Cookie': 'csrftoken=ydHI7HRyRqvPJIEQzG14gXseZo0JmRiB; sessionid=eqwjgobenk17s79za5t1n0y4l43l8mj6'
                }
                response = requests.request(
                    "PUT", url, headers=headers, data=payload)
                print(response)

        if request.GET.get('source') == 'NewCar':
            new_car_book = NewCarBooking.objects.get(
                booking_id=app_booking_instance.id)
            if book_status == 'Success':
                new_car_book.booking_status = 'Booked'
                new_car_book.save()
            resp = NewCarAppBookingSerializers(new_car_book)
        if request.GET.get('source') == 'Service':
            service_book = Service.objects.get(
                booking_id=app_booking_instance.id)
            if book_status == 'Success':
                service_book.booking_status = 'Booked'
                service_book.save()
            resp = SimpleServiceSerializers(service_book)
        return Response({"status": 200, "data": resp.data})

    except Exception as e:
        return Response({"status": 400, "data": str(e)})
