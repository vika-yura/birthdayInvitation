const express = require('express');
const app = express();
const config = require('config');
const cors = require('cors');
const pool = require('./db');


//middleware
app.use(cors());
app.use(express.json()); //req.body

const PORT = config.get('port') || 5000;

//ROUTES//

//create wish

app.post('/wishes', async (req, res) => {
  try {
    const {title} = req.body;
    const newWish = await pool.query(
      "INSERT INTO wishlist_items (title) VALUES($1) RETURNING *",
      [title]
    );

    res.json(newWish);
  } catch (err) {
    console.log(err.message);
  }
});

//get all wishes

app.get('/wishes', async (req, res) => {
  try {
    const allWishes = await pool.query('SELECT * FROM wishlist_items');

    res.json(allWishes.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a wish

app.get('/wishes/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const wish = await pool.query('SELECT * FROM wishlist_items WHERE wish_id = $1', [id]);


    res.json(wish.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update a wish

app.put('/wishes/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const {title, activeGuest} = req.body;

    const updateWish = await pool.query('UPDATE wishlist_items SET selected_user = $1 WHERE wish_id = $2', [activeGuest.user_id, id]);


    res.json('Wish was updated');
  } catch (err) {
    console.log(err.message);
  }
});

//delete a wish

app.delete('/wishes/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const deleteWish  = await pool.query('DELETE FROM wishlist_items WHERE wish_id = $1', [id]);

    res.json('Wish was deleted');
  } catch(err) {
    console.log(err.message);
  }
});

// get all users

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');

    res.json(allUsers.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
