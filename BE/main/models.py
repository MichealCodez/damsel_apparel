from django.db import models

class Category(models.Model):
    category = models.CharField(max_length=150, unique=True)

    def __str__(self):
        return str(self.category)

class Ribbon(models.Model):
    ribbon = models.CharField(max_length=5, default="null")

    def __str__(self):
        return str(self.ribbon)
    
class Type(models.Model):
    type = models.CharField(max_length=20, default="Hair")

    def __str__(self):
        return str(self.type)
    
class NewsletterSubscriber(models.Model):
    email = models.EmailField()

    def __str__(self):
        return str(self.email)
    
class Instagram(models.Model):
    image = models.ImageField(upload_to="instagram")
    video = models.CharField(max_length=500, default="null")

    def __str__(self):
        return str(self.id)

class Product(models.Model):
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="products")
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    ribbon = models.ForeignKey(Ribbon, on_delete=models.CASCADE)
    best_seller = models.BooleanField(default=False)
    hot_seller = models.BooleanField(default=False)
    price = models.FloatField()
    quantity = models.IntegerField(default=1)
    video = models.CharField(max_length=500, default="null")
    sold = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)

def __str__(self):
    return str(self.name)
