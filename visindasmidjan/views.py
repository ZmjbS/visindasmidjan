# -*- encoding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.generic import TemplateView

def forsida(request):
    return render_to_response('forsida.html', { 'page': 'forsida', })

#def itarefni(request):
#    return render_to_response('itarefni/index.html', { 'page': 'itarefni', })

# Ítarefnissíður
# frá http://stackoverflow.com/questions/3402708/django-urls-straight-to-html-template
from django.template import TemplateDoesNotExist
from django.http import Http404

class StaticView(TemplateView):
    def get(self, request, page, *args, **kwargs):
        self.template_name = 'itarefni/'+page+'.html'
        response = super(StaticView, self).get(request, *args, **kwargs)
        try:
            return response.render()
        except TemplateDoesNotExist:
            raise Http404()
#
#def speglar(request):
#    return render_to_response('itarefni/speglar.html', { 'page': 'itarefni', })
#def hvirflar(request):
#    return render_to_response('itarefni/hvirflar.html', { 'page': 'itarefni', })
#def rolur_og_adrir_pendular(request):
#    return render_to_response('itarefni/rolur_og_adrir_pendular.html', { 'page': 'itarefni', })
#def hljodfaeri(request):
#    return render_to_response('itarefni/hljodfaeri.html', { 'page': 'itarefni', })
#
#def rafmagnsfraedi(request):
#    return render_to_response('itarefni/rafmagnsfraedi.html', { 'page': 'itarefni', })
#def ljos_og_litir(request):
#    return render_to_response('itarefni/ljos_og_litir.html', { 'page': 'itarefni', })
#def girar_og_trissur(request):
#    return render_to_response('itarefni/girar_og_trissur.html', { 'page': 'itarefni', })
#def thrautir(request):
#    return render_to_response('itarefni/thrautir.html', { 'page': 'itarefni', })
#
## Vísindaspjall og verkefni
#def visindaheimspeki(request):
#    return render_to_response('itarefni/visindaheimspeki.html', { 'page': 'itarefni', })
#def jardfraedi(request):
#    return render_to_response('itarefni/jardfraedi.html', { 'page': 'itarefni', })
#def stjornufraedi(request):
#    return render_to_response('itarefni/stjornufraedi.html', { 'page': 'itarefni', })
#def forritun(request):
#    return render_to_response('itarefni/forritun.html', { 'page': 'itarefni', })

#def fasar_efnis(request):
#    return render_to_response('itarefni/fasar_efnis.html', { 'page': 'itarefni', })

def um_visindasmidjuna(request):
    return render_to_response('um_visindasmidjuna.html', { 'page': 'um_visindasmidjuna', })
