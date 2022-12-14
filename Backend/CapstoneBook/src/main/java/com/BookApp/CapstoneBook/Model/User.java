package com.BookApp.CapstoneBook.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER_TBL")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String userName;

	//@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	private String email;

	@OneToMany(cascade = CascadeType.ALL)
	private Set<Favorite> favorites;

	public User(String userName, String email, String password) {
		this.userName = userName;
		this.password = password;
		this.email = email;
	}
}
