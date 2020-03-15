package com.leandroCorp.System.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.leandroCorp.System.domain.Nutricao;
import com.leandroCorp.System.repository.NutricaoRepository;

@RestController
public class NutricaoResource {
	  
	@Autowired
	private NutricaoRepository nutri;

	
	@RequestMapping(value="/nutri", method=RequestMethod.GET)
	public ResponseEntity<?> find() { // ENCONTRA UMA CATEGORIA COM ESSE ID
		Iterable<Nutricao> nutricao = nutri.findAll();
		return ResponseEntity.ok().body(nutricao);	
	
	}
	
	
}
