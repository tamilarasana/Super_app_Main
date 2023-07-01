from .models import *
from rest_framework.response import Response
from profileutility.models import Profile
from decimal import Decimal


def makeLoyalti(p_id, amount, type_of_transaction, gross_amount, transaction_ref_no, redeem_val=None, i_val=None):
    total_amount = gross_amount
    paid_total = amount
    t_type = type_of_transaction

    try:
        old_bal = 0
        turnover = 0
        total_earned = 0
        used_points = 0
        existing_i_point = 0

        profile_data = Profile.objects.filter(id=p_id).first()
        loyalti_data = Loyalti.objects.filter(profile_id=p_id).first()
        if loyalti_data:
            old_bal = loyalti_data.balance_points
            total_earned = loyalti_data.total_earned_points
            turnover = loyalti_data.business_turnover + amount
            existing_i_point = loyalti_data.inaugural_points

        membership = profile_data.membership
        points_for_plan = LoyaltiEntity.objects.get(category=membership)
        percentage = points_for_plan.points_add_per_100
        calc_value = percentage / 100

        points = amount * calc_value

        if type_of_transaction == 'Add':
            new_bal = old_bal + points
        elif type_of_transaction == 'Redeem':
            if old_bal >= redeem_val:
                new_bal = old_bal - redeem_val
                used_points = redeem_val
                new_bal = new_bal + points
            if existing_i_point >= i_val:
                existing_i_point = existing_i_point - i_val
                used_points = used_points + i_val

        try:
            if loyalti_data:
                loyalti_data.balance_points = new_bal
                loyalti_data.inaugural_points = existing_i_point
                loyalti_data.business_turnover = turnover
                loyalti_data.total_earned_points = total_earned + points
                loyalti_data.inaugural_points_eligible = True
                loyalti_data.save()
            else:
                loyalti_data = Loyalti.objects.create(
                    profile_id=p_id,
                    balance_points=new_bal,
                    total_earned_points=new_bal,
                    business_turnover=paid_total
                )

            loy_transaction = LoyaltiTransaction.objects.create(
                profile=profile_data,
                amount=paid_total,
                grand_total=total_amount,
                points_used=used_points,
                added_points=points,
                transaction_type=t_type,
                transaction_number=transaction_ref_no,
                status="Success",
                loyalti=loyalti_data
            )
            loy_transaction.save()

        except Exception as e:
            loy_transaction = LoyaltiTransaction.objects.create(
                profile=profile_data,
                amount=paid_total,
                grand_total=total_amount,
                transaction_number=transaction_ref_no,
                points_used=used_points,
                transaction_type=t_type,
                status="Failed"
            )
            loy_transaction.save()

        check_loyalti_upgrade = LoyaltiEntity.objects.all()
        new_mebership = membership
        for upgrade in check_loyalti_upgrade:
            if upgrade.category != 'Inaugural':
                if loyalti_data.total_earned_points >= upgrade.points_upgrade:
                    new_mebership = upgrade.category

        if new_mebership != membership:
            profile_data.membership = new_mebership
            profile_data.save()

    except Exception as e:
        return Response({'status': 400, 'data': str(e)})
