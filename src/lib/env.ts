import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * This is the schema for the environment variables.
 *
 * Please import **this** file and use the `env` variable
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    RESEND_API_KEY: z.string().min(1),
    RESEND_AUDIENCE_ID: z.string().optional(),
  },
  /**
   * If you add `client` environment variables, you need to add them to
   * `experimental__runtimeEnv` as well.
   */
  client: {},
  experimental__runtimeEnv: {},
});
