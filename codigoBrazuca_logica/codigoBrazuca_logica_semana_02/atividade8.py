# -*- coding: utf-8 -*-
"""atividade8.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1CeS_-3KpTGAL5vYVA0fnxGjCRvAVULhn
"""

def impar_ou_par(numero):
  if numero % 2 == 0:
    print("par")
  else:
    print("impar")

numero = int(input("Digite um número: "))
impar_ou_par(numero)