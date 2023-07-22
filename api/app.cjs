/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const DDG = require('duck-duck-scrape');

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const port = 8000;

const delay = sec => new Promise((resolve) => setTimeout(resolve, sec * 1000));

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  await delay(3);
  res.send(PRODUCTS)
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const searchResults = await DDG.searchImages(id, { safeSearch: DDG.SafeSearchType.STRICT });
  res.send(searchResults?.results[0]?.image);
});

app.listen(port, () => console.log(`The server is listening on port ${port}`))