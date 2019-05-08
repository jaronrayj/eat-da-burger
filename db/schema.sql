DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  name varchar(130) NOT NULL,
  pic varchar(200) NOT NULL,
  flavor varchar(300) NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM burgers;