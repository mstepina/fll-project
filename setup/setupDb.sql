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
    "createdAt"     date    default now(),
    "updatedAt"     date    default now(),
    experience      integer,
    location        varchar,
    group_id        integer
        constraint students_groups_id_fk
            references groups
            on update cascade on delete set null,
    email           varchar
);

alter table students
    owner to postgres;

INSERT INTO public.students (first_name, last_name, id, biography, date_of_birth, competitiveness, "createdAt", "updatedAt", experience, location, group_id, email) VALUES ('Steven', 'SONG', 1, 'Im a highschool student looking to join a team', '2020-01-16', 1, '2020-01-16', '2020-01-16', 10, '6600 Dumbarton Circle', null, null);

create table groups
(
    id                  serial not null
        constraint groups_pk
            primary key,
    name                varchar,
    location            varchar,
    avg_competitiveness integer default 0,
    experience          integer default 0,
    "createdAt"         date    default now(),
    "updatedAt"         date    default now()
);

alter table groups
    owner to postgres;

create unique index groups_id_uindex
    on groups (id);

INSERT INTO public.groups (id, name, location, avg_competitiveness, experience, "createdAt", "updatedAt") VALUES (1, 'ROBOGROUP', '6600 Dumbarton Circle Fremont', 1, 1, '2020-01-16', '2020-01-16');