import express from "express";
import { Knex } from "knex";

const app = express();
// import { Request, Response } from "express";ˇ
const port = process.env.PORT || 3001;

// API endpoint routes
app.use('/api', require('./routes/api/api_index'));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {

	// Client folder built
	app.use(express.static("client/build"));

} else {

	app.get('/', (req, res) => {
		res.send('Error: Development environment accessed.');
	});

}

app.listen(port, () => {

	console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
	console.log(Knex);

	console.log(`Example app listening at http://localhost:${port}`)
});