CREATE DATABASE trivia;

USE trivia;

CREATE TABLE users(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL UNIQUE,
  hash VARCHAR(64) NOT NULL,
  total_points INT NOT NULL,
  games_played INT NOT NULL,
  badge VARCHAR(120) NOT NULL
);

CREATE TABLE games(
  room_id VARCHAR(10) PRIMARY KEY NOT NULL,
  host_username VARCHAR(20) NOT NULL UNIQUE,
  num_questions INT NOT NULL,
  time_per_question INT NOT NULL,
  max_players INT NOT NULL,
  num_players INT NOT NULL DEFAULT 1,
  is_started TINYINT NOT NULL DEFAULT 0
);

INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Backbone', '$2a$10$WZDCgP6R1OiAIiHYUtXAe.UPvJp0ez.DqSv58E3BJK2drc8yVmj2a', 10000, 100, 'onFire,hacker');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Leo', '$2a$10$/uog2cLlSxi/dXDJPQhBZ.xVGxLE03Y8.o4Jb/SahLaJS0A/MLahC', 4080, 76, 'onFire,champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Rebecca', '$2a$10$z2Lr2WlpmXxHOBz/Hk9XI.DBHI8o/7Frv02rZiAf7kmWkor4Itc42', 3750, 72, 'champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Lynn', '$2a$10$1VLtqj9qsgl3MYM5ZhZCFuQq24iWoENmgTVRF7Z0Gpfb.gD080.MW', 3020, 67, 'champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('David', '$2a$10$zw6RbM4M/MpD188Zr3U20.ylSBYRuizdG/e1cCdUF7jLa5gWlfIme', 2980, 61, 'grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Lam', '$2a$10$NNULfpWpOVrbGuSyFTBjmuHdilWmzuBIntpOjRhSo8RQYgfmcQEmO', 2830, 55, 'newb');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Jon', '$2a$10$OcWWvxq29ZuSEL3rz/aGAe3rZyUUd6.7X.omMYBxAt3pc6qAy7DPS', 2470, 77, 'newb,grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Christine', '$2a$10$f16wZvuQVuI0p00Wg5djFecMzPrZv3sS2lsvGwEfYTZFeDN9K.2dm', 2010, 42, 'newb,grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Austin', '$2a$10$9E6DqHNNyt05J7T0aBvWUuKtipmUsC50GlVpxF/3jYTZvh4bB4Jme', 10, 1, 'turd,grazer');
