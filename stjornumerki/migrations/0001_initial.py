# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StjornumerkisSvar',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('dags', models.DateTimeField()),
                ('faedingardags', models.DateTimeField()),
                ('merki', models.CharField(choices=[('ST', 'steingeit'), ('VB', 'vatnsberi'), ('FI', 'fiskur'), ('HR', 'hrútur'), ('NT', 'naut'), ('TV', 'tvíburi'), ('KR', 'krabbi'), ('LJ', 'ljón'), ('MJ', 'meyja'), ('VG', 'vog'), ('SP', 'sporðdreki'), ('BO', 'bogamaður')], max_length=2)),
                ('valid', models.CharField(choices=[('ST', 'steingeit'), ('VB', 'vatnsberi'), ('FI', 'fiskur'), ('HR', 'hrútur'), ('NT', 'naut'), ('TV', 'tvíburi'), ('KR', 'krabbi'), ('LJ', 'ljón'), ('MJ', 'meyja'), ('VG', 'vog'), ('SP', 'sporðdreki'), ('BO', 'bogamaður')], max_length=2)),
                ('utgafa', models.IntegerField(default=0)),
            ],
        ),
    ]
