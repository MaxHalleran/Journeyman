import express from "express";
import apiRoutes from "./routes/api/api_index.js";

const port = process.env.PORT || 3001;

const app = express();

// API endpoint routes
app.use('/api', apiRoutes);

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
	console.log(`Example app listening at http://localhost:${port}`)
});