package com.codingdojo.DevsOnDeck.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.DevsOnDeck.models.Job;
import com.codingdojo.DevsOnDeck.repositories.JobRepo;

@Service
public class JobService {
	@Autowired
	private JobRepo jobRepo;
	
	private JobService(JobRepo jobRepo) {
		this.jobRepo = jobRepo;
	}
	
	public Job findById(Long id) {
		Optional<Job> result = jobRepo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
	
	public List<Job> all(){
		return jobRepo.findAll();
	}
	
	public Job update(Job job) {
		return jobRepo.save(job);
	}
	
	public Job create(Job job) {
		return jobRepo.save(job);
	}
	
	public void deleteJob(Job job) {
		jobRepo.delete(job);
	}
}
