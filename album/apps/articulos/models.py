from django.db import models

class Noticia(models.Model):
    titulo = models.CharField(max_length=255)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    resumen = models.TextField()
    detalle = models.TextField()
    foto = models.ImageField(upload_to="noticias/", null=True, blank=True)
    imageurl = models.CharField(max_length=120)
    publicada = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ["-fecha_publicacion"]

