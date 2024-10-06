package com.codingdojo.DevsOnDeck.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.DevsOnDeck.models.Job;

@Repository
public interface JobRepo extends CrudRepository<Job, Long> {
	List<Job> findAll();
}
