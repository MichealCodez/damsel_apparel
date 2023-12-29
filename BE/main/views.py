from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .serializers import ProductSerializer, NewsletterSerializer
from .models import Product, NewsletterSubscriber

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class NewsletterViewSet(ModelViewSet):
    serializer_class = NewsletterSerializer
    queryset = NewsletterSubscriber.objects.all()
