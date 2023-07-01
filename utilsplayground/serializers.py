from rest_framework import serializers
from showcase.models import *
from .models import *


class RTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = RTO
        fields = ('display_order', 'is_popular',
                  'rto_code', 'rto_id', 'rto_name')


class ItemlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Itemlist
        fields = ['id', 'title']


class CategorySerializer(serializers.ModelSerializer):
    items = ItemlistSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'items']


class RTOSerializers(serializers.ModelSerializer):
    items = ItemlistSerializer(many=True)

    class Meta:
        model = RTO
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'title']


class VersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppVersion
        fields = '__all__'


class OutletSerializers(serializers.ModelSerializer):
    class Meta:
        model = Outlet
        fields = ['id', 'name']
