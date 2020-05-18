package com.leandroCorp.System.repository;

import org.springframework.data.repository.CrudRepository;

import com.leandroCorp.System.domain.Cursos;

public interface CursoRepository extends CrudRepository<Cursos, Integer> {

	Cursos findById(int id);

	


}
