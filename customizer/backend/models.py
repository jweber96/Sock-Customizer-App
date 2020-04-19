from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from datetime import datetime

CUTS = (
    ('Quarter Sock', 'Quarter Sock'),
    ('Crew Sock', 'Crew Sock'),
    ('Knee High Sock', 'Knee High Sock')
)

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    phone_number= models.CharField(max_length=12, default="")
    organization = models.CharField(max_length=250, blank=True, null=True)
    added_at = models.DateTimeField(blank=True, null=True, default=datetime.now)
    # def __str__(self):
    #     return self.user.first_name + ' ' + self.user.last_name
        
class Address(models.Model):
    street1 = models.CharField(max_length=250)
    street2 = models.CharField(max_length=250, null=True, blank=True)
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    zip = models.CharField(max_length=5)
    country  = models.CharField(max_length=250)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.street1

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    cut = models.CharField("Cuts", choices=CUTS, null=True, blank=True, max_length=250)
    primary_color = models.CharField(max_length=250, blank=True, null=True)
    secondary_color = models.CharField(max_length=250, blank=True, null=True)
    toe_primary_text = models.CharField(max_length=250, blank=True, null=True)
    brim_primary_text = models.CharField(max_length=250, blank=True, null=True)
    logo = models.ImageField(upload_to='logos/%Y/%m/%d', null=True, blank=True)
    added_at = models.DateTimeField(blank=True, null=True, default=datetime.now)
    # def __str__(self):
    #     return self.customer.user.first_name + ' ' + self.customer.user.last_name

class Sizes(models.Model):
    youth = models.IntegerField(blank=True, null=True)
    small = models.IntegerField(blank=True, null=True)
    medium = models.IntegerField(blank=True, null=True)
    large = models.IntegerField(blank=True, null=True)
    extra_large = models.IntegerField(blank=True, null=True)
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.CASCADE)
    def __str__(self):
        return 'Y-' + str(self.youth) + ' Sm-' + str(self.small) + ' M-' + str(self.medium) + ' L-' + str(self.large) + ' XL-' + str(self.extra_large)

