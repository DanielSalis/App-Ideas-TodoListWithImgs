CREATE TABLE public.todo(
    cd_todo SERIAL PRIMARY KEY,
    binary_img bytea,
    mime_type varchar(150),
    description varchar(255),
);