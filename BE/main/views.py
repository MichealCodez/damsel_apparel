from rest_framework.viewsets import ModelViewSet
from .models import Product, NewsletterSubscriber, Instagram
from .serializers import ProductSerializer, NewsletterSerializer, InstagramSerializer

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class NewsletterViewSet(ModelViewSet):
    serializer_class = NewsletterSerializer
    queryset = NewsletterSubscriber.objects.all()


class InstagramViewSet(ModelViewSet):
    serializer_class = InstagramSerializer
    queryset = Instagram.objects.all()
