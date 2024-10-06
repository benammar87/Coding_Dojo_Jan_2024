package com.codingdojo.DevsOnDeck.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.DevsOnDeck.models.Devs;
import com.codingdojo.DevsOnDeck.repositories.DevRepo;

@Service
public class DevService {
	
	@Autowired
	private DevRepo devRepo;
	
	private DevService(DevRepo devRepo) {
		this.devRepo = devRepo;
	}
	
	public Devs findById(Long id) {
		Optional<Devs> result = devRepo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
	
	public List<Devs> all(){
		return devRepo.findAll();
	}
	
	public Devs update(Devs dev) {
		return devRepo.save(dev);
	}
	
	public Devs create(Devs dev) {
		return devRepo.save(dev);
	}
	
	public void deleteDev(Devs dev) {
		devRepo.delete(dev);
	}
}
