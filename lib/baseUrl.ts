export function getBaseUrl() {
  const url = process.env.APP_URL;

  if (!url) {
    throw new Error("APP_URL is not defined in production");
  }

  return url;
}
