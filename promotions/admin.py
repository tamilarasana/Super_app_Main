from django.contrib import admin
from . import models
from import_export.admin import ImportExportModelAdmin


@admin.register(models.Banner)
class BannerAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['promotion_type', 'title',
                    'image', 'description', 'page_navigation']
    search_fields = ['promotion_type']


@admin.register(models.Promotions)
class PromotionsAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['title', 'position']
    search_fields = ['position']


@admin.register(models.FeaturedItem)
class FeaturedItemAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['promotion', 'promoted_item',
                    'description', 'discount', 'position', 'page_navigation']
    search_fields = ['promotion']
