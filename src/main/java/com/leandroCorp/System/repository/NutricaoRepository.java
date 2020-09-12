package com.leandroCorp.System.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.leandroCorp.System.domain.Nutricao;

public interface NutricaoRepository extends CrudRepository<Nutricao, String> {

	@Query(value="SELECT * FROM nutricao where id > 7", nativeQuery = true)
	List<Nutricao> selecaoValores();
	

}
