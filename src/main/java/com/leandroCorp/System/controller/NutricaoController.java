package com.leandroCorp.System.controller;

import java.util.Iterator;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.leandroCorp.System.domain.Nutricao;
import com.leandroCorp.System.repository.NutricaoRepository;

@Controller
public class NutricaoController implements Iterable<Nutricao> {
	
	@Autowired
	private NutricaoRepository nutri;
	
	@RequestMapping(value="/nutricao", method=RequestMethod.GET)
	public ModelAndView AparecidaNutri(Model model){
		ModelAndView mv = new ModelAndView("aparecidaNutricao/aparecida");
		Iterable<Nutricao> nutricao = nutri.selecaoValores();
		mv.addObject("nutricao", nutricao);
		int contador = 0;
		double media = 0;
		for(Nutricao nutricao1: nutricao) {
			contador++;
			media += nutricao1.getPeso();
			System.out.println("contando: "+contador);
		}
		model.addAttribute("mensagem", media); 
		return mv;
		
	}
	
	// inserindo dados na tabela
	@RequestMapping(value="/nutricao", method=RequestMethod.POST)
	public String inserirClientNutri(@Valid Nutricao nutricao, BindingResult result, RedirectAttributes attributes) {
		nutri.save(nutricao);
		return "redirect:/nutricao";
	}

	@Override
	public Iterator<Nutricao> iterator() {
		// TODO Auto-generated method stub
		return null;
	}

	
}









