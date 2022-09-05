package com.BookApp.CapstoneBook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.BookApp.CapstoneBook.Model.Favorite;
import com.BookApp.CapstoneBook.Model.User;
import com.BookApp.CapstoneBook.Service.FavoriteService;
import com.BookApp.CapstoneBook.Service.UserService;

@SpringBootApplication
public class CapstoneBookApplication implements CommandLineRunner{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private FavoriteService favService;

	public static void main(String[] args) {
		SpringApplication.run(CapstoneBookApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception{
		
		User user = new User("Raghav","raghav.rajaraman@gmail.com","Raghav123");
		user = userService.addUser(user);
		
		User user2 = new User("Nikitha","niki@gmail.com","niki123");
		user2 = userService.addUser(user2);
		
		Favorite fav = new Favorite("All Time Best", user);
		fav = favService.addFav(fav);
		Favorite fav1 = new Favorite("Psychology of Money", user);
		fav1 = favService.addFav(fav1);
		
		Favorite fav2 = new Favorite("All Time Best", user2);
		fav2 = favService.addFav(fav2);

	}

}
