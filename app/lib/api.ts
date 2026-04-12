import createClient from "openapi-fetch";
import type { paths } from "~/schema";

// const fetchClient = createFetchClient<paths>({
//   baseUrl: import.meta.env.VITE_API_URL,
// });

// export const $api = createClient(fetchClient);

export const fetchClient = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });
