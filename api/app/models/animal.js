const database = require('./database');

const animalMapper = {

  async findAll() {
    const result = await database.query(
      'SELECT * FROM "animal"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "animal"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const animalId = Number(id);

    const result = await database.query(`SELECT
    a.id AS "animal_id",
    a.name AS "animal_name",
    a.birth AS "animal_birth",
    a.sex AS "animal_sex",
    a.icad AS "animal_icad",
    a.veterinary AS "animal_veterinary",
    s.name AS "animal_species",
    a.breed AS "animal_breed",
    a.dress AS "animal_dress",

    json_agg(json_build_object('event_id', e.id, 'event_title', e.title, 'event_date', e.date)) AS "event"
    FROM "animal" a

    LEFT JOIN "species" s ON a.species_id = s.id
    LEFT JOIN "event" e ON e.animal_id = a.id

    WHERE a.id = ${animalId}
    GROUP BY a.id, s.name`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;
  },

  async create(body) {
    const {
      breed,
      dress,
      name,
      birth,
      icad,
      sex,
      veterinary,
    } = body;
    const userId = body.user_id;
    const speciesId = body.species_id;

    // Insertion d'un animal dans la BDD
    const result = await database.query(
      `INSERT INTO "animal"
        ("user_id","species_id", "breed", "dress", "name", "birth", "icad", "sex", "veterinary")
        VALUES
        ('${userId}', '${speciesId}', '${breed}', '${dress}', '${name}', '${birth}', '${icad}', '${sex}', '${veterinary}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, animal) {
    const result = await database.query('SELECT * FROM "animal" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldAnimal = result.rows[0];
    const newAnimal = {
      ...oldAnimal,
      ...animal,
    };
    const {
      breed,
      dress,
      name,
      birth,
      icad,
      sex,
      veterinary,
    } = newAnimal;
    const userId = newAnimal.user_id;
    const speciesId = newAnimal.species_id;

    // Mise à jour d'un animal de la BDD
    const savedanimal = await database.query(`UPDATE "animal"
          SET "species_id" = '${speciesId}',
         "breed" = '${breed}',
         "dress" = '${dress}',
         "name" = '${name}',
         "birth" = '${birth}',
         "icad" = '${icad}',
         "sex" = '${sex}',
         "veterinary" = '${veterinary}',
         "user_id" = '${userId}'
         WHERE id = '${id}'
          RETURNING *;`);

    return savedanimal.rows[0];
  },
  async delete(id) {
    const animalId = Number(id);
    // Suppression d'un animal de la BDD
    const result = await database.query(
      `DELETE FROM "animal" WHERE id = '${animalId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};

module.exports = animalMapper;
