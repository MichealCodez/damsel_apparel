# Generated by Django 5.0 on 2023-12-30 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_product_hot_seller_remove_product_category_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Instagram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='instagram')),
                ('video', models.CharField(default='null', max_length=500)),
            ],
        ),
    ]
