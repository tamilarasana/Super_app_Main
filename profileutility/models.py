from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User
from showcase.models import ItemDescription
from showcase.models import Category
# from bookings.models import AppBooking
# import bookings.models


class Profile(models.Model):
    MEMBERSHIP_MEMBER = 'Member'
    MEMBERSHIP_GOLD = 'Gold'
    MEMBERSHIP_PLATINUM = 'Platinum'

    MEMBERSHIP_CHOICES = [
        (MEMBERSHIP_MEMBER, 'Member'),
        (MEMBERSHIP_GOLD, 'Gold'),
        (MEMBERSHIP_PLATINUM, 'Platinum'),
    ]

    ACTIVE = 'Active'
    INACTIVE = 'Inactive'

    ACTIVE_STATUS = [
        (ACTIVE, 'Active'),
        (INACTIVE, 'Inactive'),
    ]

    phone = models.CharField(max_length=255, null=True,
                             blank=True, unique=True)
    gender = models.CharField(max_length=255, null=True, blank=True)
    lat = models.CharField(max_length=255, null=True, blank=True)
    long = models.CharField(max_length=255, null=True, blank=True)
    year_of_birth = models.IntegerField(null=True, blank=True)
    active_status = models.CharField(
        max_length=50, choices=ACTIVE_STATUS, default=ACTIVE)
    membership = models.CharField(
        max_length=25, choices=MEMBERSHIP_CHOICES, default=MEMBERSHIP_MEMBER)
    user = models.OneToOneField(
        User, on_delete=models.PROTECT, related_name='user')
    verified_profile = models.BooleanField(default=False)
    app_version = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self) -> str:
        return self.user.username

    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    class Meta:
        ordering = ['user__first_name', 'user__last_name']
        verbose_name = 'USER PROFILE'
        verbose_name_plural = 'USER PROFILE'


class ProfileAddress(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='profile_address')
    type_of_address = models.CharField(max_length=255, null=True, blank=True)
    door_no = models.CharField(max_length=255, null=True, blank=True)
    street = models.CharField(max_length=255, null=True, blank=True)
    area = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    landmark = models.CharField(max_length=255, null=True, blank=True)
    pincode = models.CharField(max_length=255, null=True, blank=True)
    lat = models.CharField(max_length=255, null=True, blank=True)
    long = models.CharField(max_length=255, null=True, blank=True)
    status = models.SmallIntegerField(default=1, null=True, blank=True)

    class Meta:
        verbose_name = 'PROFILE ADDRESS'
        verbose_name_plural = 'PROFILE ADDRESS'

    def __str__(self) -> str:
        return self.city


class ProfileFbtoken(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='profile_fb')
    type_of_token = models.CharField(max_length=255, null=True, blank=True)
    device_name = models.CharField(max_length=255, null=True, blank=True)
    token = models.CharField(max_length=255, null=True, blank=True)
    status = models.SmallIntegerField(default=1, null=True, blank=True)

    class Meta:
        verbose_name = 'FB TOKENS'
        verbose_name_plural = 'FB TOKENS'


class ProfileNoticationPreference(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='profile_preference')
    type_of_notification = models.CharField(
        max_length=255, null=True, blank=True)
    status = models.SmallIntegerField(default=1, null=True, blank=True)

    class Meta:
        verbose_name = 'NOTIFICATION PREFERENCE'
        verbose_name_plural = 'NOTIFICATION PREFERENCE'


class ProfileAoi(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='profile_aoi')
    type = models.CharField(max_length=255, null=True, blank=True)
    interest = models.CharField(max_length=255, null=True, blank=True)
    remarks = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = 'PROFILE AOI'
        verbose_name_plural = 'PROFILE AOI'


class ProfileSearch(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='profile_search', default=None)
    keyword = models.CharField(max_length=255)
    search_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'PROFILE SEARCH'
        verbose_name_plural = 'PROFILE SEARCH'


class ProfileActivity(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='activity_profile')
    type = models.CharField(max_length=255, null=True, blank=True)
    instance = models.CharField(max_length=255, null=True, blank=True)
    search_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'PROFILE ANALYTICS'
        verbose_name_plural = 'PROFILE ANALYTICS'


