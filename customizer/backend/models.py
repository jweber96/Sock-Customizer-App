from django.db import models

#The models
class Customer(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

