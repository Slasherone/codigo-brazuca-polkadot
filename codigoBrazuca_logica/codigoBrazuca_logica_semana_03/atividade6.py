# -*- coding: utf-8 -*-
"""atividade6.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1CeS_-3KpTGAL5vYVA0fnxGjCRvAVULhn
"""

texto = input("Digite um texto para sabermos quantas vogais possui: ")

contagem_a = 0
contagem_e = 0
contagem_i = 0
contagem_o = 0
contagem_u = 0

for caracter in texto:
  if caracter.lower() == "a":
    contagem_a += 1
  if caracter.lower() == "e":
    contagem_e += 1
  if caracter.lower() == "i":
    contagem_i += 1
  if caracter.lower() == "o":
    contagem_o += 1
  if caracter.lower() == "u":
    contagem_u += 1

print("O texto escolhido tem a seguinte quantidade de vogais: ")
print("a: ", contagem_a)
print("e: ", contagem_e)
print("i: ", contagem_i)
print("o: ", contagem_o)
print("u: ", contagem_u)