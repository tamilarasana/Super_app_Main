# Generated by Django 4.1.2 on 2023-03-13 10:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymentrequest',
            old_name='discount_remarks',
            new_name='transaction_number',
        ),
        migrations.RemoveField(
            model_name='paymentrequest',
            name='discount',
        ),
    ]