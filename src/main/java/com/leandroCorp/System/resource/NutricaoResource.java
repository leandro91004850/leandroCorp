package com.leandroCorp.System.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.leandroCorp.System.domain.Nutricao;
import com.leandroCorp.System.repository.NutricaoRepository;

@RestController
public class NutricaoResource {
	  
	@Autowired
	private NutricaoRepository nutri;

	@RequestMapping(value="/nutricao", method=RequestMethod.GET)
	public ModelAndView AparecidaNutri(){
		ModelAndView mv = new ModelAndView("aparecidaNutricao/aparecida");
		Iterable<Nutricao> nutricao = nutri.findAll();
		mv.addObject("nutricao", nutricao);
		return mv;
		
	}
	
	@RequestMapping(value="/nutri", method=RequestMethod.GET)
	public ResponseEntity<?> find() { // ENCONTRA UMA CATEGORIA COM ESSE ID
		Iterable<Nutricao> nutricao = nutri.findAll();
		return ResponseEntity.ok().body(nutricao);	
	
	}
	
	
}
