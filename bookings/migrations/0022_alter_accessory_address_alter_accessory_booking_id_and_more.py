# Generated by Django 4.1.2 on 2023-06-26 06:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0017_paymentrequest_cgst_sgst_paymentrequest_e_point_and_more'),
        ('showcase', '0005_alter_itemdescription_page_navigation'),
        ('bookings', '0021_appbooking_loyalti_transaction_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accessory',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profileaddress'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='bookings.appbooking'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='itemlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemlist'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
        migrations.AlterField(
            model_name='appbooking',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='appbooking',
            name='itemlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemlist'),
        ),
        migrations.AlterField(
            model_name='appbooking',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
        migrations.AlterField(
            model_name='insurance',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profileaddress'),
        ),
        migrations.AlterField(
            model_name='insurance',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='insurance',
            name='itemlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemlist'),
        ),
        migrations.AlterField(
            model_name='insurance',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
        migrations.AlterField(
            model_name='newcarbooking',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profileaddress'),
        ),
        migrations.AlterField(
            model_name='newcarbooking',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='bookin_desc_newcar', to='bookings.appbooking'),
        ),
        migrations.AlterField(
            model_name='newcarbooking',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='newcarbooking',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
        migrations.AlterField(
            model_name='service',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profileaddress'),
        ),
        migrations.AlterField(
            model_name='service',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='bookin_desc_service', to='bookings.appbooking'),
        ),
        migrations.AlterField(
            model_name='service',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='service',
            name='itemlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemlist'),
        ),
        migrations.AlterField(
            model_name='service',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
        migrations.AlterField(
            model_name='usedcarbooking',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profileaddress'),
        ),
        migrations.AlterField(
            model_name='usedcarbooking',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='bookings.appbooking'),
        ),
        migrations.AlterField(
            model_name='usedcarbooking',
            name='item_description',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemdescription'),
        ),
        migrations.AlterField(
            model_name='usedcarbooking',
            name='itemlist',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='showcase.itemlist'),
        ),
        migrations.AlterField(
            model_name='usedcarbooking',
            name='profile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='profileutility.profile'),
        ),
    ]
