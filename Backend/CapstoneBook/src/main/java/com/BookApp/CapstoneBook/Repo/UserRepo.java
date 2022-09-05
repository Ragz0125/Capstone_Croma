package com.BookApp.CapstoneBook.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BookApp.CapstoneBook.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	

}
