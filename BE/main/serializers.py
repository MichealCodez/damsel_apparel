from rest_framework.serializers import ModelSerializer
from .models import Product, NewsletterSubscriber


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class NewsletterSerializer(ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = "__all__"