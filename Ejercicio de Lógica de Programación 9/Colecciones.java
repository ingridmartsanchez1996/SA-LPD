package genetion.SALPD6;

import java.util.HashMap;
import java.util.Scanner;

public class Colecciones {
	public static void main(String[] args) {

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
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Escribe una palabra en español");
		
		String palabraEnEspañol;
		palabraEnEspañol = scanner.nextLine();
		
		if (traductor.containsKey(palabraEnEspañol)){		
			System.out.println(traductor.get(palabraEnEspañol));
		} else {
			System.out.println("La palabra no se encuentra en el diccionario.");
		}
	}
}
