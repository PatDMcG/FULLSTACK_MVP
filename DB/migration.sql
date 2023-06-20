drop table if exists chores;
create table chores(
    Title varchar NOT NULL,
    Est_Time_min int NOT NULL,
    Id serial NOT NULL
);