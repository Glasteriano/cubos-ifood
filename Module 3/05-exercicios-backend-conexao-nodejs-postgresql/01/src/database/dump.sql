-- Creating the database

CREATE DATABASE
    library;

-- Table "authors"

CREATE TABLE
    authors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      age INTEGER
    );

-- Table "books"

CREATE TABLE
	books (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        genre TEXT,
        publisher TEXT,
        publication_date DATE,
        author_id INTEGER REFERENCES authors (id)
    );
    