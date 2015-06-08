from django.shortcuts import render
from django.http import HttpResponse
import json
from datetime import datetime
from stjornumerki.models import StjornumerkisSvar

def nidurstodur():
    """ Sækir svör úr gagnagrunni og skilar sem dict hlut.
    """

    svor = StjornumerkisSvar.objects.all()
    fjoldi = 0
    sama = 0
    hlutfall = 0

    for svar in svor:
        fjoldi += 1
        if svar.merki == svar.valid:
            sama += 1

    hlutfall = sama/fjoldi

    return hlutfall

def skra_svar(request):
    """ Skráir svar við Stjörnumerkjakönnuninni.
    """

    print('skráum svarið...')

    if not request.method == 'POST':
        print('Not POST!')
        return_dict = { 'type': 'error', 'message': 'Beiðni er ekki AJAX.' }
        return HttpResponse(json.dumps(return_dict))

    # dags verður bara sett á núverandi dagsetningu.
    faedingardags = datetime.strptime(request.POST['faedingardags'], '%Y-%m-%d').date()
    print(faedingardags)
    merki = next((v[0] for i, v in enumerate(StjornumerkisSvar.MERKI) if v[1] == request.POST['merki']), None)
    print(merki)
    valid = next((v[0] for i, v in enumerate(StjornumerkisSvar.MERKI) if v[1] == request.POST['valid']), None)
    print(valid)
    # útgáfa er sett sjálfgefið í módelinu.

    try:
        s = StjornumerkisSvar(faedingardags=faedingardags, merki=merki, valid=valid)
        print('vistar...')
        s.save()
        print('vistað')
    except:
        print('virkar ekki')
        return_dict = { 'type': 'error', 'message': 'Gat ekki vistað svar.' }
        return HttpResponse(json.dumps(return_dict))

    return_dict = { 'type': 'success', 'message': 'Svarið skráð.', 'hlutfall': nidurstodur(), }
    return HttpResponse(json.dumps(return_dict))
