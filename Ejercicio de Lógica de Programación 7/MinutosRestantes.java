package genetion.SALPD6;

import java.util.HashMap;
import java.util.Scanner;

public class MinutosRestantes {
	public static void main(String[] args) {

		HashMap<String, Integer> diasSemana = new HashMap<>();

		diasSemana.put("lunes", 24*1*60);
		diasSemana.put("martes", 24*2*60);
		diasSemana.put("miercoles", 24*3*60);
		diasSemana.put("jueves", 24*4*60);
		diasSemana.put("viernes", 24*5*60);
		
		Scanner scanner = new Scanner(System.in);
		String dia;
		do {
			System.out.println("Escribe un dia de la semana (lunes - viernes)");
			dia = scanner.nextLine();
			if (!diasSemana.containsKey(dia)) {
				System.out.println("Introduce un dia entre lunes y viernes");
			}
		} while(!diasSemana.containsKey(dia));

		
		System.out.println("Escribe la hora (00-24 hrs)");
		
		int hora = scanner.nextInt();
		
		System.out.println("Escribe los minutos (01-60 min)");
		
		int minutos = scanner.nextInt();
	  
		
		int diasMinutos = diasSemana.get(dia);
		int horaMinutos = hora*60;
		int diasMenosMinutos = diasMinutos -  horaMinutos - minutos;
		
	    int diasRestanteParaElFinDeSemana = diasSemana.get("viernes") - 15*60 - diasMenosMinutos;
	    
	    System.out.println("Minutos restantes para el fin de semana: " + diasRestanteParaElFinDeSemana);
		
		scanner.close();
	}

}
