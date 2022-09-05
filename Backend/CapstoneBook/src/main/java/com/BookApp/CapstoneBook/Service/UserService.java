package com.BookApp.CapstoneBook.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BookApp.CapstoneBook.Model.User;
import com.BookApp.CapstoneBook.Repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepository;

	public User addUser(User user) {
		User usr = userRepository.save(user);
		return usr;
	}

	public void saveOrUpdate(User user) {
		userRepository.save(user);
	}

	public void delete(int id) {
		userRepository.deleteById(id);
	}

	public User getOneUser(int id) {
		User user1 = userRepository.findById(id).orElse(null);
		return user1;
	}

	public List<User> getAllUsers() {

		return userRepository.findAll();
	}

}
