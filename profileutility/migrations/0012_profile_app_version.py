# Generated by Django 4.1.2 on 2023-05-15 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileutility', '0011_profileverification_dob_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='app_version',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
