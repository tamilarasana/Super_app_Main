# Generated by Django 4.1.2 on 2023-06-28 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loyalti', '0007_loyaltitransaction_transaction_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='loyaltitransaction',
            name='added_points',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, null=True),
        ),
    ]
