programa
{

		funcao inicio()
	
		{
 

    		real numero1
   		real numero2
    		caracter operacao

  
    		escreva("Mini calculadora de dois números\n\n")

    		escreva("Digite o primeiro número: ")
    		leia(numero1)

    		escreva("Digite o segundo número: ")
    		leia(numero2)
    		

    escreva("\nEscolha a operação que deseja efetuar:\n\n")

    		escreva("+ - Soma\n")
    		escreva("- - Subtração\n")
    		escreva("* - Multiplicação\n")
    		escreva("/ - Divisão\n\n")

    		leia(operacao)

   		 //Execução 
    		escreva("\nVocê escolheu a operação: "+operacao+"\n")
    		escreva("\nResultado: "+numero1+" "+operacao+" "+numero2+" = ")

   		 se(operacao=='+')
     {
       		escreva(numero1 + numero2)
     }
    		se(operacao=='-')
     {
       		escreva(numero1 - numero2)
     }
    	 	se(operacao=='*')
     {
       		escreva(numero1 * numero2)
      }
     	se(operacao=='/')
     {
       		escreva(numero1 / numero2)
	}

		}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 962; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */