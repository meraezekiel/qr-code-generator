import { useState } from "react";

export type WebsiteSectionId = "website" | "name" | "password";

const URL_REQUIRED_MESSAGE = "Website URL is required";
const URL_INVALID_MESSAGE = "Please enter a valid URL (e.g. https://example.com)";

function validateWebsiteUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return URL_REQUIRED_MESSAGE;

  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname;
    if (!host) return URL_INVALID_MESSAGE;
    const hasTld = host.includes(".") && !host.endsWith(".");
    if (!hasTld && host !== "localhost") return URL_INVALID_MESSAGE;
    return null;
  } catch {
    return URL_INVALID_MESSAGE;
  }
}

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+";

function generateStrongPassword(length = 16): string {
  const all = UPPER + LOWER + DIGITS + SYMBOLS;
  const buf = new Uint32Array(length);
  crypto.getRandomValues(buf);

  const pickFrom = (set: string, idx: number) => set[buf[idx] % set.length];

  const chars = [
    pickFrom(UPPER, 0),
    pickFrom(LOWER, 1),
    pickFrom(DIGITS, 2),
    pickFrom(SYMBOLS, 3),
  ];
  for (let i = 4; i < length; i++) chars.push(pickFrom(all, i));

  const shuffleBuf = new Uint32Array(chars.length);
  crypto.getRandomValues(shuffleBuf);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = shuffleBuf[i] % (i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

export function useWebsiteContentHandler() {
  const [openSections, setOpenSections] = useState<Set<WebsiteSectionId>>(
    () => new Set<WebsiteSectionId>(["website", "name", "password"]),
  );
  const [url, setUrl] = useState("");
  const [urlTouched, setUrlTouched] = useState(false);
  const [name, setName] = useState("");
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleSection = (id: WebsiteSectionId) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isOpen = (id: WebsiteSectionId) => openSections.has(id);

  const handleUrlBlur = () => {
    if (url.length > 0) setUrlTouched(true);
  };

  const urlError = urlTouched ? validateWebsiteUrl(url) : null;
  const isValid = validateWebsiteUrl(url) === null;

  const qrValue = (() => {
    if (!isValid) return "";
    const trimmed = url.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  })();

  const togglePasswordEnabled = () => {
    setPasswordEnabled((enabled) => {
      const next = !enabled;
      if (next && password.length === 0) {
        setPassword(generateStrongPassword());
      }
      return next;
    });
  };

  const togglePasswordVisible = () => setPasswordVisible((v) => !v);

  return {
    isOpen,
    toggleSection,
    url,
    setUrl,
    urlError,
    isValid,
    qrValue,
    handleUrlBlur,
    name,
    setName,
    passwordEnabled,
    togglePasswordEnabled,
    password,
    setPassword,
    passwordVisible,
    togglePasswordVisible,
  };
}
