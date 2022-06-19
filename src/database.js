const { connect } = require('mongoose');

(async () => {
  try {
    const db = await connect('mongodb://localhost:27018/tp2-dacs');
    console.log(`DB Connected to ${db.connection.name}`);
  } catch(error) {
    console.error(error);
  }
})();
