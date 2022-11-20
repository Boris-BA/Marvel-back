const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  const { title, limit, page } = req.query;
  // console.log(title, limit, page);
  //   console.log(page);

  let pageRequired = 1;
  if (page) {
    console.log(pageRequired);
    pageRequired = Number(page);
  }

  if (page) {
    skip = pageRequired * limit;
    console.log(skip);
  }

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${
      process.env.API_KEY
    }&title=${title ? title : ""}&limit=${limit}&skip=${skip ? skip : ""}`
  );

  res.json(response.data);
});

router.get("/personnages", async (req, res) => {
  const { name, limit, page } = req.query;

  let pageRequired = 1;
  if (page) {
    pageRequired = Number(page);
  }

  const skip = pageRequired * limit;
  //   console.log(skip);

  //   console.log( `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${
  //       process.env.API_KEY
  //     }&name=${name ? name : ""}&limit=${limit ? limit : ""}&skip=${
  //       skip ? skip : ""
  //     }`)

  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${
      process.env.API_KEY
    }&name=${name ? name : ""}&limit=${limit ? limit : ""}&skip=${
      skip ? skip : ""
    }`
  );

  res.json(response.data);
});

router.get("/personnages/:id", async (req, res) => {
  //   console.log(req.params);
  //   console.log(req.params.id);
  //   console.log(
  //     `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.API_KEY}`
  //   );
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.API_KEY}`
  );
  res.json(response.data);
});

module.exports = router;
