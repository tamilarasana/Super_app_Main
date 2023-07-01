from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path("create_rto/", createRTO),
    path("get_rto/<str:rtocode>", getRTO),
    path("get_city/", getCity),
    path("get_app_version/", getVersion),
    path("get_outlets/<int:cityid>", getOutlet),
    path("fire_notification/<int:phone_no>", testFireNotification),
]
