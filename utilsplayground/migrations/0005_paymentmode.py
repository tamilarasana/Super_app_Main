# Generated by Django 4.1.2 on 2023-06-02 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilsplayground', '0004_appversion'),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentMode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_mode_name', models.CharField(blank=True, max_length=250, null=True)),
                ('status', models.CharField(choices=[('Active', 'Active'), ('InActive', 'InActive')], default='Active', max_length=50)),
            ],
            options={
                'verbose_name': 'Payment Mode',
                'verbose_name_plural': 'Payment Mode',
            },
        ),
    ]
