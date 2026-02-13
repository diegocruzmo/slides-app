export function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_APP_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_APP_URL is not defined");
  }

  return url;
}
