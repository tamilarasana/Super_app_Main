# Generated by Django 4.1.2 on 2023-06-10 06:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0017_rename_item_desc_id_accessory_item_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newcarbooking',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bookin_desc_newcar', to='bookings.appbooking'),
        ),
        migrations.AlterField(
            model_name='service',
            name='booking_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bookin_desc_service', to='bookings.appbooking'),
        ),
    ]
