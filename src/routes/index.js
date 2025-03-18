import express from "express";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Api Secretariado"));
};

export default routes;