from rest_framework import serializers
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from .models import *


class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ['id', 'location', 'enquiry_num', 'dse_code', 'dse_name', 'prospect_name', 'mobile', 'email', 'model', 'status', 'source']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['location','enquiry_num','order_num','order_date','cust_id','prospect_name','mobile','email','model','dse_code','dse_name','selling_price','received_amount','balanced_amount','delivery_date']
        

class RetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retail
        fields = ['location','status','delivery_date','model','cust_id','prospect_name','dse_code','dse_name','reg_no','mobile','basic_price','enquiry_num','pan_no','status']


class RetailCancelSerializer(serializers.ModelSerializer):
    class Meta:
        model = RetailCancel
        fields = ['location','status','delivery_date','prom_delivery_date','model','cust_id','prospect_name','dse_code','dse_name','reg_no','mobile','basic_price','dicount_cic','discount','exchange_price','state_gst','tax_col','inv_amt','purchase_price','pan_no','enquiry_num']


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = ['location','delivery_no','delivery_date','invoice_no','dse_code','dse_name','cust_id','prospect_name','email','address1','address2','address3','city','pin','mobile','model','chassis_no']

