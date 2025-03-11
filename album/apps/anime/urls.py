from django.urls import path
from .views import anime_list, anime_detalle

urlpatterns = [
    path('', anime_list, name='anime_list'),
    path('anime/<int:anime_id>/', anime_detalle, name='anime_detalle'),
]
