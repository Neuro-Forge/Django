from django.db import models
from django.contrib.auth.models import User

class cartitems(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_id = models.IntegerField()
    product_category = models.CharField(max_length=300)
    product_title = models.CharField(max_length=300)
    product_imgSrc = models.CharField(max_length=300)
    product_description = models.CharField(max_length=300)
    product_price = models.FloatField()

    def __str__(self):
        return self.product_title

class register(models.Model):
    username = models.CharField(max_length=300)
    email = models.EmailField(max_length=300)
    password = models.CharField(max_length=300)
    password2 = models.CharField(max_length=300)
    
    def __str__(self):
        return self.username
    
