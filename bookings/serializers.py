from rest_framework import serializers
from .models import *
from showcase.serializers import *


class AppBookingSerializers(serializers.ModelSerializer):
    class Meta:
        model = AppBooking
        fields = '__all__'


class simpleAppBookingSerializers(serializers.ModelSerializer):
    source = serializers.CharField()

    class Meta:
        model = AppBooking
        fields = ['id', 'payment_status', 'mode_of_payment',
                  'gateway_session_id', 'gateway_order_id', 'source']

class NewCarBookingSerializers(serializers.ModelSerializer):

    class Meta:
        model = NewCarBooking
        fields = '__all__'

class NewCarAppBookingSerializers(serializers.ModelSerializer):
    booking_id = AppBookingSerializers()
    item_description = ItemDescriptionSerializer()

    class Meta:
        model = NewCarBooking
        fields = ['name', 'email', 'mobile', 'cust_id_or_reg_no', 'profile', 'address', 'item_description', 'booking_id', 'city', 'outlets', 'item_price', 'employee_id', 'referred_by', 'booking_status']

class UsedCarBookingSerializers(serializers.ModelSerializer):
    class Meta:
        model = UsedCarBooking
        fields = '__all__'


class ServiceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class SimpleServiceSerializers(serializers.ModelSerializer):
    booking_id  = AppBookingSerializers()
    item_description = ItemDescriptionSerializer()
    class Meta:
        model = Service
        fields = ['booking_id', 'itemlist', 'item_description', 'profile', 'address', 'name', 'email', 'mobile', 'cust_id_or_reg_no', 'city', 'outlet', 'model', 'varient', 'color', 'pickup_slot', 'item_price', 'employee_id', 'referred_id', 'deliverred_time', 'booking_status']

class ServiceAppBookingSerializers(serializers.ModelSerializer):

    class Meta:
        model = AppBooking
        fields = ['profile', 'itemlist', 'item_description', 'created_at', 'payment_status', 'payment_id', 'amount', 'cust_id_or_reg_no', 'mode_of_payment', 'gateway_session_id', 'gateway_order_id', 'crmId']



class AccessorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Accessory
        fields = '__all__'


class InsuranceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = '__all__'


class UsedcarSellEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = UsedcarSellEnquiry
        fields = '__all__'


class DetailNewCarBookingSerializers(serializers.ModelSerializer):
    booking_id = AppBookingSerializers()
    item_description = ItemDescriptionSerializer()

    class Meta:
        model = NewCarBooking
        fields = ['id', 'name', 'email', 'mobile', 'cust_id_or_reg_no', 'profile', 'address',
                  'booking_id', 'city', 'outlets', 'item_price', 'employee_id', 'referred_by', 'booking_status', 'item_description']


class DetailServiceSerializers(serializers.ModelSerializer):
    booking_id = AppBookingSerializers()
    item_description = ItemDescriptionSerializer()

    class Meta:
        model = Service
        fields = ['id', 'booking_id', 'itemlist', 'profile', 'address', 'name', 'email', 'mobile', 'cust_id_or_reg_no', 'city',
                  'outlet', 'model', 'varient', 'color', 'pickup_slot', 'item_price', 'employee_id', 'referred_id', 'deliverred_time', 'booking_status', 'item_description']
