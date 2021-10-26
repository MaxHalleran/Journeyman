import express from "express";
import index from "./v1/index.js";
const api_index_router = express.Router();

api_index_router.use('/v1', index);

export default api_index_router; 