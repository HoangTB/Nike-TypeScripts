import app from './app/app';
import sequelize from './libraries/database/db.connect';
const port = 8080;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('connect mysql successfully');
    console.log(`http://localhost:${port}`);
  } catch (err) {
    console.log('err', err);
  }
});
