import express from "express";
const api_index_router = express.Router();

api_index_router.use('/v1', require('./v1/v1_index'));

export default api_index_router;