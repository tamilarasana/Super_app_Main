from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import *
from .models import *
from rest_framework import status
from .serializers import *
from rest_framework.decorators import api_view
from showcase.models import *
from rest_framework.generics import CreateAPIView
import json
from profileutility.models import Profile, ProfileFbtoken
from profileutility.firebase import fireNotification


@api_view(['POST'])
def createRTO(request):

    if request.method == 'POST':
        json_data = json.loads(request.body)
        for obj in json_data:
            print(obj['display_order'])
            data = RTO.objects.create(
                display_order=obj['display_order'],
                is_popular=obj['is_popular'],
                rto_code=obj['rto_code'],
                rto_id=obj['rto_id'],
                rto_name=obj['rto_name'],
            )
            data.save()
        return Response({'status': 200, 'data': "seeded succesfully"})


@api_view(['GET'])
def getRTO(request, rtocode):
    if request.method == 'GET':
        category_data = RTO.objects.filter(rto_code=rtocode)
        serialize = RTOSerializer(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})


@api_view(['GET'])
def getCity(request):
    if request.method == 'GET':
        category_data = City.objects.all()
        serialize = CitySerializer(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})


@api_view(['GET'])
def getVersion(request):
    if request.method == 'GET':
        category_data = AppVersion.objects.all()
        serialize = VersionSerializer(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})


@api_view(['GET'])
def getOutlet(request, cityid):
    if request.method == 'GET':
        category_data = Outlet.objects.filter(city_id=cityid)
        serialize = OutletSerializers(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})


@api_view(['GET'])
def testFireNotification(request, phone_no):
    if request.method == 'GET':
        profile = Profile.objects.get(phone=phone_no)
        token_ids = ProfileFbtoken.objects.filter(
            profile_id=profile.id)

        amount = "100"
        purpose = "Test purpose"
        name = profile.user.first_name

        if token_ids.exists():
            for token_id in token_ids:
                token = token_id.token
                test_res = fireNotification(token, name, amount, purpose)

        return Response({'status': 200, 'data': "sent!"})
