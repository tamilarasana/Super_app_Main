from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields
from import_export.widgets import ForeignKeyWidget
from . import models
from django import forms


@admin.register(models.Category)
class CategoryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['title', 'description', 'page_navigation', 'position']
    search_fields = ['title']
    list_editable = ['position']


class ItemDescSpecInline(admin.TabularInline):
    model = models.ItemDescSpec


class ItemlistResource(resources.ModelResource):
    category = fields.Field(column_name='category_id',
                            attribute='category', widget=ForeignKeyWidget(models.Category))

    class Meta:
        model = models.Itemlist
        import_id_fields = ['title']
        fields = ('title', 'slug', 'description', 'images', 'price',
                  'category', 'page_navigation', 'search_keyword')
        export_order = fields


class ItemDescriptionResource(resources.ModelResource):
    category = fields.Field(column_name='itemlist_id',
                            attribute='itemlist', widget=ForeignKeyWidget(models.Itemlist))

    class Meta:
        model = models.ItemDescription
        import_id_fields = ['title']
        fields = ('title', 'color', 'images', 'description',
                  'about', 'itemlist', 'page_navigation')
        export_order = fields


@admin.register(models.Itemlist)
class ItemlistAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    autocomplete_fields = ['category']
    prepopulated_fields = {
        'slug': ['title']
    }
    list_display = ['title', 'name', 'price',
                    'category_title', 'page_navigation']
    list_editable = ['price']
    list_filter = ['category']
    list_per_page = 10
    list_select_related = ['category']
    search_fields = ['title']
    resources_class = ItemlistResource

    def category_title(self, itemlist):
        return itemlist.category.title

    class Media:
        css = {
            'all': ['show/styles.css']
        }


@admin.register(models.ItemDescription)
class ItemDescriptionAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    autocomplete_fields = ['itemlist']
    inlines = [ItemDescSpecInline]
    list_display = ['title', 'price', 'itemlist_title']
    list_editable = ['price']
    list_filter = ['itemlist']
    list_per_page = 10
    list_select_related = ['itemlist']
    search_fields = ['title']
    resources_class = ItemDescriptionResource

    def itemlist_title(self, itemlist):
        return itemlist.title

    class Media:
        css = {
            'all': ['show/styles.css']
        }


class ItemDescSpecResource(resources.ModelResource):
    itemlist = fields.Field(column_name='item_desc_id',
                            attribute='item_desc', widget=ForeignKeyWidget(models.Itemlist))

    class Meta:
        model = models.ItemDescription
        import_id_fields = ['title']
        fields = ('title', 'subtitle', 'color', 'images',
                  'description', 'about', 'itemlist', 'page_navigation')
        export_order = fields


@admin.register(models.ItemDescSpec)
class ItemDescSpecAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ['item_desc', 'item_spec', 'value']
    search_fields = ['item_desc']
    resources_class = ItemDescSpecResource
    list_filter = ['item_desc']
