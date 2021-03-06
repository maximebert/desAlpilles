BEGIN;

DROP TABLE IF EXISTS "tips", "event", "tag", "animal", "species", "user";

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" TEXT  NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "species" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "animal" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT REFERENCES "user"("id"),

    "species_id" INT REFERENCES "species"("id"),
    "breed" TEXT,
    "dress" TEXT,

    "name" TEXT NOT NULL,
    "birth" DATE NOT NULL,
    "icad" TEXT UNIQUE,
    "sex" TEXT NOT NULL,
    "veterinary" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ

);

CREATE TABLE "tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT  NOT NULL,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "event" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "tag_id" INT NOT NULL REFERENCES "tag"("id"),
    "animal_id" INT NOT NULL REFERENCES "animal"("id"),

    "title"TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMPTZ,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ

);

CREATE TABLE "tips" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "species_id" INT NOT NULL REFERENCES "species"("id"),

    "description" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ

);

INSERT INTO "user" ("lastname", "firstname", "email", "password")
VALUES
('bert', 'max', 'maxdu13@gmail.com', 'noisette123'),
('moussu', 'alban', 'alban@gmail.com', 'azerty');

INSERT INTO  "species" ("name")
VALUES
('Chien'),
('Chat'),
('Cheval'),
('Furet'),
('Lapin'),
('Poule');

INSERT INTO "animal" ("user_id","species_id", "breed", "dress", "name", "birth", "icad", "sex", "veterinary")
VALUES
(1, 1, 'Bouledogue Fran??ais', 'noire bring??e', 'Bulle', '2021-12-10' , '123456nf789', 'femelle', 'dr. Garcia, clinique des genets'),
(1, 2, 'British Shorthair', 'turtle cinnamon', 'Opale', '2018-11-05' , '1234', 'femelle', 'dr. Garcia, clinique des genets'),
(1, 2, 'MainCoon', 'Black Tortie Blotched tabby', 'Olympe', '2018-10-05' , '346', 'femelle', 'dr. Garcia, clinique des genets'),
(1, 2, 'British Shorthair', 'Black silver tabby blotched', 'Pablo', '2019-03-10' , '777', 'male', 'dr. Garcia, clinique des genets'),
(1, 2, 'goutti??re', 'Tabby', 'Zakk', '2014-03-21' , null, 'male', 'dr. Garcia, clinique des genets'),
(2, 2, 'Goutti??re', 'noir blanc', 'Felix', '2016-12-24' , null, 'male', 'Pr. Raoult, Marseille '),
(2, 6, 'Plymouth', 'noir blanc', 'Rocky', '2022-03-25' , null, 'male', 'Colonel Sanders, KFC ');

INSERT INTO "tag" ("name")
VALUES
('Soins m??dicaux'),
('Chirurgie'),
('Entretien'),
('Alimentation'),
('Sport'),
('Activit??es'),
('jeux'),
('Diver');

INSERT INTO "event" ("tag_id", "animal_id", "title", "description", "date")
VALUES
(1, 4, 'Controle annuel des dents', 'visite avec dr. Bosh car garcia en vacances', '2022-04-17 09:30:00'),
(2, 6, 'Castrations', 'Plus de coucougnettes...', '2022-04-17 09:00:00'),
(3, 1, 'Vermifuge', null, '2022-12-15 15:00:00'),
(3, 1, 'toilettage','Bains, Griffes, Controle des dents', '2022-04-17 09:00:00'),
(4, 2, 'jour de la pat??', null, '2022-06-17 09:00:00'),
(5, 3, 'Canicross dans les C??v??nes', null, '2022-08-04 07:00:00'),
(6, 4, 'Dr??ssage', 'cours avec esprit dog', '2022-09-04 07:00:00'),
(7, 2, 'Lanc?? de balle', 'dans la foret cet apr??s midi', '2022-09-30 16:30:00'),
(8, 5, 'Nettoyer le panier', null, '2022-03-30 16:00:00');

INSERT INTO "tips" ("species_id", "description")
VALUES
(1,'N'' emp??che que j suis une l??gende! Mais ils ont pas le droit de d??cider de la retraite eux-m??mes! On la dit et redit ??a! Sire, mon p??re ??tait peut-??tre unijambiste mais, moi, ma femme a pas de moustache!'),
(2,'Ben c???est bien ce que j''ai dit! Proven??al le Gaulois??? le Galois??? Ouais je vois ce que vous voulez dire??? Vous allez me faire le plaisir devous remuez un peu les miches, Sire, j''ai l???impression de me battre contre une vieille! Ils chantent pas vos espions. Non, j''vais varier les fruits, n''vous inqui??tez pas.'),
(3,'Pourquoi elle vous revient pas? L?? c???est une table ronde. Pour que les chevaliers de Bretagne se r??unissent autour. Toute fa??on autant vous y faire parce qu''?? partir de maintenant on va s''appeler ??Les Chevaliers de la Table Ronde??. Moi j''appelle ??a des politesses! Ah ah Sire! Je vous attends! ?? moins que vous pr??f??riez qu''on dise partout que le roi est une petite p??dale qui pisse dans son froc ?? l???id??e d''se battre!'),
(4,'Faut faire comme avec les scorpions qui se suicident quand ils sont entour??s par le feu. J''ai envie d???faire des tartes, voil??! Vous n???allez pas m???obliger ?? m''justifier! Sinon on fait un tunnel jusqu''?? notre campement. L??odagan et moi on creuse, pendant vous balancez de la caillasse dans l''autre sens pour les ??loigner du chantier.'),
(5,'Ouais mais nous on change de coin, et quand ils arrivent l??, ils sont pin??s, il y a personne. Ah mais non, on va se faire tuer l??! La ferme! Qu''est ce que vous nous chantez? Vous ??tes pas gaulois que je sache! Ah mais non arr??tez, l??, on va se faire rep??rer, l??. On va pas rester plant??s l?? comme des radis.'),
(6,'Allez-y mollo avec la joie! Il s''est fait chier dessus par un bouc! Encore une chance qu''on se soit pas fait construire un buffet ?? vaisselle. Ah ben c???est s??r que c''est pas Jo l''rigolo.');



COMMIT;
