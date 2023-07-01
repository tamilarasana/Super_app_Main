from django.db import models


class RTO(models.Model):
    display_order = models.CharField(max_length=255, blank=True, null=True)
    is_popular = models.CharField(max_length=255, blank=True, null=True)
    rto_code = models.CharField(max_length=255, blank=True, null=True)
    rto_id = models.CharField(max_length=255, blank=True, null=True)
    rto_name = models.CharField(max_length=255, blank=True, null=True)


class City(models.Model):
    title = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'OUTLET CITY'
        verbose_name_plural = 'OUTLET CITY'


class Outlet(models.Model):
    city = models.ForeignKey(
        City, on_delete=models.CASCADE, blank=True, null=True, related_name='city')
    name = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        verbose_name = 'OUTLET LOCATION'
        verbose_name_plural = 'OUTLET LOCATION'


class PaymentMode(models.Model):
    ACTIVE = 'Active'
    INACTIVE = 'InActive'

    STATUS_CHOICES = [
        (ACTIVE, 'Active'),
        (INACTIVE, 'InActive'),
    ]
    payment_mode_name = models.CharField(max_length=250, blank=True, null=True)
    status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default=ACTIVE)

    class Meta:
        verbose_name = 'PAYMENT MODE'
        verbose_name_plural = 'PAYMENT MODE'


class AppVersion(models.Model):
    version_name = models.CharField(max_length=250, blank=True, null=True)
    version_description = models.CharField(
        max_length=250, blank=True, null=True)
    version_number = models.CharField(max_length=250, blank=True, null=True)
    version_notes = models.CharField(max_length=250, blank=True, null=True)
    version_remarks = models.CharField(max_length=250, blank=True, null=True)
    version_status = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        verbose_name = 'APP VERSIONS'
        verbose_name_plural = 'APP VERSIONS'
