from django.db import models
from profileutility.models import *
from showcase.models import *


class Loyalti(models.Model):
    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name="profile_loyalti", blank=True, null=True, unique=True)
    total_earned_points = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    balance_points = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    last_updated_points = models.DateTimeField(auto_now=True)
    business_turnover = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    inaugural_points = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    inaugural_points_eligible = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'LOYALTY SUMMARY'
        verbose_name_plural = 'LOYALTY SUMMARY'


class LoyaltiTransaction(models.Model):
    SUCCESS = 'Success'
    FAILED = 'Failed'

    STATUS_CHOICES = [
        (SUCCESS, 'Success'),
        (FAILED, 'Failed'),
    ]

    ADD = 'Add'
    REDEEM = 'Redeem'

    TRANSACTION_CHOICES = [
        (ADD, 'Add'),
        (REDEEM, 'Redeem'),
    ]

    profile = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name="profile_loyalti_transaction", blank=True, null=True)
    loyalti = models.ForeignKey(
        Loyalti, on_delete=models.CASCADE, blank=True, null=True)
    grand_total = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    amount = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    transaction_number = models.CharField(
        max_length=250, null=True, blank=True)
    points_used = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    added_points = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True, default=0)
    status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default=None)
    time_of_transaction = models.DateTimeField(auto_now=True)
    transaction_type = models.CharField(
        max_length=50, choices=TRANSACTION_CHOICES, default=None)

    class Meta:
        verbose_name = 'LOYALTY TRANSACTIONS'
        verbose_name_plural = 'LOYALTY TRANSACTIONS'


class LoyaltiEntity(models.Model):
    MEMBER = 'Member'
    GOLD = 'Gold'
    PLATINUM = 'Platinum'
    INAUGURAL = 'Inaugural'

    CATEGORY_CHOICES = [
        (MEMBER, 'Member'),
        (GOLD, 'Gold'),
        (PLATINUM, 'Platinum'),
        (INAUGURAL, 'Inaugural'),
    ]

    category = models.CharField(
        max_length=50, choices=CATEGORY_CHOICES, default=MEMBER)
    points_add_per_100 = models.DecimalField(
        max_digits=12, decimal_places=2, null=True, blank=True)
    points_upgrade = models.IntegerField(default=0, blank=True, null=True)
    time_of_update = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'LOYALTY CLAUSE'
        verbose_name_plural = 'LOYALTY CLAUSE'
