from django.urls import path,include
from .views import index

app_name='frontend'
urlpatterns = [
    path('',index, name=''),
    path('join',index),
    path('create_room',index),
    path('get_room/<str:roomCode>',index),
    path('join_room',index)

]