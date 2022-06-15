from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'nodo/index.html')
def products(request): 
    return render(request, 'nodo/products.html')
def account(request):
    return render(request, 'nodo/account.html')
def checkout(request):
    return render(request, 'nodo/checkout.html')
