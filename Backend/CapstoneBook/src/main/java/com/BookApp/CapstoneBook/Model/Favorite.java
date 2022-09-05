package com.BookApp.CapstoneBook.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name ="FAV_TABLE")
public class Favorite {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "fav_id")
	private int id;
	
	private String bookname;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "user_id", nullable = false)
	User users;
	
	public Favorite(String bookname, User user){
		this.bookname = bookname;
		this.users = user;
	}
	

}
