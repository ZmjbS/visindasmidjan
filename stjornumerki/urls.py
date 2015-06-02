from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='stjornumerki.html')),
    url(r'^skra_svar/$', 'stjornumerki.views.skra_svar'),
]
