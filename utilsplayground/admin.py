from django.contrib import admin
from .models import *


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(Outlet)
class OutletAdmin(admin.ModelAdmin):
    list_display = ['city', 'name']


@admin.register(PaymentMode)
class PaymentModeAdmin(admin.ModelAdmin):
    list_display = ['payment_mode_name', 'status']


@admin.register(AppVersion)
class AppVersionAdmin(admin.ModelAdmin):
    list_display = ['version_name', 'version_description', 'version_number',
                    'version_notes', 'version_remarks', 'version_status']
