import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/recursos")({
  beforeLoad: () => {
    throw redirect({ to: "/biblioteca", replace: true });
  },
});
