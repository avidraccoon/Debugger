import type { RouteConfig } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  route("contacts/", "routes/contact.tsx"),
] satisfies RouteConfig;
