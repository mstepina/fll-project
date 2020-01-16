
create table students
(
    first_name      varchar,
    last_name       varchar,
    id              integer not null
        constraint students_pk
            primary key,
    biography       text,
    date_of_birth   date,
    competitiveness integer default 0,
    createdat       date,
    modifedat       date,
    experience      integer,
    location        varchar
);

INSERT INTO public.students (first_name, last_name, id, biography, date_of_birth, competitiveness, createdat, modifedat, experience, location) VALUES ('Steven', 'SONG', 1, 'Im a highschool student looking to join a team', '2020-01-16', 1, '2020-01-16', '2020-01-16', 10, '6600 Dumbarton Circle');

