package com.BookApp.CapstoneBook.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BookApp.CapstoneBook.Model.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer>{
	
	List<Favorite> findByUsersId(int id);
	
}
