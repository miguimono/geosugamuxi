INSERT INTO department (id_department, name, geom, description)
SELECT id_department, name, geom, description
FROM polygon_departments



copy service_experience (id_experience, id_service, description, type) FROM '/Users/mans/Downloads/ejemplo2.csv' DELIMITER ';' CSV;


update department set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=1)  where id_department=1;

update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=2)  where id_province=1;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=3)  where id_province=2;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=4)  where id_province=3;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=5)  where id_province=4;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=6)  where id_province=5;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=7)  where id_province=6;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=8)  where id_province=7;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=9)  where id_province=8;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=10)  where id_province=9;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=11)  where id_province=10;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=12)  where id_province=11;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=13)  where id_province=12;
update province set geom = (SELECT geom FROM polygon_lagunas_sugamuxi WHERE id=14)  where id_province=13;

update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=10)  where id_municipality=1;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=3)  where id_municipality=2;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=5)  where id_municipality=3;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=2)  where id_municipality=4;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=1)  where id_municipality=5;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=13)  where id_municipality=6;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=6)  where id_municipality=7;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=7)  where id_municipality=8;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=4)  where id_municipality=9;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=8)  where id_municipality=10;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=9)  where id_municipality=11;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=11)  where id_municipality=12;
update municipality set geom = (SELECT geom FROM polygon_municipios_sugamuxi WHERE id=12)  where id_municipality=13;

update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=1)  where id_heritage_site=1;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=2)  where id_heritage_site=2;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=3)  where id_heritage_site=3;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=4)  where id_heritage_site=4;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=5)  where id_heritage_site=5;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=6)  where id_heritage_site=6;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=7)  where id_heritage_site=7;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=8)  where id_heritage_site=8;
update heritage_site set geom = (SELECT geom FROM point_actor WHERE id=9)  where id_heritage_site=9;

update service_provider set geom = (SELECT geom FROM point_experience WHERE id=1)  where id_service_provider=1;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=2)  where id_service_provider=2;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=3)  where id_service_provider=3;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=4)  where id_service_provider=4;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=5)  where id_service_provider=5;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=6)  where id_service_provider=6;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=7)  where id_service_provider=7;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=8)  where id_service_provider=8;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=9)  where id_service_provider=9;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=10)  where id_service_provider=10;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=11)  where id_service_provider=11;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=12)  where id_service_provider=12;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=13)  where id_service_provider=13;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=14)  where id_service_provider=14;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=15)  where id_service_provider=15;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=16)  where id_service_provider=16;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=17)  where id_service_provider=17;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=18)  where id_service_provider=18;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=19)  where id_service_provider=19;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=20)  where id_service_provider=20;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=21)  where id_service_provider=21;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=22)  where id_service_provider=22;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=23)  where id_service_provider=23;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=24)  where id_service_provider=24;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=25)  where id_service_provider=25;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=26)  where id_service_provider=26;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=27)  where id_service_provider=27;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=28)  where id_service_provider=28;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=29)  where id_service_provider=29;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=30)  where id_service_provider=30;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=31)  where id_service_provider=31;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=32)  where id_service_provider=32;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=33)  where id_service_provider=33;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=34)  where id_service_provider=34;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=35)  where id_service_provider=35;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=36)  where id_service_provider=36;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=37)  where id_service_provider=37;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=38)  where id_service_provider=38;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=39)  where id_service_provider=39;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=40)  where id_service_provider=40;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=41)  where id_service_provider=41;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=42)  where id_service_provider=42;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=43)  where id_service_provider=43;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=44)  where id_service_provider=44;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=45)  where id_service_provider=45;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=46)  where id_service_provider=46;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=47)  where id_service_provider=47;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=48)  where id_service_provider=48;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=49)  where id_service_provider=49;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=50)  where id_service_provider=50;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=51)  where id_service_provider=51;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=52)  where id_service_provider=52;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=53)  where id_service_provider=53;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=54)  where id_service_provider=54;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=55)  where id_service_provider=55;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=56)  where id_service_provider=56;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=57)  where id_service_provider=57;
update service_provider set geom = (SELECT geom FROM point_experience WHERE id=58)  where id_service_provider=58;

update service_provider set geom = (SELECT geom FROM point_actor WHERE id=10)  where id_service_provider=59;
update service_provider set geom = (SELECT geom FROM point_actor WHERE id=11)  where id_service_provider=60;
update service_provider set geom = (SELECT geom FROM point_actor WHERE id=12)  where id_service_provider=61;
update service_provider set geom = (SELECT geom FROM point_actor WHERE id=13)  where id_service_provider=62;

