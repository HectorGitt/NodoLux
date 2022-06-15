from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.FileField(upload_to='uploads/')
    
    def __str__(self):
        return self.name


''' class User(AbstractUser):
    pass '''
    
