from django.contrib import admin
from .models import CartItem, cartitems, register
# Register your models here.

admin.site.register(cartitems)
admin.site.register(register)
admin.site.register(CartItem)
