import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import express, { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import apiRouter from "./routes/api";
import logger from "jet-logger";

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

// Setup Error handling
app.use((err: Error, _: Request, res: Response) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export here and start in a diff file (for testing).
export default app;
