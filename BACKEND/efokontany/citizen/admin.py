from django.contrib import admin
from .models import Citizen, ProfileClassification

# Register your models here.
admin.site.register(Citizen)
admin.site.register(ProfileClassification)