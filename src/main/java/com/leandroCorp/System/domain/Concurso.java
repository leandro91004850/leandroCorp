package com.leandroCorp.System.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Concurso implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Integer id;
	
	private String category;
	private String type;
	private String difficulty;
	private String question;
	private String corretanswers;
	
	@ElementCollection
	@CollectionTable(name="incorrectanswers")
	private Set<String> incorrectanswers = new HashSet<>();


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}

	

	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getDifficulty() {
		return difficulty;
	}


	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}


	public String getQuestion() {
		return question;
	}


	public void setQuestion(String question) {
		this.question = question;
	}


	public String getCorretanswers() {
		return corretanswers;
	}


	public void setCorretanswers(String corretanswers) {
		this.corretanswers = corretanswers;
	}


	public Set<String> getIncorrectanswers() {
		return incorrectanswers;
	}


	public void setIncorrectanswers(Set<String> incorrectanswers) {
		this.incorrectanswers = incorrectanswers;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Concurso other = (Concurso) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	

}
