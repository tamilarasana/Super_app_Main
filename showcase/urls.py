from django.urls import path
from .views import *
app_name = "SuperApp"

urlpatterns = [
    # CATEGORY - ITEM LIST - ITEM DESCRIPTION - related
    path('get_category/', getCategory, name="categories"),
    path('get_itemlist/<int:key>', getItemList, name="itemlists"),
    
    path('get_dist_itemdesc/<int:key>', getItemDescDist, name="disct itemdesc"),
    path('get_itemdesc/<int:key>', getItemDesc, name="itemdesc"),
    path('get_color_itemdesc/', getColorItemDesc, name="coloritemdesc"),
    path('get_withoutdist_itemdesc/<int:key>', getItemDescWithoutDist, name="disct itemdesc"),
    
    path('insurance_car_data', getInsuranceCarData, name="insurance data"),
    path('insurance_car_data/<int:key>', getInsuranceCarVarientData, name="insurance data"),

    #Accessory Search   
    path('accessories_data', getSearchAccessories, name="accessories data"),

    # Search
    path('search_item/', search_item, name="search_item")
]