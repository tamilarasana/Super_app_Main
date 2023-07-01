from django.urls import path
from .views import *

urlpatterns = [

    # Wishlists
    path('make_wishlist/<int:query>/', makeWish, name="wishlist"),
    path('make_wishlist/', createWish, name="wishlist"),

    # new wishlist
    path('get_wishlisted_items/<int:id>', getWishlist, name="wishlist"),

    # get -all - wishlisted- items
    path('all_wishlist_itemdesc/<int:key>',
         getAllWishlist, name="all-wishlist"),

    # Authentication
    path('login/', login_view, name="login"),
    path('forgot_password/', forgotPassword, name="password"),
    path('get_user/', userExistance, name="profile"),

    # ENQUIRY - related
    path('create_enquiry/', createEquiry, name="enquiry-log"),
    path('create_cust_analysis/', custActivity, name="activity"),

    # CUSTOMER - related
    path('get_profile/<int:cust_id>', getProfile, name="get_profile"),
    path('profile_detail/', profileCU, name="detail"),  # profile_related
    path('profile_search/', profileSearch, name="search"),


    # update pan details
    path('update_user_pan/', updatePan, name="pancard"),

    # Update - Profile Address
    path('profile_address_create_get/<int:id>', getAddressByProfile,
         name="profile_address_create_get"),  # id - Profile PK
    path('profile_address_update_delete_get/<int:id>', getProfileAddressModify,
         name="profile_address_update_delete_get"),  # id - address PK

    # Update - Profile FB token
    path('profile_fbtoken_create_get/<int:id>', getFbtokenByProfile,
         name="profile_fbtoken_create_get"),  # id - Profile PK
    path('profile_fbtoken_modify_del_get/<int:id>', getProfileFbtokenModify,
         name="Profile_fbtoken_modify_del_get"),  # id - fb_token PK

    # Update - Profile AOI
    path('profile_aoi_create_get/<int:id>', getaoiByProfile,
         name="get_aoi_by_profile"),  # id - Profile PK
    path('profile_aoi_modify_del_get/<int:id>', getProfileaoiModify,
         name="get_profile_aoi_modify"),  # id - aoi PK

    # Update - Profile Notification Preferences
    path('profile_notfication_create_get/<int:id>', getnotficationByProfile,
         name="profile_notfication_create_get"),  # id - Profile PK
    path('profile_notification_modify_del_get/<int:id>', getProfileanoticationModify,
         name="profile_notification_modify_del_get"),  # id - notication_preference PK

    # Payment - Transactions
    path('instantiate_payment/', profileCrm, name="transaction_instance"),
    path('instantiate_payment/<int:phone>',
         profileCrmRD, name="transaction_profile"),
    path('payment_transaction/', crmTransaction, name="transaction_crm"),

    path('make_transaction_log/', logTransaction, name="transaction_log"),

    path('payment_status/', paymentStatus, name="payment_status"),
    path('check_loyalti_points/<int:p_id>',
         checkLoyaltiPoints, name="point_redumption"),

    path('make_pr_session/<int:p_id>', makeSession, name="create_session"),
]
