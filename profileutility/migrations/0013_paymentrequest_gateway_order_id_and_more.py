# Generated by Django 4.1.2 on 2023-05-25 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0012_profile_app_version'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymentrequest',
            name='gateway_order_id',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='paymentrequest',
            name='gateway_session_id',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='paymentrequest',
            name='payment_gateway',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
