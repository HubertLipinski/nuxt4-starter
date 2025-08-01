/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";

import z, { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env: ";
      message += Object.keys(z.flattenError(error).fieldErrors).join("\n");
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error(error);
    }
  }
}
