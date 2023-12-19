from django.db import models

class Product(models.Model):
    image = models.ImageField(upload_to="products")
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=700)
    price = models.FloatField()
    video = models.CharField(max_length=500)
    sold = models.BooleanField(default=False)

def __repre__(self):
    return str(self.name)
