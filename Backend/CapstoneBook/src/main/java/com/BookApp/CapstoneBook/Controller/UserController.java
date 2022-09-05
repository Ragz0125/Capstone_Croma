package com.BookApp.CapstoneBook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.CapstoneBook.Model.User;
import com.BookApp.CapstoneBook.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/")
	@ResponseBody
	public User addUser(@RequestBody User user) {
		User usr = userService.addUser(user);
		return usr;
	}

	@PutMapping("/")
	@ResponseBody
	public User updateUser(@RequestBody User user) {
		userService.saveOrUpdate(user);
		return user;
	}

	@DeleteMapping("/{userid}")
	@ResponseBody
	public void deleteUser(@PathVariable("userid") int userid) {
		userService.delete(userid);
	}

	@GetMapping("/{id}")
	@ResponseBody
	public User getOneUser(@PathVariable int id) {
		return userService.getOneUser(id);
	}

	@GetMapping("/")
	@ResponseBody
	public List<User> getAllUsesr() {
		return userService.getAllUsers();
	}

}
