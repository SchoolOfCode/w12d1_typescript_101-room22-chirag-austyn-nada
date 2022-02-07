import logger from "jet-logger";

export const pErr = (err: Error) => {
  if (err) {
    logger.err(err);
  }
};
