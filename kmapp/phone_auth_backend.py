from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from profileutility.models import Profile
from django.contrib.auth.models import User

class PhoneBackend(ModelBackend):
    def authenticate(self, request, phone=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            profile = Profile.objects.get(phone=phone)
        except Profile.DoesNotExist:
            return None
        use = User.objects.get(id=profile.user_id)    
        if use.check_password(password):
            return use
        return None
