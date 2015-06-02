from django.shortcuts import render
from django.http import HttpResponse
import json

def nidurstodur():
    """ Sækir svör úr gagnagrunni og skilar sem dict hlut.
    """

    svor = StjornumerkisSvar.objects.all()
    for svar in svor:
        print('do')

def skra_svar(request):
    """ Skráir svar við Stjörnumerkjakönnuninni.
    """

    print('skráum svarið...')

    if not request.method == 'POST':
        print('Not POST!')
        return_dict = { 'type': 'error', 'message': 'Beiðni er ekki AJAX.' }
        return HttpResponse(json.dumps(return_dict))

    # dags verður bara sett á núverandi dagsetningu.
    faedingardags = request.POST['faedingardags']
    print(faedingardags)
    merki = request.POST['merki']
    print(merki)
    valid = request.POST['valid']
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

    return_dict = { 'type': 'success', 'message': 'Svarið skráð.' }
