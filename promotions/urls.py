from unicodedata import name
from unittest.mock import patch
from django.urls import path
from .views import *

urlpatterns = [
    path('promo/', getFeaturedItemDesc, name="promo"),
    path('get_banners/', getBanners, name="banners"),
    path('get_featured_item/', getItemDesc, name="featured_item")
]
