package com.leandroCorp.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.leandroCorp.System.domain.Nutricao;
import com.leandroCorp.System.repository.NutricaoRepository;

@Controller
public class NutricaoController {
	
	@Autowired
	private NutricaoRepository nutri;
	
	@RequestMapping(value="/nutricao", method=RequestMethod.GET)
	public ModelAndView AparecidaNutri(){
		ModelAndView mv = new ModelAndView("aparecidaNutricao/aparecida");
		Iterable<Nutricao> nutricao = nutri.findAll();
		mv.addObject("nutricao", nutricao);
		return mv;
		
	}

}
