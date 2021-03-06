-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS role CASCADE;
-- DROP TABLE IF EXISTS users_class CASCADE;
-- DROP TABLE IF EXISTS users_class CASCADE;
-- DROP TABLE IF EXISTS event CASCADE;
-- DROP TABLE IF EXISTS ticket CASCADE;
-- DROP TABLE IF EXISTS course CASCADE;
-- DROP TABLE IF EXISTS schedule CASCADE;
-- DROP TABLE IF EXISTS note CASCADE;
-- DROP TABLE IF EXISTS lesson CASCADE;
-- DROP TABLE IF EXISTS cover_image CASCADE;
-- DROP TABLE IF EXISTS newspaper CASCADE;
-- DROP TABLE IF EXISTS contact_info CASCADE;
-- DROP TABLE IF EXISTS register CASCADE;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username varchar(50),
    password varchar(200),
	telephone_number varchar(20),
	fullname varchar(20),
	email varchar(50),
	role_id INT
);
CREATE TABLE role(
	id SERIAL PRIMARY KEY,
	role_name varchar(20)
);

ALTER TABLE users ADD FOREIGN KEY(role_id) REFERENCES role(id);

CREATE TABLE users_class(
	id SERIAL PRIMARY KEY,
    student_id INT,
    course_id VARCHAR(100)
);

ALTER TABLE users_class ADD FOREIGN KEY(student_id) REFERENCES users(id);

CREATE TABLE event(
	id SERIAL NOT NULL PRIMARY KEY,
    avatar VARCHAR(150) NOT NULL,
    background_image VARCHAR(150) NOT NULL ,
    title VARCHAR(200) NOT NULL ,
    description  VARCHAR(1000) NOT NULL,
    contents  VARCHAR(10000) NOT NULL,
    speaker  VARCHAR(100) NOT NULL,
    starttime  DATE NOT NULL,
    finishtime  DATE NOT NULL,
    address  VARCHAR(100) NOT NULL,
    date_post DATE NOT NULL  default CURRENT_DATE,
    user_id INT NOT NULL,
    job VARCHAR(150) NOT NULL,
    price_ticket VARCHAR(100) NOT NULL, 
    total_ticket INT NOT NULL,
    deadline DATE NOT NULL
);
ALTER TABLE event ADD FOREIGN KEY(user_id) REFERENCES users(id);


CREATE TABLE ticket(
	id SERIAL NOT NULL PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL,
    phone_number INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    count_ticket INT NOT NULL,
    event_id INT NOT NULL
);
ALTER TABLE ticket ADD FOREIGN KEY(event_id) REFERENCES event(id);


CREATE TABLE course(
    course_id VARCHAR(100) NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(10000) NOT NULL,
    picture VARCHAR(150) NOT NULL,
    portfolio VARCHAR(10000),
    parent_id INT,
    note_id INT NOT NULL,
    image VARCHAR(150)
);
ALTER TABLE users_class ADD FOREIGN KEY(course_id) REFERENCES course(course_id);

CREATE TABLE schedule(
	id SERIAL NOT NULL PRIMARY KEY,
    course_id VARCHAR(100) NOT NULL,
    class_level VARCHAR(15) NOT NULL,
    class_id INT NOT NULL,
    schedule_class VARCHAR(100) NOT NULL,
    open_date DATE
);
ALTER TABLE schedule ADD FOREIGN KEY(course_id) REFERENCES course(course_id);

CREATE TABLE note(
    id SERIAL NOT NULL PRIMARY KEY,
    note_title VARCHAR(100) NOT NULL,
    note_content VARCHAR(10000) NOT NULL
);
ALTER TABLE course ADD FOREIGN KEY(note_id) REFERENCES note(id);

CREATE TABLE lesson(
	id SERIAL NOT NULL PRIMARY KEY,
    video VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    homework VARCHAR(10000) NOT NULL,
    documents VARCHAR(10000),
    course_id VARCHAR(1000)
);
ALTER TABLE lesson ADD FOREIGN KEY(course_id) REFERENCES course(course_id);

CREATE TABLE general(
    id SERIAL NOT NULL PRIMARY KEY,
    cover_id INT,
    logo VARCHAR(150),
    newspaper_id INT,
    video_intro VARCHAR(150)
);
CREATE TABLE cover_image(
    id SERIAL NOT NULL PRIMARY KEY,
    image_link  VARCHAR(150)
);
CREATE TABLE newspaper(
    id SERIAL NOT NULL PRIMARY KEY,
    cover_link  VARCHAR(150),
    title VARCHAR(200),
    content VARCHAR(10000),
    description VARCHAR(1000)
);
ALTER TABLE general ADD FOREIGN KEY(cover_id) REFERENCES cover_image(id);
ALTER TABLE general ADD FOREIGN KEY(newspaper_id) REFERENCES newspaper(id);

CREATE TABLE contact_info(
    id SERIAL PRIMARY KEY,
    intro VARCHAR(200),
    phone_number INT,
    email VARCHAR(50),
    face_link VARCHAR(150),
    twitter_link VARCHAR(150),
    google_link VARCHAR(150),
    insta_link VARCHAR(150),
    google_map_link VARCHAR(300)
);

CREATE TABLE register(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    phone INT,
    email VARCHAR(150),
    dob DATE,
    address VARCHAR(150),
    course VARCHAR(100)
);

-- add index for document column
-- CREATE INDEX idx_fts_search ON users USING gin(document);
-- CREATE INDEX idx_fts_search ON newspaper USING gin(document);
-- End of file.
