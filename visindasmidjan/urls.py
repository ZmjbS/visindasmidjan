from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from visindasmidjan.views import StaticView

urlpatterns = [
    #url(r'^$', 'visindasmidjan.views.forsida', name='forsida'),
    url(r'^$', 'eldar.views.forsida', name='forsida'),
    url(r'^skraning/', include('skraning.urls')),

    url(r'^itarefni/$', TemplateView.as_view(template_name='itarefni/index.html'), { 'page': 'itarefni', } ),
    url(r'^itarefni/(?P<page>.+)$', StaticView.as_view()),

    url(r'^um_visindasmidjuna/', 'visindasmidjan.views.um_visindasmidjuna'),

    url(r'^stjornumerki/', include('stjornumerki.urls')),

    url(r'^konnun/', include('konnun.urls')),

    url(r'^admin/', include(admin.site.urls)),

]
