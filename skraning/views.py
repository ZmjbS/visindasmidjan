from django.shortcuts import render, render_to_response
from skraning.models import Timi
from django.contrib.auth.models import User
from django.core.context_processors import csrf
#from django.views.decorators.csrf import csrf_protect

def timayfirlit():
    # Skilar yfirliti yfir tímana sem búið er að skrá og pöntunina ef til
    # er.
    timar = Timi.objects.all()
    timayfirlit = []
    for t in timar:
        print(t.pontun_set.all())
        try:
            # Það á bara að vera ein bókun í hvern tíma svo við sækjum bara þá fyrstu.
            timayfirlit.append( { 'timi': t, 'pontun': t.pontun_set.all()[0], } )
        except:
            timayfirlit.append( { 'timi': t, 'pontun': None, } )
    return timayfirlit


def yfirlit(request):
    # Skilar yfirliti yfir tímana sem búið er að skrá og sendir til
    # síðunnar. Síðan setur svo upp tengla við þá tíma sem eru enn opnir
    # svo hægt sé að skrá sig í þá.
    return render_to_response('skraning/index.html', { 'timayfirlit': timayfirlit, })

#@csrf_protect
def umsjon(request):
    # Skilar yfirliti yfir tímana sem búið er að skrá og sendir til
    # síðunnar. Síðan setur svo upp form til að breyta tímum og skrá
    # nýja.
    s = User.objects.all()
    return render_to_response('skraning/umsjon.html', { 'timayfirlit': timayfirlit, 'starfsmenn': s, })

def skra_tima(request):
    c = {}
    c.update(csrf(request))
    print(c)
    return "it worked!"
