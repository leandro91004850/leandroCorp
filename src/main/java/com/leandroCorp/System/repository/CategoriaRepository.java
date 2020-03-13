package com.leandroCorp.System.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.leandroCorp.System.domain.Categoria;


@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

	Categoria findById(int id);
}
