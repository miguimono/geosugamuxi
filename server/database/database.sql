/* Departamentos*/
CREATE TABLE public.department
(
    id_department integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    geom geometry NOT NULL,
    is_visible boolean,
    CONSTRAINT department_pkey PRIMARY KEY (id_department)
)

TABLESPACE pg_default;

ALTER TABLE public.department
    OWNER to postgres;


/* Provincias */
CREATE TABLE public.province
(
    id_province integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    fk_department integer,
    geom geometry,
    is_visible boolean,
    CONSTRAINT province_pkey PRIMARY KEY (id_province),
    CONSTRAINT province_fk_department_fkey FOREIGN KEY (fk_department)
        REFERENCES public.department (id_department) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.province
    OWNER to postgres;

/* Municipios*/
CREATE TABLE public.municipality
(
    id_municipality integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    fk_province integer,
    geom geometry NOT NULL,
    is_visible boolean,
    CONSTRAINT municipality_pkey PRIMARY KEY (id_municipality),
    CONSTRAINT municipality_fk_province_fkey FOREIGN KEY (fk_province)
        REFERENCES public.province (id_province) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.municipality
    OWNER to postgres;

/* prestador de servicios_plan turistico*/
CREATE TABLE public.service_provider_tourist_plan
(
    id_service_provider integer NOT NULL,
    id_tourist_plan integer NOT NULL,
    terms text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    price integer,
    CONSTRAINT service_provider_tourist_plan_pkey PRIMARY KEY (id_service_provider, id_tourist_plan),
    CONSTRAINT fk_actor FOREIGN KEY (id_tourist_plan)
        REFERENCES public.tourist_plan (id_tourist_plan) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_experience FOREIGN KEY (id_service_provider)
        REFERENCES public.service_provider (id_service_provider) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.service_provider_tourist_plan
    OWNER to postgres;

/* plan turistico*/
CREATE TABLE public.tourist_plan
(
    id_tourist_plan integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tourist_plan_pkey PRIMARY KEY (id_tourist_plan)
)

TABLESPACE pg_default;

ALTER TABLE public.tourist_plan
    OWNER to postgres;

/* prestador de servicios_servicios*/
CREATE TABLE public.service_provider_service
(
    id_service_provider integer NOT NULL,
    id_service integer NOT NULL,
    minimum_price integer,
    maximum_price integer,
    capacity character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT service_provider_service_pkey PRIMARY KEY (id_service_provider, id_service),
    CONSTRAINT fk_actor FOREIGN KEY (id_service)
        REFERENCES public.service (id_service) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_experience FOREIGN KEY (id_service_provider)
        REFERENCES public.service_provider (id_service_provider) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.service_provider_service
    OWNER to postgres;

/* servicio_experiencia*/
CREATE TABLE public.service_experience
(
    id_experience integer NOT NULL,
    id_service integer NOT NULL,
    description text COLLATE pg_catalog."default",
    type character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT service_experience_pkey PRIMARY KEY (id_experience, id_service),
    CONSTRAINT fk_actor FOREIGN KEY (id_service)
        REFERENCES public.service (id_service) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_experience FOREIGN KEY (id_experience)
        REFERENCES public.experience (id_experience) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.service_experience
    OWNER to postgres;

/* experiencia_patrimonio*/
CREATE TABLE public.experience_heritage_site
(
    id_experience integer NOT NULL,
    id_heritage_site integer NOT NULL,
    CONSTRAINT experience_patrimony_pkey PRIMARY KEY (id_experience, id_heritage_site),
    CONSTRAINT fk_actor FOREIGN KEY (id_heritage_site)
        REFERENCES public.heritage_site (id_heritage_site) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_experience FOREIGN KEY (id_experience)
        REFERENCES public.experience (id_experience) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.experience_heritage_site
    OWNER to postgres;

/* patrimonios*/
CREATE TABLE public.heritage_site
(
    id_heritage_site integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    geom geometry,
    type character varying(20) COLLATE pg_catalog."default" NOT NULL,
    is_visible boolean,
    CONSTRAINT patrimony_pkey PRIMARY KEY (id_heritage_site)
)

TABLESPACE pg_default;

ALTER TABLE public.heritage_site
    OWNER to postgres;

/* experiencias*/
CREATE TABLE public.experience
(
    id_experience integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    slogan text COLLATE pg_catalog."default",
    short_history text COLLATE pg_catalog."default",
    history text COLLATE pg_catalog."default" NOT NULL,
    recommendations text COLLATE pg_catalog."default",
    id_photo_360 character varying(50) COLLATE pg_catalog."default",
    id_gallery character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT experience_pkey PRIMARY KEY (id_experience)
)

TABLESPACE pg_default;

ALTER TABLE public.experience
    OWNER to postgres;

/* servicios*/
CREATE TABLE public.service
(
    id_service integer NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    CONSTRAINT service_pkey PRIMARY KEY (id_service)
)

TABLESPACE pg_default;

ALTER TABLE public.service
    OWNER to postgres;

/* prestador de servicios*/
CREATE TABLE public.service_provider
(
    id_service_provider integer NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    address character varying(50) COLLATE pg_catalog."default",
    history text COLLATE pg_catalog."default",
    trajectory text COLLATE pg_catalog."default",
    start_date date,
    opening_hours text COLLATE pg_catalog."default",
    contact_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    contact_mail character varying COLLATE pg_catalog."default",
    contact_web character varying COLLATE pg_catalog."default",
    sector character varying(50) COLLATE pg_catalog."default",
    sidewalk character varying(50) COLLATE pg_catalog."default",
    geom geometry,
    fk_municipality integer NOT NULL,
    contact_cell character varying(10) COLLATE pg_catalog."default" NOT NULL,
    contact_phone character varying(10) COLLATE pg_catalog."default",
    id_photo character varying(50) COLLATE pg_catalog."default",
    is_visible boolean,
    CONSTRAINT service_provider_pkey PRIMARY KEY (id_service_provider),
    CONSTRAINT service_provider_fk_municipality_fkey FOREIGN KEY (fk_municipality)
        REFERENCES public.municipality (id_municipality) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.service_provider
    OWNER to postgres;