const database = require('./database');

const eventMapper = {
  async findAll() {
    const result = await database.query(
      'SELECT * FROM "event"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "event"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const eventId = Number(id);

    const result = await database.query(`SELECT
    e.id AS "event_id",
    t.name AS "event_type",
    e.title AS "event_title",
    e.description AS "event_description",
    e.date AS "event_date",
    json_agg(json_build_object('animal_id', a.id, 'animal_name', a.name)) AS "animal"
    FROM "event" e
    LEFT JOIN "animal" a ON e.animal_id = a.id
    LEFT JOIN "tag" t ON t.id = e.tag_id

    WHERE e.id = ${eventId}
    GROUP BY e.id, t.name`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;
  },

  async create(body) {
    const {
      title,
      descritpion,
      date,
    } = body;
    const animalId = body.animal_id;
    const tagId = body.tag_id;

    // Insertion d'une moto dans la BDD
    const result = await database.query(
      `INSERT INTO "event"
        ("tag_id", "animal_id", "title", "description", "date")
        VALUES
        ('${tagId}', '${animalId}', '${title}', '${descritpion}', '${date}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },
  async update(id, event) {
    const result = await database.query('SELECT * FROM "event" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldEvent = result.rows[0];
    const newEvent = {
      ...oldEvent,
      ...event,
    };
    const {
      title,
      description,
      date,
    } = newEvent;
    const animalId = newEvent.animal_id;
    const tagId = newEvent.tag_id;

    // Mise à jour d'un évenement de la BDD
    const savedEvent = await database.query(`UPDATE "event"
        SET "tag_id" = '${tagId}',
        "animal_id" = '${animalId}',
        "title" = '${title}',
        "description" = '${description}',
        "date" = '${date}'
        WHERE id = '${id}'
        RETURNING *;`);

    return savedEvent.rows[0];
  },

  async delete(id) {
    const eventId = Number(id);

    // Suppression d'une moto de la BDD
    const result = await database.query(
      `DELETE FROM "event" WHERE id = '${eventId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};
module.exports = eventMapper;
