package com.leandroCorp.System.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.leandroCorp.System.domain.Cursos;
import com.leandroCorp.System.repository.CursoRepository;

@RestController
public class CursoResource {

	@Autowired
	private CursoRepository servico;
	
	@RequestMapping(value="/cursos", method=RequestMethod.GET)
	public ResponseEntity<?> find() { 
		Iterable<Cursos> curso = servico.findAll();
		return ResponseEntity.ok().body(curso);		
	
	}
	
}
