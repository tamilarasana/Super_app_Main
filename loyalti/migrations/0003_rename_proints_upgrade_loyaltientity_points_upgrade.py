# Generated by Django 4.1.2 on 2023-06-14 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('loyalti', '0002_alter_loyalti_options_alter_loyaltientity_options_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='loyaltientity',
            old_name='proints_upgrade',
            new_name='points_upgrade',
        ),
    ]