package com.leandroCorp.System.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leandroCorp.System.domain.Cursos;
import com.leandroCorp.System.repository.CursoRepository;

@Service
public class CursoService {
	
	@Autowired
	private CursoRepository cursos;
	
	public Cursos coletar(Integer id) {
		Optional<Cursos> obj = cursos.findById(id);
		return obj.orElse(null);
	}
}
