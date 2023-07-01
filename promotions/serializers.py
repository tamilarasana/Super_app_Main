from .models import *
from rest_framework import serializers
from showcase.serializers import ItemDescriptionSerializer

class FeaturedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeaturedItem
        fields = ['promoted_item', 'description', 'discount', 'position', 'page_navigation']

class PromotionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promotions
        fields = ['id', 'title', 'position']

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['promotion_type', 'title', 'image', 'description', 'page_navigation']

        