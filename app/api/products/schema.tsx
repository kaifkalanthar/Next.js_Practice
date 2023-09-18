import { z } from "zod";

const schema = z.object({
  id: z.number(),
  product: z.string(),
  price: z.number().min(1).max(10),
});

export default schema;
