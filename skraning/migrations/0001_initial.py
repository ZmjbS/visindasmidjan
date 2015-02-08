# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Gestur',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('nafn', models.CharField(max_length=64)),
                ('tengilidur_nafn', models.CharField(max_length=64)),
                ('tengilidur_postur', models.EmailField(max_length=64)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Pontun',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('bekkur', models.SmallIntegerField()),
                ('seroskir', models.TextField(blank=True)),
                ('gestur', models.ForeignKey(to='skraning.Gestur')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Timi',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('hefst', models.DateTimeField()),
                ('lykur', models.DateTimeField()),
                ('starfsmenn', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='pontun',
            name='timi',
            field=models.ForeignKey(to='skraning.Timi'),
            preserve_default=True,
        ),
    ]
