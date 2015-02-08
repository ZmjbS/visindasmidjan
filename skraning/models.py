from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Gestur(models.Model):
    nafn = models.CharField(max_length=64)
    tengilidur_nafn = models.CharField(max_length=64)
    tengilidur_postur = models.EmailField(max_length=64)

    def __str__(self):
        return self.nafn

    class Meta:
        verbose_name_plural = "gestir"

class Timi(models.Model):
    hefst = models.DateTimeField()
    lykur = models.DateTimeField()
    starfsmenn = models.ForeignKey(User)

    def __str__(self):
        return self.hefst.strftime('%Y.%m.%d. (%A) %H:%M')

    class Meta:
        verbose_name_plural = "tímar"

class Pontun(models.Model):
    gestur = models.ForeignKey(Gestur)
    bekkur = models.SmallIntegerField()
    timi = models.ForeignKey(Timi)
    seroskir = models.TextField(blank=True)

    def __str__(self):
        return self.timi.hefst.strftime('%Y.%m.%d. (%A) %H:%M')+' '+self.gestur.nafn+' '+str(self.bekkur)+'. bekkur'

    class Meta:
        verbose_name_plural = "pantanir"
