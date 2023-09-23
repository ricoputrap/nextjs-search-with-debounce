import { dummyFoodProducts, Product } from "@/data/products";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  data: Product[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "GET") return res.status(404);

  const searchQuery: string = (req.query.search as string) || "";

  const filteredProducts = dummyFoodProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return res.json({
    data: filteredProducts
  });
}