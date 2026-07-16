import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Every "Book" button scrolls to the embedded calendar in the #book section.
export const BOOKING_URL = "#book";

// Paste your GoHighLevel calendar's booking widget URL here.
// In GHL: Calendars > your calendar > (...) > Embed Code — copy the iframe `src` value.
// It looks like: https://api.leadconnectorhq.com/widget/booking/XXXXXXXXXXXX
export const GHL_BOOKING_SRC =
  "https://api.leadconnectorhq.com/widget/booking/MQ4CFV4X4PLE1Wbk4pvu";

export const SITE_URL = "https://enrollboost.org";
