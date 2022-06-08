CREATE DATABASE wishlist;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE category(
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255)
);

CREATE TABLE wishlist_items(
  wish_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  link VARCHAR(255),
  img VARCHAR(255),
  price VARCHAR(255),
  selectedUser VARCHAR(255)
);
