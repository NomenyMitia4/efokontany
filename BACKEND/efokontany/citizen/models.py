from django.utils import timezone
from django.db import models
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error

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
    birthdate = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.fullname
    
class ProfileClassification(models.Model):
    citizen = models.ForeignKey(Citizen, on_delete=models.CASCADE)
    priority = models.DecimalField(default=0, max_digits=3, decimal_places=2)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.citizen.fullname
    

    
    
class History(models.Model):
    citizen = models.ForeignKey(Citizen, on_delete=models.CASCADE)
    activity = models.CharField(default="No activity", max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.activity