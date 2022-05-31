const database = require('./database');

const tipsMapper = {
  async random() {
    const result = await database.query('SELECT * FROM "tips" ORDER BY random() LIMIT 1');

    if (!result.rows) {
      throw new Error('No record available in table "event"');
    }
    return result.rows;
  },
};
module.exports = tipsMapper;
