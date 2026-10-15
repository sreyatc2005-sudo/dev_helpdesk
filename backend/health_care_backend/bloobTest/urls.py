from django.urls import path
from bloobTest.views import AppointmenntListCreateView,AppointmentRetrieveUpdateDeleteView

urlpatterns=[
    path("appointments/",AppointmenntListCreateView.as_view()),
    path("appointments/<int:pk>/",AppointmentRetrieveUpdateDeleteView.as_view()),

]