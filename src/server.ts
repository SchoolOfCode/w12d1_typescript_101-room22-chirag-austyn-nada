import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import express, { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import apiRouter from "./routes/api";
import logger from "jet-logger";
import {
  getMovies,
  updateMovieByID,
  getMovieByID,
  createMovie,
  deleteMovieByID,
} from "./models/yourModelHere.js";

// Constants
const app = express();
const { BAD_REQUEST } = StatusCodes;

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use("/", apiRouter);

app.get("/movie/:id", async function (req, res) {
  console.log(req.params.id);
  var movieByID = await getMovieByID(req.params.id);
  if (movieByID) {
    res.json({
      success: true,
      payload: movieByID,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

app.get("/movies", async function (req, res) {
  const searchString = req.query.search;
  let allMovies = await getMovies();
  if (searchString){
    allMovies = allMovies.filter(movieObj => movieObj.title.toLowerCase().includes(searchString.toLowerCase()))
  }
  res.json({
    success: true,
    payload: allMovies,
  });
});
app.post("/movies", async function (req, res) {
  let newMovie = req.body;
  newMovie = await createMovie();
  res.json({
    success: true,
    payload: newMovie,
  });
});
app.put("/movies/:id", async function (req, res) {
  let updatedMovie = await updateMovieByID(req.params.id, req.body);
  res.json({
    success: true,
    payload: updatedMovie,
  });
});
app.delete("/movies/:id", async function (req, res) {
  const deletedMovie = await deleteMovieByID(req.params.id);
  res.json({
    success: true,
    payload: deletedMovie,
  });
});
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});


// Setup Error handling
app.use((err: Error, _: Request, res: Response) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export here and start in a diff file (for testing).
export default app;
