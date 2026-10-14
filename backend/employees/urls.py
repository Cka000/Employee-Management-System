from django.urls import path
from .views import EmployeeListView, EmployeeDetailView

urlpatterns = [
    path("api/employees/", EmployeeListView.as_view(), name="display"),
    path("api/employees/<int:id>/", EmployeeDetailView.as_view(), name="detail"),
]