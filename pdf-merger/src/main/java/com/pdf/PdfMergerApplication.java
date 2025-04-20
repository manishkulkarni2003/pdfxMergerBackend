package com.pdf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PdfMergerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PdfMergerApplication.class, args);
		System.out.println("DataBase Connected");
	}

}
