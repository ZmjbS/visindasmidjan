from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'skraning.views.yfirlit', name='yfirlit'),
    url(r'^umsjon$', 'skraning.views.umsjon', name='umsjon'),
    url(r'^skra_tima$', 'skraning.views.skra_tima', name='skra_tima'),
)
