from django.contrib import admin
from . import models
from import_export.admin import ImportExportModelAdmin, ExportActionMixin, ImportMixin
from django.contrib.auth.models import User
from import_export import resources


class ProfileAddressInline(admin.TabularInline):
    model = models.ProfileAddress


class ProfileFbtokenInline(admin.TabularInline):
    model = models.ProfileFbtoken


class ProfileNoticationPreferenceInline(admin.TabularInline):
    model = models.ProfileNoticationPreference


class ProfileAoiInline(admin.TabularInline):
    model = models.ProfileAoi


class UserResource(resources.ModelResource):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class UserAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = UserResource

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.order_by('id')


admin.site.unregister(User)
admin.site.register(User, UserAdmin)


@admin.register(models.Profile)
class ProfileAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['phone', 'gender', 'user']
    inlines = [ProfileAddressInline, ProfileFbtokenInline,
               ProfileNoticationPreferenceInline, ProfileAoiInline]


# @admin.register(models.Enquirylog)
# class EnquirylogAdmin(ImportExportModelAdmin, admin.ModelAdmin):
#     list_display = ['type_of_enq', 'title', 'list', 'detail', 'mobile',
#                     'email', 'remarks', 'kmdriven', 'price', 'enquire_at', 'scheduled',]
#     search_fields = ['type_of_enq']


@admin.register(models.Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ['profile', 'item']
    search_fields = ['item']


@admin.register(models.ProfileActivity)
class ProfileActivityAdmin(admin.ModelAdmin):
    list_display = ['profile', 'type', 'instance']
    search_fields = ['type', 'instance']


@admin.register(models.PaymentRequest)
class PaymentRequestAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['internal_profile', 'phone',
                    'name', 'amount', 'created_at', 'modified_at']
    search_fields = ['internal_profile', 'category', 'item']


@admin.register(models.PaymentTransaction)
class PaymentTransactionAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['transaction_reference_no', 'transaction_status', 'mode_of_payment',
                    'transaction_date', 'transaction_charge', 'total_transaction_amount', 'remarks']
    search_fields = ['transaction_reference_no',
                     'transaction_status', 'mode_of_payment', 'transaction_date']


@admin.register(models.ProfileVerification)
class ProfileVerificationAdmin(admin.ModelAdmin):
    list_display = ['profile', 'pan_number',
                    'name_as_per_pan', 'dob', 'pan_image', 'verified_pan']
    search_fields = ['profile', 'pan_number', 'name_as_per_pan', 'dob']
