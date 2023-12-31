# Generated by Django 4.1.2 on 2023-06-15 05:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0015_alter_profile_membership'),
        ('loyalti', '0004_alter_loyalti_balance_points_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='loyalti',
            name='inaugural_points',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True),
        ),
        migrations.AddField(
            model_name='loyalti',
            name='inaugural_points_eligible',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='loyaltientity',
            name='status',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='loyaltitransaction',
            name='points_used',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=12, null=True),
        ),
        migrations.AlterField(
            model_name='loyalti',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile_loyalti', to='profileutility.profile', unique=True),
        ),
        migrations.AlterField(
            model_name='loyaltitransaction',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile_loyalti_transaction', to='profileutility.profile'),
        ),
    ]
