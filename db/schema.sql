DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  name varchar(130) NOT NULL,
  devour boolean,
  PRIMARY KEY(id)
);

SELECT * FROM burgers;