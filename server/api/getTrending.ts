import type { MediaType } from "~/types"
import { getTrending } from "~/utils/tmdbAPI";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { page, media } = await readBody(event);
  
  return getTrending(media);
})