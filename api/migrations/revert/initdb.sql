-- Revert opet:initdb from pg

BEGIN;

DROP TABLE IF EXISTS "tips", "event", "tag", "animal", "species", "user";

COMMIT;
