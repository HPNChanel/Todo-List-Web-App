from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

class AuthenticationMiddleware(MiddlewareMixin):
  def process_request(self, request):
    if not request.user.is_authenticated and request.path.startswith('/tasks/')