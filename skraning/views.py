from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from skraning.models import Gestur, Timi, Bokun, Timadagatal
from skraning.forms import BokunForm, TimaskraningForm
from django.contrib.auth.models import User
from django.template.context_processors import csrf
import json
from django.core.validators import validate_email
from datetime import datetime
from time import strptime, mktime

def timayfirlit():

    """ Skilar yfirliti yfir tímana sem búið er að skrá og pöntunina ef til er.
    """

    timar = Timi.objects.all()
    timayfirlit = []
    for t in timar:
        print(t.bokun_set.all())
        try:
            # Það á bara að vera ein bókun í hvern tíma svo við sækjum bara þá fyrstu.
            timayfirlit.append( { 'timi': t, 'bokun': t.bokun_set.all()[0], } )
        except:
            timayfirlit.append( { 'timi': t, 'bokun': None, } )
    return timayfirlit


def yfirlit(request):

    """ Skilar yfirliti yfir tímana sem búið er að skrá og sendir til síðunnar.
    Síðan setur svo upp tengla við þá tíma sem eru enn opnir svo hægt sé að
    skrá sig í þá.
    
    Sendir einnig form fyrir bókunina.  """

    form = BokunForm()

    return render(request, 'skraning/bokun.html', { 'page': 'skraning', 'dagatal': mark_safe(dagatal(2015,1,5)), 'timayfirlit': timayfirlit, 'form': form, })

from django.utils.safestring import mark_safe

def dagatal(ar, man_byrjun, man_lok):
    td = ''
    for manudur in range(man_byrjun, man_lok+1):
        timar = Timi.objects.filter(hefst__year=ar, hefst__month=manudur).order_by('hefst')
        td+=(Timadagatal(timar).formatmonth(2015, manudur))
    return td

def umsjon(request):

    """ Skilar yfirliti yfir tímana sem búið er að skrá og sendir til síðunnar.
    Síðan setur svo upp form til að breyta tímum og skrá nýja. """

    form = TimaskraningForm()
    return render_to_response('skraning/umsjon.html', {'dagatal': mark_safe(dagatal(2015, 1, 5)),'timayfirlit': timayfirlit, 'form': form, })

def skra_tima(request):
    
    """ Skráum nýja tíma. Tökum við lista af dagsetningum, tímasetningu hvenær
    þetta hefst, lengd tímans og starfsmönnum. """

    c = {}
    c.update(csrf(request))
    print(c)

    if not request.method == 'POST':
        print('Not POST!')
        return_dict = { 'type': 'error', 'message': 'Request is not AJAX.' }
        return HttpResponse(json.dumps(return_dict))

    print('were in post')
    dagsetningar = request.POST.getlist('dagsetningar[]')
    hefst_timi = request.POST['hefst_timi']
    lengd = request.POST['lengd']
    starfsmenn = request.POST.getlist('starfsmenn[]')
    print(lengd)

    for dags in dagsetningar:
        h = strptime(dags +' '+ hefst_timi, '%d %B %Y %H:%M')
        print(h)
        print(lengd)
        try:
            t = Timi(hefst=datetime.fromtimestamp(mktime(h)), lengd=int(lengd))
            print('saving...')
            t.save()
            print('glory')
            for starfsmadur in starfsmenn:
                t.starfsmenn.add(starfsmadur)
        except:
            print('no save')

    return_dict = { 'type': 'success', 'message': 'We\'re ready!' }
    return HttpResponse(json.dumps(return_dict))

def boka_tima(request):

    """ Bókum tíma! Til þess er nú Vísindasmiðjan.
    Tökum við POST skeyti sem sendir upplýsignar sem þarf fyrir bókun:
     - gestur
     - bekkur
     - timi
    auk einnar valkvæmrar
     - seroskir
    """

    if not request.method == 'POST':
        print('Not POST!')
        return_dict = { 'type': 'error', 'message': 'Request is not AJAX.' }
        return HttpResponse(json.dumps(return_dict))

    # Það sem á að koma í gegn.
    print(request.POST['gestur'])
    print(request.POST['bekkur'])
    print(request.POST['timi'])
    print(request.POST['seroskir'])

    # setjum gögnin í form:
    form = BokunForm(request.POST)

    # Könnum hvort gögnin séu góð:
    print('-----')
    print('testing validity')
    print(form.is_valid())
    if form.is_valid():
        print('valid')
    else:
        print('form not valid')

    print('-----')
    print('svona lítur þetta út:')
    print(form.cleaned_data['gestur'])
    print(form.cleaned_data['bekkur'])
    print(form.cleaned_data['timi'])
    print(form.cleaned_data['seroskir'])
    print('-----')

    try:
        ''' Athugum hvort þessar breytur hafi borist. '''
        gestur =  form.cleaned_data['gestur']
        bekkur =  form.cleaned_data['bekkur']
        #netfang = form.cleaned_data['netfang']
        timi =    form.cleaned_data['timi']
        print(timi)
        print(type(timi))
    except:
        ''' Vandræði með gögnin. '''
        print('Bad contents!')
        return_dict = { 'type': 'error', 'message': 'Í POST gögnin vantar skoli, bekkur, nafn eða netfang.' }

    ''' Þessar breytur eru valkvæmar.'''
    seroskir = form.cleaned_data['seroskir']
    print(seroskir)

    try:
        print('validating')
        validate_email(gestur)
        print('VALID EMAIL')
        valid_email = True
    #except validate_email.ValidationError:
    except:
        print('INVALID EMAIL')
        valid_email = False
        return_dict = { 'type': 'error', 'message': 'Tölvupóstfangið stóðst ekki skoðun.' }

    print('=====')
    #g = Gestur.objects.all()
    #print(g)
    try:

        """ Athugum hvort gesturinn sé þegar til með því að bera saman
        netfangið. """

        #print('Gesturinn er:')
        #print(gestur)
        #print('Finnum hann:')
        g = Gestur.objects.get(netfang=gestur)
        #print('Gestur fundinn')
    except:
        
        """ Ef gesturinn er ekki þegar til búum við hann til. """

        #print('Gestur fannst ekki.')
        g = Gestur(netfang=gestur)#, nafn=nafn)
        g.save()
        #print('Gestur vistaður')
    #print('Gesturinn er:')
    #print(g)

    try:

        """ Tryggjum að tíminn sé laus. """

        b = Bokun.objects.get(timi=timi)
    #    print('Timi þegar tekinn.')
        return_dict = { 'type': 'error', 'message': 'Tíminn er þegar bókaður!' }
    except:
        print('OK')

    try:
        print('setjum saman nýja bókun:')
        print(g)
        print(bekkur)
        print(timi)
        print(seroskir)
        b = Bokun(gestur=g, bekkur=bekkur, timi=timi, seroskir=seroskir)
        print('Bókun sett saman:')
        print(b)
        b.save()
    except:
        print('Það tókst ekki að vista bókunina')
        return_dict = { 'type': 'error', 'message': 'Það tókst ekki að vista bókunina!' }
    print('Söksess!!!')
    #return HttpResponse({ 'type': 'success', 'message': 'Bókunin hefur verið skráð.', 'timi': timi, })
    return_dict = { 'type': 'success', 'message': 'Bókunin hefur verið skráð.', 'timi_pk': timi.pk, }
    return HttpResponse(json.dumps(return_dict))
