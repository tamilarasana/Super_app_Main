# Generated by Django 4.1.2 on 2023-04-12 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showcase', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='position',
            field=models.IntegerField(blank=True, null=True, unique=True),
        ),
    ]
