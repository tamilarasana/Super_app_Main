from venv import create
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import json
from django.shortcuts import render
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login
from django.http import JsonResponse

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import *
from .models import *
from django.db.models import Q
from profileutility.models import ProfileSearch, Profile, PaymentRequest
from django.utils import timezone


@api_view(['GET', ])
@csrf_exempt
def getCategory(request):
    ResponseData = None
    try:
        category = Category.objects.filter(active_status='Active')
        serialize = CategorySerializer(category, many=True)
        ResponseData = {'status': 200, 'data': serialize.data}

        try:
            now = timezone.now()
            expired_requests = PaymentRequest.objects.filter(
                payment_status='Pending', created_at__lt=now - timezone.timedelta(hours=12))
            expired_requests.update(payment_status='Expired')

        except Exception as e:
            return Response({'status': 500, 'data': str(e)})

    except Category.DoesNotExist:
        ResponseData = {'status': 404, 'data': "category does not exist"}
    return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getItemList(request, key):
    ResponseData = None
    try:
        rawDistData = Itemlist.objects.filter(category=key)
        serialize = ItemlistSerializer(rawDistData, many=True)
        ResponseData = {'status': 200, 'data': serialize.data}
    except Itemlist.DoesNotExist:
        ResponseData = {'status': 404, 'data': "Item does not exist"}
    return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getItemDescDist(request, key):

    try:
        rawDistData = ItemDescription.objects.order_by(
            '?').filter(itemlist=key)
    except ItemDescription.DoesNotExist:
        return Response({'status': 404, 'data': "Item Does not exist"})
    serialize = ItemDescriptionSerializer(rawDistData, many=True)

    lookup = []
    outPut = []
    data = []
    for i in serialize.data:
        lookup.append(i['title'])

    for id, title in enumerate(lookup):
        if title not in outPut:
            outPut.append(title)
            data.append(serialize.data[id])

    return Response({'status': 200, 'data': data})


@api_view(['GET', ])
@csrf_exempt
def getItemDescWithoutDist(request, key):

    try:
        rawDistData = ItemDescription.objects.order_by(
            '?').filter(itemlist=key)
    except ItemDescription.DoesNotExist:
        return Response({'status': 404, 'data': "Item does not exist"})
    serialize = ItemDescriptionSerializer(rawDistData, many=True)

    return Response({'status': 200, 'data': serialize.data})


@api_view(['GET', ])
@csrf_exempt
def getInsuranceCarData(request):

    try:
        rawDistData = Category.objects.prefetch_related(
            'items').filter(title='Insurance Data')
    except Category.DoesNotExist:
        return Response({'status': 404, 'data': 'Item Does not exist'})
    serialize = InsuranceDataSerializer(rawDistData, many=True)

    return Response({'status': 200, 'data': serialize.data})


@api_view(['GET', ])
@csrf_exempt
def getInsuranceCarVarientData(request, key):

    try:
        rawDistData = Itemlist.objects.prefetch_related(
            'itemlist').filter(id=key)
    except Itemlist.DoesNotExist:
        return Response({'status': 404, 'data': "Item does not exist"})
    serialize = InsuranceDataVarientSerializer(rawDistData, many=True)

    return Response({'status': 200, 'data': serialize.data})


@api_view(['GET', ])
@csrf_exempt
def getItemDesc(request, key):
    ResponseData = None
    try:
        rawDistData = ItemDescription.objects.prefetch_related(
            'spec').filter(id=key)
        serialize = GetItemDescriptionSerializer(rawDistData, many=True)
        ResponseData = {'status': 200, 'data': serialize.data}
    except ItemDescription.DoesNotExist:
        ResponseData = {'status': 404, 'data': "data does not exist"}
    return Response(ResponseData)


@api_view(['POST', ])
@csrf_exempt
def getColorItemDesc(request):
    ResponseData = None
    val = json.loads(request.body)
    title = val["title"]
    try:
        rawDistData = ItemDescription.objects.prefetch_related(
            'spec').filter(title=title)
        serialize = GetItemDescriptionSerializer(rawDistData, many=True)
        ResponseData = {'status': 200, 'data': serialize.data}
    except ItemDescription.DoesNotExist:
        ResponseData = {'status': 404, 'data': "Data does not exist"}
    return Response(ResponseData)


@api_view(['GET', ])
@csrf_exempt
def getSearchAccessories(request):
    ResponseData = None

    try:
        category_data = ItemDescription.objects.all()
        title = request.query_params.get('title', None)
        if title is not None:
            category_data = category_data.filter(title__icontains=title)
        subtitle = request.query_params.get('subtitle', None)
        if subtitle is not None:
            category_data = category_data.filter(subtitle__icontains=subtitle)
        title_for_price = request.query_params.get('year', None)
        if title_for_price is not None:
            category_data = category_data.filter(
                title_for_price__icontains=title_for_price)
        serialize = GetItemDescriptionSerializer(category_data, many=True)
        return Response({'status': 200, 'data': serialize.data})
    except ItemDescription.DoesNotExist:
        ResponseData = {'status': 404, 'data': "Data does not exist"}
    return Response(ResponseData)


@api_view(['POST', ])
@csrf_exempt
def search_item(request):
    # profile = None
    ResponseData = None
    requestData = json.loads(request.body)
    search_query = requestData["keyword"]
    cust_id = requestData['profile_id']
    if cust_id != 0:
        try:
            # create a new PaymentRequest object with the provided data
            profile = Profile.objects.get(id=cust_id)
        except Exception as e:
            profile = None

        createSearch = ProfileSearch.objects.create(
            profile=profile,
            keyword=search_query
        )
        createSearch.save()

    if search_query:
        items = ItemDescription.objects.filter(
            Q(subtitle__icontains=search_query)
        )
        serialize = ItemDescriptionSerializer(items, many=True)

        ResponseData = {'status': 200, 'data': serialize.data}
    else:
        ResponseData = {'status': 404, 'data': "data doesn't exist"}
    return Response(ResponseData)


def react_home(request, path):
    return render(request, 'index.html', context={"b": "a"})


def r_home(request):
    return render(request, 'index.html', context={"b": "a"})
