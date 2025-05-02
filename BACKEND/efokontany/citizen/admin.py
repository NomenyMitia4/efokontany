from django.contrib import admin
from .models import Citizen, ProfileClassification, History

# Register your models here.
admin.site.register(Citizen)
admin.site.register(ProfileClassification)
admin.site.register(History)