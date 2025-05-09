from django.db import models
# from django.db.models import Q
from citizen.models import Citizen, ProfileClassification

# Create your models here.
class Dashboard(models.Model):
    registered_citizen = models.IntegerField(default=0)
    pourcentage_handicap = models.DecimalField(default=0.0, max_digits=3, decimal_places=3)
    prioritized_citizen = models.IntegerField(default=0)
    
    def __str__(self):
        return self.registered_citizen 
    
    def set_registered_citizen(self, registered_citizen):
        self.registered_citizen = registered_citizen
        
    def set_pourcentage_handicap(self, pourcentage_handicap):
        self.pourcentage_handicap = pourcentage_handicap
        
    def set_prioritized_citizen(self, prioritized_citizen):
        self.prioritized_citizen = prioritized_citizen
    
    def calculate_registered_citizen():
        return Citizen.objects.count()
        
    def calculate_handicap():
        handicap_count = Citizen.objects.filter(handicap=True).count()
        total_citizen = Citizen.objects.count()
        if total_citizen > 0:
            pourcentage = (handicap_count / total_citizen) * 100
        else:
            pourcentage = 0
        return pourcentage

    def calculate_prioritized_citizen():
        prioritized_citizen = ProfileClassification.objects.filter(priority__gte=0.9).count()
        return prioritized_citizen