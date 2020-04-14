package com.leandroCorp.System.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.leandroCorp.System.domain.Concurso;
import com.leandroCorp.System.repository.ConcursoRepository;

@RestController
public class ConcursoResource {

	@Autowired
	private ConcursoRepository concurso;
	
	@RequestMapping(value="/prova", method=RequestMethod.GET)
	public ResponseEntity<?> find() { // ENCONTRA UMA CATEGORIA COM ESSE ID
		Iterable<Concurso> prova = concurso.findAll();
		return ResponseEntity.ok().body(prova);	
	
	}
}
