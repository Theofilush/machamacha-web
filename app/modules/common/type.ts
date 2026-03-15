import type { paths } from "~/schema";

export type { paths };

export type getProductSuccessResponse = paths["/products"]["get"]["responses"][200]["content"]["application/json"];
// type ErrorResponse = paths["/my/endpoint"]["get"]["responses"][500]["content"]["application/json"]["schema"];
