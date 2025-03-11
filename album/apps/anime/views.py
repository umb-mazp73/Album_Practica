import requests
from django.shortcuts import render

def anime_list(request):
    url = "https://api.jikan.moe/v4/anime"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        animes = data.get("data", [])
        animes = [anime for anime in animes if anime.get('mal_id')]
    else:
        animes = []

    return render(request, "pages/anime.html", {"animes": animes})

def anime_detalle(request, anime_id):
    url = f"https://api.jikan.moe/v4/anime/{anime_id}"
    response = requests.get(url)

    if response.status_code == 200:
        anime = response.json().get("data", {})
        if not anime:
            anime = None
    else:
        anime = None

    return render(request, "pages/anime_detalle.html", {"anime": anime})
