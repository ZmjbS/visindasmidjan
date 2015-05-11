from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', 'visindasmidjan.views.forsida', name='forsida'),
    url(r'^skraning/', include('skraning.urls')),

    url(r'^itarefni/$', 'visindasmidjan.views.itarefni'),
    url(r'^itarefni/forritun', 'visindasmidjan.views.forritun'),
    url(r'^itarefni/hljodfaeri', 'visindasmidjan.views.hljodfaeri'),
    url(r'^itarefni/hvirflar', 'visindasmidjan.views.hvirflar'),
    url(r'^itarefni/jardfraedi', 'visindasmidjan.views.jardfraedi'),
    url(r'^itarefni/rafmagnsfraedi', 'visindasmidjan.views.rafmagnsfraedi'),
    url(r'^itarefni/ljos_og_litir', 'visindasmidjan.views.ljos_og_litir'),
    url(r'^itarefni/girar_og_trissur', 'visindasmidjan.views.girar_og_trissur'),
    url(r'^itarefni/thrautir', 'visindasmidjan.views.thrautir'),
    url(r'^itarefni/rolur_og_adrir_pendular', 'visindasmidjan.views.rolur_og_adrir_pendular'),
    url(r'^itarefni/speglar', 'visindasmidjan.views.speglar'),
    url(r'^itarefni/stjornufraedi', 'visindasmidjan.views.stjornufraedi'),
    url(r'^itarefni/visindaheimspeki', 'visindasmidjan.views.visindaheimspeki'),

    url(r'^um_visindasmidjuna/', 'visindasmidjan.views.um_visindasmidjuna'),

    url(r'^konnun/', include('konnun.urls')),

    url(r'^admin/', include(admin.site.urls)),

]
