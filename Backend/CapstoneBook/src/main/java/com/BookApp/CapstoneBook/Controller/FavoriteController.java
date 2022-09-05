package com.BookApp.CapstoneBook.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.CapstoneBook.Model.Favorite;
import com.BookApp.CapstoneBook.Service.FavoriteService;

@RestController
@RequestMapping("/fav")
public class FavoriteController {

	@Autowired
	private FavoriteService favService;

	@PostMapping("/")
	@ResponseBody
	public Favorite addFav(@RequestBody Favorite fav) {
		System.out.println(fav);
		Favorite favo = favService.addFav(fav);
		return favo;
	}

	@PutMapping("/")
	@ResponseBody
	public void saveFav(@RequestBody Favorite fav) {
		favService.updateFav(fav);
	}

	@DeleteMapping("/{favid}")
	@ResponseBody
	public ResponseEntity<String> deleteFav(@PathVariable("favid") int id) {
		return favService.deleteFavorite(id);

	}

	@GetMapping("/{userid}")
	@ResponseBody
	public ResponseEntity<List<Favorite>> getFavs(@PathVariable("userid") int id) {
		return favService.getFavs(id);
	}

}
