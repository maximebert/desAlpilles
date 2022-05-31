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



COMMIT;
