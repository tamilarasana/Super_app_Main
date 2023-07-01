from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    # Bookings, Services, Accessories...
    path("create_fetch_appbooking/", appBooking),
    path("make_booking/", commonBooking),

    path("decode_booking_payload/", bookingDecode),

    path("get_update_delete_appbooking/<int:id>", appBookingUD),

    # All booking and app booking in same.
    path("create_decode_booking/", commonDecodeBooking),
    path("create_usedcarsell_enq/", usedCarSellEnquiry),

    path("get_transaction_record/<int:phone>", getBookingTransaction),
    path("verify_booking_id/", verifyBookingPayment),


    # path("create_fetch_newcarbooking/",newCarBooking),
    # path("create_fetch_service/",serviceBooking),
    # path("create_fetch_accessory/",accessoryBooking),
    # path("update_delete_newcarbooking/<int:id>",newCarBookingUD),
    # path("create_fetch_usedcarbooking/",usedCarBooking),
    # path("update_delete_usedcarbooking/<int:id>",usedCarBookingUD),
    # path("update_delete_service/<int:id>",serviceBookingUD),
    # path("create_fetch_insurance/",insuranceBooking),
    # path("update_delete_insurance/<int:id>",insuranceBookingUD),
    # path("update_delete_accessory/<int:id>",accessoryBookingUD),
]
