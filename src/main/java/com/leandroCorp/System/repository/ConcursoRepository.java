package com.leandroCorp.System.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.leandroCorp.System.domain.Concurso;


@Repository
public interface ConcursoRepository extends JpaRepository<Concurso, Integer>{


}
