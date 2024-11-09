from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

class AuthenticationMiddleware(MiddlewareMixin):
  def process_request