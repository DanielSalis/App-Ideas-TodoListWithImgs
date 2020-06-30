CREATE TABLE public.user_todo(
    cd_user_tudo SERIAL PRIMARY KEY,
    fk_user int REFERENCES public.user(cd_user),
    fk_todo int REFERENCES public.todo(cd_todo)
);