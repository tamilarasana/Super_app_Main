from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import *
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from showcase.models import ItemDescription
from django.contrib.contenttypes.models import ContentType
from django.db.models import Prefetch
from showcase.serializers import ItemDescriptionSerializer


@api_view(['GET', ])
@csrf_exempt
def getFeaturedItemDesc(request):
    try:
        rawDistData = Promotions.objects.all()
    except Promotions.DoesNotExist:
        return Response({'status': 404, 'data': "category does not exist"})
    serialize = PromotionsSerializer(rawDistData, many=True)
    return Response({'status': 200, 'data': serialize.data})


@api_view(['GET', ])
@csrf_exempt
def getBanners(request):
    try:
        rawDistData = Banner.objects.all()
    except Banner.DoesNotExist:
        return Response({'status': 404, 'data': "data does not exist"})
    serialize = BannerSerializer(rawDistData, many=True)
    return Response({'status': 200, 'data': serialize.data})


@api_view(['POST', ])
@csrf_exempt
def getItemDesc(request):

    try:
        val = json.loads(request.body)
        title = val["title"]
        promotion_id = Promotions.objects.values_list('id').filter(title=title)
        p_id = promotion_id[0][0]
        rawDistData = FeaturedItem.objects.filter(promotion=p_id)
    except Exception as e:
        return Response({'status': 404, 'data': "data does not exist"})
    serialize = FeaturedItemSerializer(rawDistData, many=True)
    lookup = []
    for id, title in enumerate(serialize.data):
        serialize.data[id]['promoted_item']
        lookup.append(serialize.data[id]['promoted_item'])
    data = []
    for id in lookup:
        insert_data = ItemDescription.objects.filter(id=id)
        serialize_itemdesc = ItemDescriptionSerializer(insert_data, many=True)
        data.append(serialize_itemdesc.data)
    return Response({'status': 200, 'data': data})
