package com.leandroCorp.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.leandroCorp.System.repository.CategoriaRepository;

@Controller
public class CategoriaController {

	@Autowired
	private CategoriaRepository service;

	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ModelAndView Categoria(@PathVariable("id") int id) {
		ModelAndView mv = new ModelAndView("categoria");
		mv.addObject("categoria", service.findById(id));
		
		return mv;
	}

	@RequestMapping("/nutricao")
	public String AparecidaNutri(){
		return "aparecidaNutricao/aparecida";
	}
	
}
