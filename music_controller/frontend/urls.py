from django.urls import path,include
from .views import index
urlpatterns = [
    path('',index),
    path('join',index),
    path('create_room',index),
    path('get_room/<str:roomCode>',index),
    path('join_room',index)

]