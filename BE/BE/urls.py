from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from main.views import ProductViewSet, NewsletterViewSet, InstagramViewSet

router = DefaultRouter()

router.register(r'products', ProductViewSet, basename='products')
router.register(r'instagram', InstagramViewSet, basename='instagram')
router.register(r'newsletter-subscription', NewsletterViewSet, basename='newsletter-subscription')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT, }), ]
