from django import forms
from skraning.models import Timi
from django.contrib.auth.models import User
from django.forms.widgets import TimeInput

class BokunForm(forms.Form):
    gestur = forms.CharField()
    bekkur = forms.IntegerField()
    timi = forms.ModelChoiceField(queryset=Timi.objects.filter(),widget=forms.HiddenInput())
    #timi = forms.ModelChoiceField(queryset=Timi.objects.filter())
    seroskir = forms.CharField(widget=forms.Textarea, required=False)

    #def __init__(self, timar=None, **kwargs):
    #    super(BokunForm, self).__init__(**kwargs)
    #    if timar:
    #        self.fields['timi'].queryset = models.Category.objects.exclude(user=user)

class TimaskraningForm(forms.Form):
    hefst = forms.DateTimeField(widget=TimeInput, initial="9:15")
    lengd = forms.IntegerField(initial=90)
    starfsmenn = forms.ModelMultipleChoiceField(queryset=User.objects.filter())

