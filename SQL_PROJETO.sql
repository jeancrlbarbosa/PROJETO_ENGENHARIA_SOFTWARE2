/*BANCO CRIADO EM POSTGRESQL*/
create table login
(
    codigo serial
        primary key,
    login  varchar(100),
    senha  varchar(10),
    tipusu varchar(1)
);

create table livros
(
    codigo serial
        primary key,
    name   varchar(100),
    base64 text
);


