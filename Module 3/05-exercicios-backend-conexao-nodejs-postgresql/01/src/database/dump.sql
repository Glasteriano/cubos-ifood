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

    