# Generated by Django 4.2.2 on 2023-06-14 06:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profileutility', '0014_alter_profile_membership'),
    ]

    operations = [
        migrations.CreateModel(
            name='Loyalti',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_earned_points', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True)),
                ('balance_points', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True)),
                ('last_updated_points', models.DateTimeField(auto_now=True)),
                ('business_turnover', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True)),
                ('profile', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profileutility.profile')),
            ],
            options={
                'verbose_name': 'Loyalti',
                'verbose_name_plural': 'Loyalties',
            },
        ),
        migrations.CreateModel(
            name='LoyaltiEntity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('Member', 'Member'), ('Gold', 'Gold'), ('Platinum', 'Platinum')], default='Member', max_length=50)),
                ('points_add_per_100', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True)),
                ('time_of_update', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Loyalti Clause Entity',
                'verbose_name_plural': 'Loyalti Clause Entity',
            },
        ),
        migrations.CreateModel(
            name='LoyaltiTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True)),
                ('status', models.CharField(choices=[('Success', 'Success'), ('Failed', 'Failed')], default=None, max_length=50)),
                ('time_of_transaction', models.DateTimeField(auto_now=True)),
                ('transaction_type', models.CharField(choices=[('Add', 'Add'), ('Redeem', 'Redeem')], default=None, max_length=50)),
                ('loyalti', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='loyalti.loyalti')),
                ('profile', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profileutility.profile')),
            ],
            options={
                'verbose_name': 'Loyalti Transaction',
                'verbose_name_plural': 'Loyalti Transaction',
            },
        ),
    ]