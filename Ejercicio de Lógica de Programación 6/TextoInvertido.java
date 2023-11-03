package genetion.SALPD6;

import java.util.Scanner;

public class TextoInvertido {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Escribe una palabra o frase:");
		
		String palabra = scanner.nextLine();
		
		String palabraInvertida = "";
		
		//La longitud siempre es mayor al indice
		for (int indice = palabra.length() - 1; indice >= 0; indice--) {

			palabraInvertida += palabra.charAt(indice);
		}
		System.out.println("Cadena original: " + palabra);
		System.out.println("Cadena invertida: " + palabraInvertida);
	}
}
