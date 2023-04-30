#Crear Base de Datos

Create Database clientes

# Crear las Tablas

create table if not exists clientes
(
    id int auto_increment
        primary key,
    Nombres   varchar(75)      not null,
    Apellidos varchar(75)      not null,
    Telefono  varchar(9)       not null,
    email    varchar(75)      null,
    Estado    char default '1' not null,
    createdAt date             null,
    updatedAt date             null
);

create table if not exists direcciones
(
    id  int auto_increment
        primary key,
    Municipio    varchar(50)      not null,
    Departamento varchar(25)      not null,
    Direccion  varchar(75)      not null,
    Estado       char default '1' not null,
    createdAt    date             null,
    updatedAt    date             null
);

create table if not exists direccionesclientes
(
    id int auto_increment
        primary key,
    idClientes          int not null,
    idDirecciones       int not null,
    createdAt       date     null,
    updatedAt       date     null,
    constraint direccionesclientes_Clientefk
        foreign key (idClientes) references clientes (id),
    constraint direccionesclientes_Direccionfk
        foreign key (idDirecciones) references direcciones (id)
);

create table if not exists documentos
(
    id int auto_increment
        primary key,
    Nombredocumento          varchar(25) not null,
    numero           varchar(25) not null,
    Estado          char default '1' not null,
    createdAt       date     null,
    updatedAt       date     null
);

create table if not exists documentosclientes
(
    id int auto_increment
        primary key,
    idClientes          int              not null,
    idDocumentos    int              not null,
    createdAt          date             null,
    updatedAt          date             null,
    constraint documentosclientes_Clientefk
        foreign key (idClientes) references clientes (id),
    constraint documentosclientes_documentosfk
        foreign key (idDocumentos) references documentos (id)
);