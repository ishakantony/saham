import { z } from "zod";

export const decimalSchema = z.number()
  .transform(value => {
    return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(value)
  });
