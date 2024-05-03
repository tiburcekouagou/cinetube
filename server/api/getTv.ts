import { getTv } from "~/utils/tmdbAPI";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const { id } = await readBody(event);
    
    return getTv(id);
  })