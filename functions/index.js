// Cloudflare Pages Function for the LMO homepage only.
// Normalize tracking-only links to the clean canonical homepage.
// All other requests continue to the existing static site.

function isTrackingParameter(name) {
  const key = name.toLowerCase();
  return key === "ref" || key.startsWith("utm_");
}

export function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (
    (request.method !== "GET" && request.method !== "HEAD") ||
    url.pathname !== "/" ||
    !url.search
  ) {
    return next();
  }

  const keys = [...url.searchParams.keys()];

  // Do not change application parameters that are not strictly tracking.
  if (keys.length === 0 || !keys.every(isTrackingParameter)) {
    return next();
  }

  return Response.redirect(`${url.origin}/`, 301);
}