class Enquirylog(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='profile_log', null=True, blank=True, default=None)
    profile_address = models.ForeignKey(
        ProfileAddress, on_delete=models.CASCADE, related_name='profile_address', null=True, blank=True, default=None)

    type_of_enq = models.CharField(max_length=255, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    list = models.CharField(max_length=255, null=True, blank=True)
    detail = models.CharField(max_length=255, null=True, blank=True)
    mobile = models.CharField(max_length=255, null=True, blank=True)
    email = models.CharField(max_length=255, null=True, blank=True)

    remarks = models.TextField(null=True, blank=True)
    kmdriven = models.CharField(max_length=255, null=True, blank=True)
    price = models.CharField(max_length=255, null=True, blank=True)

    lat = models.CharField(max_length=255, null=True, blank=True)
    long = models.CharField(max_length=255, null=True, blank=True)

    enquire_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    scheduled = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        verbose_name = 'Enquiry Log'
        verbose_name_plural = 'Enquiry Logs'


class Wishlist(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='wishlist_profile')
    item = models.ForeignKey(
        ItemDescription, on_delete=models.CASCADE, related_name='profile_item')

    class Meta:
        unique_together = [['profile', 'item']]
        verbose_name = 'WISHLIST'
        verbose_name_plural = 'WISHLIST'


class PaymentRequest(models.Model):
    SUCCESS = 'Success'
    PENDING = 'Pending'
    EXPIRED = 'Expired'
    DECLINED = 'Declined'

    STATUS_CHOICES = [
        (SUCCESS, 'Success'),
        (PENDING, 'Pending'),
        (EXPIRED, 'Expired'),
        (DECLINED, 'Declined')
    ]

    internal_profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='profile_crm', null=True, blank=True)
    register_no_or_cust_id = models.CharField(
        max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    payment_status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default=PENDING)

    payment_gateway = models.CharField(max_length=250, null=True, blank=True)
    gateway_order_id = models.CharField(max_length=250, null=True, blank=True)
    gateway_session_id = models.CharField(
        max_length=250, null=True, blank=True)

    channel = models.CharField(max_length=255, null=True, blank=True)
    item = models.CharField(max_length=255, null=True, blank=True)

    loyalti_transaction_type = models.CharField(
        max_length=250, blank=True, null=True)
    gross_amount = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    special_coupon = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    e_point = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    i_point = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    cgst_sgst = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    net_paid = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)

    amount = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    purpose = models.TextField(null=True, blank=True)
    crmId = models.CharField(max_length=255, null=True, blank=True)
    transaction_number = models.CharField(
        max_length=255, null=True, blank=True)
    billNumberOrInvoiceNumber = models.CharField(
        max_length=255, null=True, blank=True)
    transactionReferenceNumber = models.CharField(
        max_length=255, null=True, blank=True)

    requested_employee_id = models.CharField(
        max_length=255, null=True, blank=True)
    requested_employee_name = models.CharField(
        max_length=255, null=True, blank=True)
    requested_employee_mobile = models.CharField(
        max_length=255, null=True, blank=True)
    requested_employee_location = models.CharField(
        max_length=255, null=True, blank=True)
    region = models.CharField(max_length=255, null=True, blank=True)
    channel = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    modified_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    dont_show = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'PAYMENT REQUEST'
        verbose_name_plural = 'PAYMENT REQUEST'

    def __str__(self) -> str:
        return self.name


class PaymentTransaction(models.Model):
    SUCCESS = 'Success'
    PENDING = 'Pending'
    EXPIRED = 'Expired'
    FAILED = 'Failed'
    ERROR = 'Error'

    STATUS_CHOICES = [
        (SUCCESS, 'Success'),
        (PENDING, 'Pending'),
        (EXPIRED, 'Expired'),
        (FAILED, 'Failed'),
        (ERROR, 'Error'),
    ]

    crm_profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='crm_profile', null=True, blank=True)
    payment_instance = models.ForeignKey(
        PaymentRequest, on_delete=models.PROTECT, related_name='payment_transaction', null=True, blank=True)
    booking_instance = models.ForeignKey(
        'bookings.AppBooking', on_delete=models.PROTECT, related_name='booking_transaction', null=True, blank=True)
    transaction_reference_no = models.CharField(
        max_length=255, null=True, blank=True)
    transaction_status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default=PENDING)
    mode_of_payment = models.CharField(max_length=255, null=True, blank=True)
    transaction_date = models.DateTimeField(
        auto_now_add=True, null=True, blank=True)
    transaction_charge = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    total_transaction_amount = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    remarks = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'PAYMENT TRANSACTION'
        verbose_name_plural = 'PAYMENT TRANSACTION'


class ProfileVerification(models.Model):

    profile = models.ForeignKey(
        Profile, on_delete=models.PROTECT, related_name='pan_profile', null=True, blank=True)
    pan_number = models.CharField(max_length=255, null=True, blank=True)
    name_as_per_pan = models.CharField(max_length=100, null=True, blank=True)
    dob = models.CharField(max_length=50, null=True, blank=True)
    pan_image = models.ImageField(upload_to='store/images')

    verified_pan = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'PROFILE DOCUMENTS'
        verbose_name_plural = 'PROFILE DOCUMENTS'
