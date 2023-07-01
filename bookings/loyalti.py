from .models import *
from rest_framework.response import Response
from profileutility.models import Profile
from decimal import Decimal


def makeLoyalti(p_id, points, turnover, type_of_transaction):
    try:
        points = Decimal(points)
        profile_data = Profile.objects.filter(id=p_id).first()

        loyalti_data = Loyalti.objects.filter(profile_id=p_id).first()
        old_bal = loyalti_data.balance_points

        # loyalti_ent = LoyaltiEntity.objects.filter()

        if type_of_transaction == 'add':
            new_bal = old_bal + points

        elif type_of_transaction == 'redeem':
            new_bal = old_bal - points

        try:
            loyalti_data.balance_points = new_bal
            loyalti_data.business_turnover = turnover
            loyalti_data.save()
            loy_transaction = LoyaltiTransaction.objects.create(
                profile=profile_data,
                amount=points,
                transaction_type=type_of_transaction,
                status="Success",
                loyalti=loyalti_data
            )
            loy_transaction.save()
        except Exception as e:
            loy_transaction = LoyaltiTransaction.objects.create(
                profile=profile_data,
                amount=points,
                transaction_type=type_of_transaction,
                status="Failed"
            )
            loy_transaction.save()

    except Exception as e:
        return Response({'status': 400, 'data': str(e)})
