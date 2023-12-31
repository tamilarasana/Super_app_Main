# Generated by Django 4.1.2 on 2023-01-27 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255, null=True)),
                ('enquiry_num', models.CharField(max_length=255, null=True)),
                ('order_num', models.CharField(max_length=255, null=True)),
                ('order_date', models.DateTimeField(null=True)),
                ('cust_id', models.CharField(max_length=255, null=True)),
                ('prospect_name', models.CharField(max_length=255, null=True)),
                ('mobile', models.CharField(max_length=255, null=True)),
                ('email', models.CharField(max_length=255, null=True)),
                ('model', models.CharField(max_length=255, null=True)),
                ('dse_code', models.CharField(max_length=255, null=True)),
                ('dse_name', models.CharField(max_length=255, null=True)),
                ('selling_price', models.FloatField(null=True)),
                ('received_amount', models.FloatField(null=True)),
                ('balanced_amount', models.FloatField(null=True)),
                ('delivery_date', models.DateTimeField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255, null=True)),
                ('delivery_no', models.CharField(max_length=255, null=True)),
                ('delivery_date', models.DateTimeField(null=True)),
                ('invoice_no', models.CharField(max_length=255, null=True)),
                ('dse_code', models.CharField(max_length=255, null=True)),
                ('dse_name', models.CharField(max_length=255, null=True)),
                ('cust_id', models.CharField(max_length=255, null=True)),
                ('prospect_name', models.CharField(max_length=255, null=True)),
                ('email', models.CharField(max_length=255, null=True)),
                ('address1', models.TextField(null=True)),
                ('address2', models.TextField(null=True)),
                ('address3', models.TextField(null=True)),
                ('city', models.CharField(max_length=255, null=True)),
                ('pin', models.CharField(max_length=255, null=True)),
                ('mobile', models.CharField(max_length=255, null=True)),
                ('model', models.CharField(max_length=255, null=True)),
                ('chassis_no', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Enquiry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255, null=True)),
                ('enquiry_num', models.CharField(max_length=255, null=True)),
                ('dse_code', models.CharField(max_length=255, null=True)),
                ('dse_name', models.CharField(max_length=255, null=True)),
                ('prospect_name', models.CharField(max_length=255, null=True)),
                ('mobile', models.CharField(max_length=255, null=True)),
                ('email', models.CharField(max_length=255, null=True)),
                ('model', models.CharField(max_length=255, null=True)),
                ('status', models.CharField(max_length=255, null=True)),
                ('source', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Retail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255, null=True)),
                ('delivery_date', models.DateTimeField(null=True)),
                ('model', models.CharField(max_length=255, null=True)),
                ('cust_id', models.CharField(max_length=255, null=True)),
                ('prospect_name', models.CharField(max_length=255, null=True)),
                ('dse_code', models.CharField(max_length=255, null=True)),
                ('dse_name', models.CharField(max_length=255, null=True)),
                ('reg_no', models.CharField(max_length=255, null=True)),
                ('mobile', models.CharField(max_length=255, null=True)),
                ('basic_price', models.FloatField()),
                ('enquiry_num', models.CharField(max_length=255, null=True)),
                ('pan_no', models.CharField(max_length=255, null=True)),
                ('status', models.CharField(max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='RetailCancel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255, null=True)),
                ('status', models.CharField(max_length=255, null=True)),
                ('delivery_date', models.DateTimeField(null=True)),
                ('prom_delivery_date', models.DateTimeField(null=True)),
                ('model', models.CharField(max_length=255, null=True)),
                ('cust_id', models.CharField(max_length=255, null=True)),
                ('prospect_name', models.CharField(max_length=255, null=True)),
                ('dse_code', models.CharField(max_length=255, null=True)),
                ('dse_name', models.CharField(max_length=255, null=True)),
                ('reg_no', models.CharField(max_length=255, null=True)),
                ('mobile', models.CharField(max_length=255, null=True)),
                ('basic_price', models.FloatField()),
                ('dicount_cic', models.FloatField()),
                ('discount', models.FloatField()),
                ('exchange_price', models.FloatField()),
                ('state_gst', models.FloatField(null=True)),
                ('tax_col', models.FloatField(null=True)),
                ('inv_amt', models.CharField(max_length=255, null=True)),
                ('purchase_price', models.CharField(max_length=255, null=True)),
                ('pan_no', models.CharField(max_length=255, null=True)),
                ('enquiry_num', models.CharField(max_length=255, null=True)),
            ],
        ),
    ]
