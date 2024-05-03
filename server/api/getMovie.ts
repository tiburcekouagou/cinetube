import { getMovie } from "~/utils/tmdbAPI";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const { id } = await readBody(event);
    
    return getMovie(id);
  })