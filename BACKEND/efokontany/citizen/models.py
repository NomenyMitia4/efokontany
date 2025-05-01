from django.utils import timezone
from django.db import models

# Create your models here.
class Citizen(models.Model):
    fullname = models.CharField(default="Rakoto", max_length=100)
    email = models.EmailField(default="citizen@gmail.com", max_length=100)
    contact = models.CharField(default="0385944903", max_length=10)
    children = models.IntegerField(default=0)
    job = models.CharField(default="Labor", max_length=100)
    handicap = models.BooleanField(default=False)
    income = models.IntegerField(default=0, max_length=None)
    status = models.CharField(default="Single", max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.fullname
    
class ProfileClassification(models.Model):
    citizen = models.ForeignKey(Citizen, on_delete=models.CASCADE)
    profile = models.CharField(default="Prioritaire", max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    update_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.citizen.fullname