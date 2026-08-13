import { request } from "@/core/lib/request";

export const getHome = async () => {
  const response = await request.get("/home");
  const data = response.data;
  console.log("[home service data]:", data);
  return data;
};
