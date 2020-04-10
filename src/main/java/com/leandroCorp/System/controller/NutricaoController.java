package com.leandroCorp.System.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	
	// inserindo dados na tabela
	@RequestMapping(value="/nutricao", method=RequestMethod.POST)
	public String inserirClientNutri(@Valid Nutricao nutricao, BindingResult result, RedirectAttributes attributes) {
		nutri.save(nutricao);
		return "redirect:/nutricao";
	}

}









