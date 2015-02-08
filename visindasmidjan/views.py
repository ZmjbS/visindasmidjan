# -*- encoding: utf-8 -*-
from django.http import HttpResponse
from django.shortcuts import render_to_response

def forsida(request):
    return render_to_response('forsida.html')
