from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'visindasmidjan.views.forsida', name='forsida'),
    url(r'^skraning/', include('skraning.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
