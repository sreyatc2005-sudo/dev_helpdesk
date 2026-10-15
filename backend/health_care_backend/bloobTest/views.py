from django.shortcuts import render

# Create your views here.
from bloobTest.models import User,Appointment

from bloobTest.serializers import AppointmentSerializer
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
class AppointmenntListCreateView(ListCreateAPIView):
    serializer_class=AppointmentSerializer
    queryset = Appointment.objects.all()


class AppointmentRetrieveUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    serializer_class=AppointmentSerializer
    queryset=Appointment.objects.all()
    


