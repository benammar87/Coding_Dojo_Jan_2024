package com.codingdojo.DevsOnDeck.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.DevsOnDeck.models.Devs;

@Repository
public interface DevRepo extends CrudRepository<Devs, Long> {
	List<Devs> findAll();
}
