export function validateUrl(value: string): string | null {
  const v = value.trim();
  if (!v) return null;

  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(v) ? v : `https://${v}`;

  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return "Enter a valid URL (e.g. https://yourbrand.com)";
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return "URL must start with http:// or https://";
  }

  const host = url.hostname;
  if (!host || !host.includes(".") || host.startsWith(".") || host.endsWith(".")) {
    return "Enter a valid URL (e.g. https://yourbrand.com)";
  }

  const tld = host.split(".").pop() || "";
  if (tld.length < 2 || !/^[a-z]{2,}$/i.test(tld)) {
    return "Enter a valid URL (e.g. https://yourbrand.com)";
  }

  return null;
}
