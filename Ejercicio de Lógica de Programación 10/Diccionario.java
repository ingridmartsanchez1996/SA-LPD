package genetion.SALPD6;

import java.util.HashMap;
import java.util.Scanner;
import java.util.*;

public class Diccionario {
	public static void main(String[] args) {
//
		HashMap<String, String> traductor = new HashMap<>();
					 //Llave  Valor
		traductor.put("gato", "cat");
		traductor.put("perro", "dog");
		traductor.put("hola", "hello");
		traductor.put("adios", "bye");
		traductor.put("rojo", "red");
		traductor.put("casa", "house");
		traductor.put("comprar", "buy");
		traductor.put("leer", "read");
		traductor.put("taza", "cup");
		traductor.put("carro", "car");
		traductor.put("libro", "book");
		traductor.put("ventana", "window");
		traductor.put("azul", "blue");
		traductor.put("amarillo", "yellow");
		traductor.put("jugar", "play");
		traductor.put("manzana", "apple");
		traductor.put("agua", "water");
		traductor.put("sol", "sun");
		traductor.put("luna", "moon");
		traductor.put("verde", "green");
		traductor.put("amigo", "friend");
		traductor.put("familia", "family");
		traductor.put("tiempo", "time");
		
		// Convert the key set to a list
        List<String> keyList = new ArrayList<String>(traductor.keySet());
        
        // Create a Random object
        Random random = new Random();
		
		int requiredRandomWords = 5;
		Set<String> randomWords = new HashSet<>();
		do {
            int randomIndex = random.nextInt(keyList.size());
            String randomWord = keyList.get(randomIndex);
            

			if ( !randomWords.contains(randomWord) ) {
				randomWords.add(randomWord);
			}
			
		} while(randomWords.size() < requiredRandomWords);
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Tu conocimiento en Ingles va ser puesto a prueba, ");
		System.out.println("inserte la traduccion de las siguientes palabras: ");
		
		int correctAnswers = 0;
		int wrongAnswers = 0;
		for(String word : randomWords) {
			System.out.println("* " + word + " :");
			String answer = scanner.nextLine().trim();
			String expectedAnswer = traductor.get(word);
			
			if(answer.equals(expectedAnswer)) {
				correctAnswers++;
			}
			else {
				wrongAnswers++;
			}
		}
		
		System.out.println("Tu resultado es: ");
		System.out.println(correctAnswers + " respuestas correctas");
		System.out.println(wrongAnswers + " respuestas incorrectas");
	}
		

}
