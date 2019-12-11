/* SQLEditor (Generic SQL)*/


CREATE TABLE department
(
id_department INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
CONSTRAINT department_pkey PRIMARY KEY (id_department)
);

CREATE TABLE experience
(
id_experience INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
slogan VARCHAR(15),
short_history TEXT,
history TEXT NOT NULL,
recommendations TEXT,
id_photo_360 VARCHAR(50),
id_photos VARCHAR(50),
CONSTRAINT experience_pkey PRIMARY KEY (id_experience)
);

CREATE TABLE heritage_site
(
id_heritage_site INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
description TEXT NOT NULL,
geom GEOMETRY NOT NULL,
type VARCHAR(20),
CONSTRAINT heritage_site_pkey PRIMARY KEY (id_heritage_site)
);

CREATE TABLE experience_heritage_site
(
id_experience INTEGER NOT NULL,
id_heritage_site INTEGER NOT NULL,
CONSTRAINT experience_heritage_site_pkey PRIMARY KEY (id_experience,id_heritage_site)
);

CREATE TABLE province
(
id_province INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
fk_department INTEGER NOT NULL,
CONSTRAINT province_pkey PRIMARY KEY (id_province)
);

CREATE TABLE service
(
id_service INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
description TEXT,
CONSTRAINT service_pkey PRIMARY KEY (id_service)
);

CREATE TABLE municipality
(
id_municipality INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
fk_province INTEGER NOT NULL,
CONSTRAINT municipality_pkey PRIMARY KEY (id_municipality)
);

CREATE TABLE service_experience
(
id_experience INTEGER NOT NULL,
id_service INTEGER NOT NULL,
type VARCHAR(20) NOT NULL,
description TEXT,
CONSTRAINT service_experience_pkey PRIMARY KEY (id_experience,id_service)
);

CREATE TABLE service_provider
(
id_service_provider INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
address VARCHAR(30),
history TEXT,
trajectory TEXT,
start_date DATE,
capacity INTEGER,
opening_hours TEXT,
contact_name VARCHAR(30) NOT NULL,
contact_cell VARCHAR(10) NOT NULL,
contact_phone VARCHAR(10),
contact_mail VARCHAR,
contact_web VARCHAR,
sector VARCHAR(30),
sidewalk VARCHAR(30),
geom GEOMETRY NOT NULL,
fk_municipality INTEGER NOT NULL,
CONSTRAINT service_provider_pkey PRIMARY KEY (id_service_provider)
);

CREATE TABLE service_provider_service
(
id_service_provider INTEGER NOT NULL,
id_service INTEGER NOT NULL,
minimum_price INTEGER,
maximum_price INTEGER,
CONSTRAINT service_provider_service_pkey PRIMARY KEY (id_service_provider,id_service)
);

CREATE TABLE tourist_plan
(
id_tourist_plan INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
CONSTRAINT tourist_plan_pkey PRIMARY KEY (id_tourist_plan)
);

CREATE TABLE service_provider_tourist_plan
(
id_service_provider INTEGER NOT NULL,
id_tourist_plan INTEGER NOT NULL,
terms TEXT,
description TEXT,
price INTEGER,
CONSTRAINT service_provider_tourist_plan_pkey PRIMARY KEY (id_service_provider,id_tourist_plan)
);

ALTER TABLE experience_heritage_site ADD CONSTRAINT fk_experience FOREIGN KEY (id_experience) REFERENCES experience (id_experience);

ALTER TABLE experience_heritage_site ADD CONSTRAINT fk_heritage_site FOREIGN KEY (id_heritage_site) REFERENCES heritage_site (id_heritage_site);

ALTER TABLE province ADD FOREIGN KEY (fk_department) REFERENCES department (id_department);

ALTER TABLE municipality ADD FOREIGN KEY (fk_province) REFERENCES province (id_province);

ALTER TABLE service_experience ADD CONSTRAINT fk_experience FOREIGN KEY (id_experience) REFERENCES experience (id_experience);

ALTER TABLE service_experience ADD CONSTRAINT fk_heritage_site FOREIGN KEY (id_service) REFERENCES service (id_service);

ALTER TABLE service_provider ADD FOREIGN KEY (fk_municipality) REFERENCES municipality (id_municipality);

ALTER TABLE service_provider_service ADD CONSTRAINT fk_experience FOREIGN KEY (id_service_provider) REFERENCES service_provider (id_service_provider);

ALTER TABLE service_provider_service ADD CONSTRAINT fk_heritage_site FOREIGN KEY (id_service) REFERENCES service (id_service);

ALTER TABLE service_provider_tourist_plan ADD CONSTRAINT fk_experience FOREIGN KEY (id_service_provider) REFERENCES service_provider (id_service_provider);

ALTER TABLE service_provider_tourist_plan ADD CONSTRAINT fk_heritage_site FOREIGN KEY (id_tourist_plan) REFERENCES tourist_plan (id_tourist_plan);


update heritage_site set geom = (SELECT geom FROM point_experience WHERE id=1)  where id_heritage_site=1;


update service_provider set geom = (SELECT geom FROM point_experience WHERE id=10)  where id_service_provider=1;


update municipality set geom = (SELECT geom FROM point_experience WHERE id=22)  where id_municipality=1;

INSERT INTO point_projects (id_project, name, description, geom, is_visible)
SELECT id, name, history, geom, true FROM point_experience where id=40;


/*Como cargar datos desde csv sin cabeceras*/

copy service_experience (id_experience, id_service, description, type) FROM '/Users/mans/Downloads/ejemplo2.csv' DELIMITER ';' CSV;