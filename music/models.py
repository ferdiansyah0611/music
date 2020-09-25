from django.db import models

# Create your models here.
class AppMusic(models.Model):
	user_id = models.IntegerField()
	title = models.CharField(max_length=100)
	music = models.CharField(max_length=255)
	lyric = models.CharField(max_length=300)
	created_at = models.DateField()
	updated_at = models.DateField()