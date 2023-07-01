from .models import *
from import_export.admin import ImportExportModelAdmin


@admin.register(AppBooking)
class AppBookingAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['profile', 'itemlist', 'created_at',
                    'payment_status', 'payment_id', 'amount', 'crmId']


@admin.register(NewCarBooking)
class NewCarBookingAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['name', 'email', 'mobile', 'profile', 'address', 'item_description',
                    'booking_id', 'city', 'outlets', 'item_price', 'employee_id', 'referred_by', 'booking_status']


@admin.register(UsedCarBooking)
class UsedCarBookingAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['itemlist', 'item_description', 'booking_id', 'profile', 'address', 'brand', 'model', 'transmission', 'fuel', 'year', 'phone', 'email',
                    'kms_driven_starting', 'kms_driven_ending', 'price', 'lat', 'long', 'enquire_at', 'scheduled', 'employee_id', 'referred_by', 'booking_status']


@admin.register(UsedcarSellEnquiry)
class UsedcarSellEnquiryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['address', 'evaluation_type', 'mobile_no', 'name', 'pincode', 'scheduled_at',
                    'brand', 'vehicle_model', 'vehicle_number', 'vehicle_variant', 'year_of_registration']


@admin.register(Service)
class ServiceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['booking_id', 'itemlist', 'item_description', 'profile', 'address', 'name', 'email', 'mobile', 'city', 'outlet',
                    'model', 'varient', 'color', 'pickup_slot', 'item_price', 'employee_id', 'referred_id', 'deliverred_time', 'booking_status']


@admin.register(Accessory)
class AccessoryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['booking_id', 'itemlist', 'item_description', 'profile',
                    'address', 'item_price', 'deliverred_time', 'booking_status']


@admin.register(Insurance)
class InsuranceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['itemlist', 'item_description', 'profile', 'address', 'name', 'email', 'mobile', 'registered_number', 'model', 'variant',
                    'fuel', 'reg_date', 'policy_expire_date', 'last_claim_status', 'claim_bonus', 'employee_id', 'reffered_by', 'booked_at', 'booking_status']


