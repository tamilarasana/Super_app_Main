from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import status, viewsets


# Check for existing profile - implementation starts

class EnquiryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = EnquirySerializer

    def get_queryset(self):
        phone = self.request.query_params['phone']
        return Enquiry.objects.filter(mobile=str(phone))


class BookingViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = BookingSerializer

    def get_queryset(self):
        phone = self.request.query_params['phone']
        return Booking.objects.filter(mobile=str(phone))


class RetailViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = RetailSerializer

    def get_queryset(self):
        cust_id = self.request.query_params['cust_id']
        return Retail.objects.filter(cust_id=str(cust_id))


class RetailCancelViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = RetailCancelSerializer

    def get_queryset(self):
        cust_id = self.request.query_params['cust_id']
        return RetailCancel.objects.filter(cust_id=str(cust_id))


class DeliveryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = DeliverySerializer

    def get_queryset(self):
        phone = self.request.query_params['phone']
        return Delivery.objects.filter(mobile=str(phone))


