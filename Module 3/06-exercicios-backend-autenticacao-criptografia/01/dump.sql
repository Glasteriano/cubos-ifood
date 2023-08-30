CREATE DATABASE catalogo_pokemons;

CREATE TABLE
	  users (
  	  id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  
CREATE TABLE
 pokemons (
     id SERIAL PRIMARY KEY,
     user_id INTEGER NOT NULL REFERENCES users(id),
     name VARCHAR(150) NOT NULL,
     abilities TEXT NOT NULL,
     picture TEXT,
     nickname VARCHAR(150)
    );




