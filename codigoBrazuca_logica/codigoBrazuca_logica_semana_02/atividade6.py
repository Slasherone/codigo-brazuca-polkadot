# -*- coding: utf-8 -*-
"""atividade6.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1CeS_-3KpTGAL5vYVA0fnxGjCRvAVULhn
"""

soma_total = 0
numero = int(input("Digite um número (0 para sair): "))

while numero != 0:
  soma_total += numero
  numero = int(input("Digite um número (0 para sair): "))

print("A soma dos números digitados é: ", soma_total)