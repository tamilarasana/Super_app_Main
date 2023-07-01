from django.urls import path
from django.urls.conf import include
from rest_framework_nested import routers
from . import views


router = routers.DefaultRouter()

router.register('enquiry', views.EnquiryViewSet, basename='enquiries')
router.register('booking', views.BookingViewSet, basename='booking')
router.register('retail', views.RetailViewSet, basename='retail')
router.register('retailcancel', views.RetailCancelViewSet, basename='retailcancel')
router.register('delivery', views.DeliveryViewSet, basename='delivery')

urlpatterns = router.urls