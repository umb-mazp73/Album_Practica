from django.shortcuts import render, get_object_or_404
from .models import Noticia

def lista_articulos(request):
    articulos = Noticia.objects.all()
    return render(request, 'pages/lista.html', {'articulos': articulos})

def detalle_articulo(request, id):
    articulo = get_object_or_404(Noticia, id=id)
    return render(request, 'pages/detalle_articulo.html', {'articulo': articulo})

