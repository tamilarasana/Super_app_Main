from decimal import Decimal
from django.db import transaction
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'description', 'image', 'position']

class SimpleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']

class ItemDescSpecSerializer(serializers.ModelSerializer):    
        class Meta:
            model = ItemDescSpec
            fields = ['item_spec', 'value']

class ItemDescSpecSerializer(serializers.ModelSerializer):    
        class Meta:
            model = ItemDescSpec
            fields = ['item_spec', 'value']

class ItemDescriptionSerializer(serializers.ModelSerializer):   
 
        class Meta:
            model = ItemDescription
            fields = '__all__'

class GetItemDescriptionSerializer(serializers.ModelSerializer):   
        
        spec = ItemDescSpecSerializer(many=True, read_only=True) 
        class Meta:
            model = ItemDescription
            fields = ['id', 'title','subtitle', 'itemlist', 'color', 'price', 'images', 'description', 'about', 'page_navigation', 'spec']

class ItemlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Itemlist
        fields = ['id', 'title', 'name', 'description', 'price', 'category', 'page_navigation', 'images']


class InsuranceDataItemlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Itemlist
        fields = ['id', 'title', 'name']


class InsuranceDataSerializer(serializers.ModelSerializer):
    items = InsuranceDataItemlistSerializer(many=True)
    class Meta:
        model = Category
        fields = ['title', 'items']


class InsuranceDataItemDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemDescription
        fields = ['id', 'title', 'subtitle']


class InsuranceDataVarientSerializer(serializers.ModelSerializer):
    itemlist = InsuranceDataItemDescriptionSerializer(many=True)
    class Meta:
        model = Itemlist
        fields = ['title', 'name', 'itemlist']

