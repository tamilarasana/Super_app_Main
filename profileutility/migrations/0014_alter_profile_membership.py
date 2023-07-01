# Generated by Django 4.2.2 on 2023-06-14 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0013_paymentrequest_gateway_order_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='membership',
            field=models.CharField(choices=[('M', 'Member'), ('G', 'Gold'), ('P', 'Platinum')], default='M', max_length=1),
        ),
    ]