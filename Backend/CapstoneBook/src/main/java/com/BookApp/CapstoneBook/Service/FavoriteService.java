package com.BookApp.CapstoneBook.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.BookApp.CapstoneBook.Model.Favorite;
import com.BookApp.CapstoneBook.Repo.FavoriteRepository;

@Service
public class FavoriteService {
	
	@Autowired
	private FavoriteRepository favRepository;
	
	public Favorite addFav(Favorite fav) {
		Favorite favo = favRepository.save(fav);
		return favo;
	}
	
	public void updateFav(Favorite fav) {
		favRepository.save(fav);
	}
	
	public ResponseEntity<String> deleteFavorite(int id){
		Optional<Favorite> fav = favRepository.findById(id);
		if(fav.isPresent()) {
			favRepository.deleteById(id);
		}
		return new ResponseEntity<>("Your Fav item has been deleted", HttpStatus.OK);
	}
	
	public void deleteFav(int favid) {
		favRepository.deleteById(favid);
	}
	
	public ResponseEntity<List<Favorite>> getFavs(int id){
		List<Favorite> favs =  favRepository.findByUsersId(id);
		return new ResponseEntity<List<Favorite>>(favs,HttpStatus.OK);
	}


}
