# Generated by Django 3.1.1 on 2020-09-24 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppMusic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('title', models.CharField(max_length=100)),
                ('music', models.CharField(max_length=255)),
                ('lyric', models.CharField(max_length=300)),
                ('created_at', models.DateField()),
                ('updated_at', models.DateField()),
            ],
        ),
    ]
