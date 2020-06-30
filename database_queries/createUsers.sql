CREATE TABLE user(
    cd_user SERIAL PRIMARY KEY,
    first_name VARCHAR (50),
    last_name VARCHAR(50),
    email VARCHAR(200),
    password VARCHAR(50),
    last_login TIMESTAMP
);