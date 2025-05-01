from django.db import models
from django.contrib.auth.hashers import make_password, check_password
# Create your models here.

class User(models.Model):
    name = models.CharField(default="Jean Pierre", max_length=100)
    email = models.EmailField(default="email@gmail.com", max_length=100)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    password = models.CharField(default="password", max_length=100)
    
    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def save(self, *args, **kwargs):
        # Hash password only if it hasn't already been hashed
        if not self.password.startswith('pbkdf2_'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return self.name

