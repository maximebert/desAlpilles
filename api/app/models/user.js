const database = require('./database');

const userMapper = {

  async findAll() {
    const result = await database.query('SELECT firstname, lastname FROM "user"');

    if (!result.rows) {
      throw new Error('No record available in table "user"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const userId = Number(id);

    const result = await database.query(`SELECT
    u.id AS "user_id",
    u.lastname AS "user_lastname",
    u.firstname AS "user_firstname",
    u.email AS "user_email",
    json_agg(json_build_object('animal_id', a.id, 'animal_name', a.name, 'animal_species', s.name)) AS "animal",
    json_agg(json_build_object('event_id', e.id, 'event_title', e.title, 'event_date', e.date, 'animal_id', a.id, 'animal_name', a.name)) AS "event"
    FROM "user" u
    LEFT JOIN "animal" a ON a.user_id = u.id
    LEFT JOIN "species" s ON s.id = a.species_id
    LEFT JOIN "event" e ON e.animal_id = a.id

    WHERE u.id = ${userId}
    GROUP BY u.id`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;
  },

  async findByMail(email) {
    // Récupération d'un utilisateur par son email
    const result = await database.query(`SELECT * FROM "user" WHERE email = '${email}'`);

    if (result.rowCount === 0) {
      return undefined;
    }

    return result.rows[0];
  },

  async create(lastname, firstname, email, hashedPassword) {
    // Insertion d'un utilisateur dans la BDD
    const result = await database.query(
      `INSERT INTO "user"
         ("lastname", "firstname", "email", "password")
     VALUES
         ('${lastname}', '${firstname}', '${email}', '${hashedPassword}')
         RETURNING *;`,
    );

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, user) {
    const result = await database.query('SELECT * FROM "user" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldUser = result.rows[0];
    const newUser = {
      ...oldUser,
      ...user,
    };
    const {
      lastname,
      firstname,
      email,
      password,
    } = newUser;

    // Mise à jour d'un utilisateur de la BDD
    const savedUser = await database.query(`UPDATE "user"
           SET "lastname" = '${lastname}',
          "firstname" = '${firstname}',
          "email" = '${email}',
          "password" = '${password}'
          WHERE id = '${id}'
          RETURNING *;`);

    return savedUser.rows[0];
  },

  async delete(id) {
    const userId = Number(id);
    // Suppression d'un utilisateur de la BDD
    const result = await database.query(
      `DELETE FROM "user" WHERE id = '${userId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};

module.exports = userMapper;
