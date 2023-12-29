from django.contrib import admin
from .models import *

admin.site.register([Category, Ribbon, Type, NewsletterSubscriber, Product])
