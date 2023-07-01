from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from profileutility.models import Profile
from decimal import Decimal
from rest_framework.decorators import api_view
from .loyalti import *
import json


@api_view(['POST'])
def makeLoyalty(request):
    data = json.loads(request.body)
    p_id = data.get('profile_id')
    amount = data.get('amount')
    type_of_transaction = data.get('transaction_type')
    gross_amount = data.get('gross_amount')

    if type_of_transaction == "Redeem":
        redeem_val = data.get('redeem_points')
        makeLoyalti(p_id, amount, type_of_transaction,
                    gross_amount, redeem_val)
    elif type_of_transaction == "Add":
        makeLoyalti(p_id, amount, type_of_transaction, gross_amount)

    return Response({"status": 200, "data": "static success"})
