from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import *

# Register your models here.


@admin.register(Loyalti)
class LoyaltiAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['profile', 'balance_points', 'total_earned_points',
                    'last_updated_points', 'business_turnover', 'inaugural_points', 'inaugural_points_eligible']


@admin.register(LoyaltiTransaction)
class LoyaltiTransactionAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['profile', 'loyalti', 'amount',
                    'status', 'time_of_transaction', 'transaction_type', 'grand_total', 'points_used']


@admin.register(LoyaltiEntity)
class LoyaltiEntityAdmin(admin.ModelAdmin):
    list_display = ['category', 'points_add_per_100',
                    'time_of_update', 'status']
