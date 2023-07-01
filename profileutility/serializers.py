from rest_framework import serializers
from .models import *
from showcase.models import ItemDescription, Category, Itemlist, Category
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from loyalti.models import Loyalti


class EnquirylogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquirylog
        fields = ['id', 'type_of_enq', 'title', 'list', 'detail', 'mobile',
                  'email', 'remarks', 'kmdriven', 'price', 'enquire_at', 'scheduled']


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'password',
                  'email', 'first_name', 'last_name']


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class GetItemDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemDescription
        fields = ['id', 'title', 'subtitle', 'itemlist', 'color', 'price',
                  'images', 'description', 'about', 'page_navigation', 'spec']


class SimpleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class SimpleItemListSerializer(serializers.ModelSerializer):
    category = SimpleCategorySerializer()

    class Meta:
        model = Itemlist
        fields = ['id', 'title', 'name', 'images', 'category']


class SimpleItemDescriptionSerializer(serializers.ModelSerializer):
    itemlist = SimpleItemListSerializer()

    class Meta:
        model = ItemDescription
        fields = ['id', 'title', 'subtitle',
                  'itemlist', 'color', 'price', 'images']


class SimpleWishlistSerializer(BaseUserSerializer):
    item = SimpleItemDescriptionSerializer()

    class Meta:
        model = Wishlist
        fields = ['id', 'profile', 'item']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class AllWishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ['item_id']

    def to_representation(self, instance):
        return instance.item_id


class WishlistSerializer(BaseUserSerializer):
    item = GetItemDescriptionSerializer()

    class Meta:
        model = Wishlist
        fields = ['id', 'profile', 'item']


class ProfileActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileActivity
        fields = '__all__'


class ProfileAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileAddress
        fields = '__all__'


class ProfileFbtokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFbtoken
        fields = ['id', 'type_of_token', 'device_name',
                  'token', 'status', 'profile_id']


class ProfileAoiSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileAoi
        fields = ['id', 'type', 'interest', 'remarks']


class ProfileNoticationPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileNoticationPreference
        fields = '__all__'


class ProfileVerificationSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProfileVerification
        fields = '__all__'


class ProfileSearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProfileSearch
        fields = ['keyword', 'search_at']


class SimpleProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    profile_address = ProfileAddressSerializer(many=True)
    profile_fb = ProfileFbtokenSerializer(many=True)
    profile_preference = ProfileNoticationPreferenceSerializer(many=True)
    profile_aoi = ProfileAoiSerializer(many=True)
    profile_search = ProfileSearchSerializer(many=True)
    activity_profile = ProfileActivitySerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'user', 'phone', 'gender', 'year_of_birth', 'membership', 'profile_address',
                  'profile_fb', 'profile_preference', 'profile_aoi', 'profile_search', 'activity_profile', 'app_version']


class ProfileUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['id', 'user', 'phone', 'year_of_birth', 'membership']


class PaymentTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentTransaction
        fields = '__all__'


class GetSimpleItemDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemDescription
        fields = ['id', 'title', 'subtitle', 'color', 'price', 'images']


class PaymentRequestSerializer(serializers.ModelSerializer):
    # item = GetSimpleItemDescriptionSerializer()

    class Meta:
        model = PaymentRequest
        fields = '__all__'


class Profile_ProfileAddressSerializer(serializers.ModelSerializer):
    profile_address = ProfileAddressSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'phone', 'profile_address']


class Profile_ProfileFbtokenSerializer(serializers.ModelSerializer):
    profile_fb = ProfileFbtokenSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'phone', 'profile_fb']


class Profile_ProfileAoiSerializer(serializers.ModelSerializer):
    profile_aoi = ProfileAoiSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'phone', 'profile_aoi']


class LoyaltiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loyalti
        fields = "__all__"
