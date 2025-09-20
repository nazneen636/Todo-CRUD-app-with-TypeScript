// const express = require("express");
// const app = express();
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded());

export default app;
