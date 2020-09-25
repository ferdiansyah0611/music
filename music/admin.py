from django.contrib import admin
from .models import AppMusic

class MusicAdmin(admin.ModelAdmin):
    fields = ['user_id', 'title', 'music', 'lyric', 'created_at', 'updated_at']

admin.site.register(AppMusic, MusicAdmin)