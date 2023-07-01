from django.db import models
from showcase.models import ItemDescription


class Banner(models.Model):

    CATEGORY_TEXT = 'text'
    CATEGORY_IMAGE = 'image'

    CATEGORY_CHOICES = [
        (CATEGORY_TEXT, 'text'),
        (CATEGORY_IMAGE, 'image'),
    ]

    promotion_type = models.CharField(
        max_length=15, choices=CATEGORY_CHOICES, default=CATEGORY_IMAGE)
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='store/images', null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    page_navigation = models.CharField(max_length=255, null=True, blank=True)
    position = models.PositiveSmallIntegerField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['title']
        verbose_name = 'BANNERS'
        verbose_name_plural = 'BANNERS'


class Promotions(models.Model):
    title = models.CharField(max_length=255)
    position = models.PositiveSmallIntegerField()

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['title']
        verbose_name = 'PROMOTIONS'
        verbose_name_plural = 'PROMOTIONS'


class FeaturedItem(models.Model):
    promotion = models.ForeignKey(
        Promotions, on_delete=models.PROTECT, related_name='promotion', null=True, blank=True)
    promoted_item = models.ForeignKey(
        ItemDescription, on_delete=models.PROTECT, related_name='promoted_item', null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    discount = models.FloatField(null=True, blank=True)
    position = models.PositiveSmallIntegerField(null=True, blank=True)
    page_navigation = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = 'FEATURED ITEMS'
        verbose_name_plural = 'FEATURED ITEMS'


class NotificationManager(models.Model):

    APP_NOTIFICATION = 'APP_NOTIFICATION'
    PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
    SPECIAL_NOTIFICATION = 'SPECIAL_NOTIFICATION'
    DIRECT_NOTIFICATION = 'DIRECT_NOTIFICATION'
    SMS_NOTIFICATION = 'SMS_NOTIFICATION'
    WHATSAPP_NOTIFICATION = 'WHATSAPP_NOTIFICATION'
    EMAIL_NOTIFICATION = 'EMAIL_NOTIFICATION'
    OTHER_NOTIFICATION = 'OTHER'

    CATEGORY_CHOICES = [
        (APP_NOTIFICATION, 'APP_NOTIFICATION'),
        (PUSH_NOTIFICATION, 'PUSH_NOTIFICATION'),
        (SPECIAL_NOTIFICATION, 'SPECIAL_NOTIFICATION'),
        (DIRECT_NOTIFICATION, 'DIRECT_NOTIFICATION'),
        (SMS_NOTIFICATION, 'SMS_NOTIFICATION'),
        (WHATSAPP_NOTIFICATION, 'WHATSAPP_NOTIFICATION'),
        (EMAIL_NOTIFICATION, 'EMAIL_NOTIFICATION'),
        (OTHER_NOTIFICATION, 'OTHER'),
    ]

    HOURLY_NOTIFICATION = 'HOURLY_NOTIFICATION'
    DAILY_NOTIFICATION = 'DAILY_NOTIFICATION'
    WEEKLY_NOTIFICATION = 'WEEKLY_NOTIFICATION'
    MONTHLY_NOTIFICATION = 'MONTHLY_NOTIFICATION'
    QUATERLY_NOTIFICATION = 'QUATERLY_NOTIFICATION'
    YEARLY_NOTIFICATION = 'YEARLY_NOTIFICATION'
    LATER_NOTIFICATION = 'LATER_NOTIFICATION'

    SCHEDULE_TYPE_CHOICES = [
        (HOURLY_NOTIFICATION, 'HOURLY_NOTIFICATION'),
        (DAILY_NOTIFICATION, 'DAILY_NOTIFICATION'),
        (WEEKLY_NOTIFICATION, 'WEEKLY_NOTIFICATION'),
        (MONTHLY_NOTIFICATION, 'MONTHLY_NOTIFICATION'),
        (QUATERLY_NOTIFICATION, 'QUATERLY_NOTIFICATION'),
        (YEARLY_NOTIFICATION, 'YEARLY_NOTIFICATION'),
        (LATER_NOTIFICATION, 'LATER_NOTIFICATION'),
    ]

    ACTIVE = 'ACTIVE'
    INACTIVE = 'INACTIVE'
    PAUSE = 'PAUSE'
    DISABLE = 'DISABLE'

    STATUS_TYPE_CHOICES = [
        (ACTIVE, 'ACTIVE'),
        (INACTIVE, 'INACTIVE'),
        (PAUSE, 'PAUSE'),
        (DISABLE, 'DISABLE'),
    ]

    notification_type = models.CharField(
        max_length=50, choices=CATEGORY_CHOICES, default=APP_NOTIFICATION)
    notification_title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='store/images', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    from_date = models.DateTimeField(null=True, blank=True)
    to_date = models.DateTimeField(null=True, blank=True)
    schedule_time = models.TimeField(null=True, blank=True)
    schedule_type = models.CharField(
        max_length=50, choices=SCHEDULE_TYPE_CHOICES, default=DAILY_NOTIFICATION)
    recurring = models.BooleanField(default=False)
    status = models.CharField(
        max_length=50, choices=STATUS_TYPE_CHOICES, default=ACTIVE)

    def __str__(self) -> str:
        return self.notification_title

    class Meta:
        ordering = ['notification_title']
        verbose_name = 'NOTIFICATION MANAGER'
        verbose_name_plural = 'NOTIFICATION MANAGER'
