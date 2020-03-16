package com.leandroCorp.System.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Nutricao implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Integer id;
	private String nome;
	private Integer peso;
	private Double altura;
	private Integer gordura;
	private String teste1;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getPeso() {
		return peso;
	}
	public void setPeso(Integer peso) {
		this.peso = peso;
	}
	public Double getAltura() {
		return altura;
	}
	public void setAltura(Double altura) {
		this.altura = altura;
	}
	public Integer getGordura() {
		return gordura;
	}
	public void setGordura(Integer gordura) {
		this.gordura = gordura;
	}
	public String getTeste1() {
		return teste1;
	}
	public void setTeste1(String teste1) {
		this.teste1 = teste1;
	}

	
	

}
