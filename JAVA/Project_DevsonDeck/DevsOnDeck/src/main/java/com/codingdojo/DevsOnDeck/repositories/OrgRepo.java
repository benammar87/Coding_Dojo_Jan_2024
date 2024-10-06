package com.codingdojo.DevsOnDeck.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.DevsOnDeck.models.Org;

@Repository
public interface OrgRepo extends CrudRepository<Org, Long>{
List<Org> findAll();
Optional<Org> findByEmail(String email);
}
