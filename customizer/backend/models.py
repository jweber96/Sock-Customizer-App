from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from datetime import datetime

DESIGNS = (
    ('VAPOR', 'Vapor'),
    ('TWO_TONE', 'Two Tone'),
    ('SPLIT_TOP', 'Split Top'),
    ('STRIPE', 'Stripe'),
    ('DOUBLE_STRIPE', 'Double Stripe'),
    ('TRIPLE_STRIPE', 'Triple Stripe'),
)

class Address(models.Model):
    street1 = models.CharField(max_length=250)
    street2 = models.CharField(max_length=250, null=True, blank=True)
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    zip = models.CharField(max_length=5)
    country  = models.CharField(max_length=250)
    def __str__(self):
        return self.street1

class Sizes(models.Model):
    youth = models.IntegerField(blank=True, null=True)
    small = models.IntegerField(blank=True, null=True)
    medium = models.IntegerField(blank=True, null=True)
    large = models.IntegerField(blank=True, null=True)
    extra_large = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return 'Y-' + str(self.youth) + ' Sm-' + str(self.small) + ' M-' + str(self.medium) + ' L-' + str(self.large) + ' XL-' + str(self.extra_large)

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    first_name = models.CharField(max_length=250, default="")
    last_name = models.CharField(max_length=250, default="")
    email = models.CharField(max_length=250, default="")
    phone_number= models.CharField(max_length=12, default="")
    organization = models.CharField(max_length=250, blank=True, null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True, blank=True)
    added_at = models.DateTimeField(blank=True, null=True, default=datetime.now)
    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    design = models.CharField("Designs", choices=DESIGNS, null=True, blank=True, max_length=250)
    primary_color = models.CharField(max_length=250)
    secondary_color = models.CharField(max_length=250, blank=True, null=True)
    toe_primary_text = models.CharField(max_length=250, blank=True, null=True)
    toe_secondary_text = models.CharField(max_length=250, blank=True, null=True)
    brim_primary_text = models.CharField(max_length=250, blank=True, null=True)
    brim_secondary_text = models.CharField(max_length=250, blank=True, null=True)
    logo = models.ImageField(upload_to='logos/%Y/%m/%d', null=True, blank=True)
    sizes = models.ForeignKey(Sizes, on_delete=models.CASCADE, null=True, blank=True)
    added_at = models.DateTimeField(blank=True, null=True, default=datetime.now)
    def __str__(self):
        return self.customer.first_name + ' ' + self.customer.last_name
