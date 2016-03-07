from django.db import models
from django.contrib.auth.models import User
from time import strftime

class Gestur(models.Model):

    """ Gestir eru skráðir í kerfið til þess eins að halda utan um pantanir og
    geta sent þeim póst. """

    netfang = models.EmailField(max_length=64, unique=True)
    nafn = models.CharField(max_length=64, blank=True)

    def __str__(self):
        return self.nafn + ' <'+ self.netfang +'>'

    class Meta:
        verbose_name_plural = "gestir"

class Stofnun(models.Model):

    """ Höldum ennfremur upp á stofnanirnar (skólana) upp á tölfræði og slíkt.
    """

    nafn = models.CharField(max_length=254, unique=True)

    def __str__(self):
        return self.nafn

    class Meta:
        verbose_name_plural = 'stofnanir'

class Timi(models.Model):

    """Tíminn er hvert opið "slot" sem Vísindasmiðjan býður upp á.  Skrá þarf
    hvenær heimsóknin hefst og hvenær henni lýkur, og hvaða starfsmenn eru að
    vinna þann dag.
    
    Það má svo stilla það í viðmótinu hver (sjálfgefin) lengd heimsóknarinnar
    er. """

    hefst = models.DateTimeField()
    lengd = models.IntegerField()
    starfsmenn = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return self.hefst.strftime('%Y.%m.%d. (%A) %H:%M')

    def merki(self):
        # Það er gott að hafa eitthvað til að merkja id...
        return self.hefst.strftime('%Y-%m-%d-%H-%M')

    class Meta:
        verbose_name_plural = "tímar"

class Bokun(models.Model):

    """ Bókun vísar í Gestinn sem gerir pöntunina (enda bara einn ábyrgðarmaður
    fyrir hverja heimsókn) og tímann sem pantaður er. Bókunin skráir einnig
    hvaða bekkur er að koma og gefur kost á séróskum eða athugasemdum. """

    gestur = models.ForeignKey(Gestur)
    bekkur = models.SmallIntegerField()
    timi = models.ForeignKey(Timi)
    seroskir = models.TextField(blank=True)

    def __str__(self):
        return self.timi.hefst.strftime('%Y.%m.%d. (%A) %H:%M')+' '+self.gestur.nafn+' '+str(self.bekkur)+'. bekkur'

    class Meta:
        verbose_name_plural = "bokanir"

from calendar import HTMLCalendar
from datetime import date
from itertools import groupby
import locale
locale.setlocale(locale.LC_ALL, 'is_IS.utf-8')

class Timadagatal(HTMLCalendar):

    """ Fengið hjá:
    http://uggedal.com/journal/creating-a-flexible-monthly-calendar-in-django/
    """

    def __init__(self, timar):

        """ Skilgreinum eiginleikann 'timar' sem vísar í dict af timum,
        flokkuðum eftir dagsetningum.  """

        super().__init__()
        self.timar = self.group_by_day(timar)

    def formatday(self, day, weekday):
        if day != 0:
            cssclass = self.cssclasses[weekday]
            if day in self.timar:
                cssclass += ' timiskradur'
                body = ''
                print(self.timar[day])
                for timi in self.timar[day]:
                    print(timi)
                    if Bokun.objects.filter(timi=timi).exists():
                        body += '<div class="bokadurtimi">'+timi.hefst.strftime('%H:%M')+'</div>'
                    else:
                        print(timi)
                        print(timi.pk)
                        body += '<div class="bokahlekkur" data-timalykill="'+str(timi.pk)+'"><a href="#">'+timi.hefst.strftime('%H:%M')+'</a></div>'
                    print('hey')
                """
                if any(Bokun.objects.filter(timi=timi).exists() for timi in self.timar[day]):
                    if all(Bokun.objects.filter(timi=timi).exists() for timi in self.timar[day]):
                        cssclass += ' allt_tekid'
                    else:
                        cssclass += ' hluti_laus'
                else:
                    cssclass += ' allt_laust'
                    """

                return self.dagsetning(cssclass, '%d %s' % (day, ''.join(body)))
            return self.dagsetning(cssclass, day)
        return self.dagsetning('noday', '&nbsp')

#    def formatmonth(self, year, month):
#        self.year, self.month = year, month
#        return super().formatmonth(year, month)

    def group_by_day(self, timar):

        """ Búum til lista yfir viðburði eftir því á hvaða degi þeir eru þannig
        að hægt sé að fletta upp viðburðunum sem timar{day] """
        
        field = lambda timi: timi.hefst.day
        return dict(
            [(day, list(items)) for day, items in groupby(timar, field)]
        )

    def dagsetning(self, cssclass, body):

        """ Skilum dagsetningunni sem töflureit með ákveðnum klassa. """

        return '<td class="%s">%s</td>' % (cssclass, body)
