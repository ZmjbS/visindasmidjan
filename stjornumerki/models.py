from django.db import models

class StjornumerkisSvar(models.Model):
    STEINGEIT = 'ST'
    VATNSBERI = 'VB'
    FISKUR = 'FI'
    HRUTUR = 'HR'
    NAUT = 'NT'
    TVIBURI = 'TV'
    KRABBI = 'KR'
    LJON = 'LJ'
    MEYJA = 'MJ'
    VOG = 'VG'
    SPORDDREKI = 'SP'
    BOGAMADUR = 'BO'
    MERKI = (
        ( STEINGEIT, 'steingeit' ),
        ( VATNSBERI, 'vatnsberi' ),
        ( FISKUR, 'fiskur' ),
        ( HRUTUR, 'hrutur' ),
        ( NAUT, 'naut' ),
        ( TVIBURI, 'tviburi' ),
        ( KRABBI, 'krabbi' ),
        ( LJON, 'ljon' ),
        ( MEYJA, 'meyja' ),
        ( VOG, 'vog' ),
        ( SPORDDREKI, 'sporddreki' ),
        ( BOGAMADUR, 'bogamaður' ),
      #( STEINGEIT, 'steingeit' ),
      #  ( VATNSBERI, 'vatnsberi' ),
      #  ( FISKUR, 'fiskur' ),
      #  ( HRUTUR, 'hrútur' ),
      #  ( NAUT, 'naut' ),
      #  ( TVIBURI, 'tvíburi' ),
      #  ( KRABBI, 'krabbi' ),
      #  ( LJON, 'ljón' ),
      #  ( MEYJA, 'meyja' ),
      #  ( VOG, 'vog' ),
      #  ( SPORDDREKI, 'sporðdreki' ),
      #  ( BOGAMADUR, 'bogamaður' ),
    )
    dags = models.DateTimeField(auto_now_add=True, blank=True)
    faedingardags = models.DateField()
    merki = models.CharField(max_length=2, choices=MERKI)
    valid = models.CharField(max_length=2, choices=MERKI)
    utgafa = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return str(self.faedingardags) + ' > ' + self.merki + ' vs. ' + self.valid

    class Meta:
        verbose_name_plural = "stjörnumerkissvör"
