from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='slembimynstur.html')),
    url(r'^skra_svar/$', 'slembimynstur.views.skra_svar'),
]
