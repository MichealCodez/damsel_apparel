from rest_framework.serializers import ModelSerializer
from .models import Product, NewsletterSubscriber, Instagram


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class NewsletterSerializer(ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = "__all__"


class InstagramSerializer(ModelSerializer):
    class Meta:
        model = Instagram
        fields = "__all__"