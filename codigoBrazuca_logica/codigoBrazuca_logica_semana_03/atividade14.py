# -*- coding: utf-8 -*-
"""atividade14.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1CeS_-3KpTGAL5vYVA0fnxGjCRvAVULhn
"""

numero1 = int(input("Digite o primeiro número para realizarmos um cálculo: "))
numero2 = int(input("Digite o segundo número para realizarmos um cálculo: "))
escolha = int(input("Digite 1 para somar, 2 para subtrair, 3 para multiplicar, 4 para dividir ou qualquer outro para cancelar/encerrar: "))

if escolha == 1:
  resultado_final = numero1 + numero2
  print("O resultado da SOMA dos dois números é de: ", resultado_final)
elif escolha == 2:
  resultado_final = numero1 - numero2
  print("O resultado da SUBTRAÇÃO dos dois números é de: ", resultado_final)
elif escolha == 3:
  resultado_final = numero1 * numero2
  print("O resultado da MULTIPLICAÇÃO dos dois números é de: ", resultado_final)
elif escolha == 4:
  if numero1 == 0 or numero2 == 0:
    print("Não é possível dividir por 0. Programa encerrado.")
  else:
    resultado_final = numero1 / numero2
    print("O resultado da DIVISÃO dos dois números é de: ", resultado_final)
elif escolha == 5:
  print("Encerrando programa.")