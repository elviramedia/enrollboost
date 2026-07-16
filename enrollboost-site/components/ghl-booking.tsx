"use client";

import { useEffect } from "react";
import { GHL_BOOKING_SRC } from "@/lib/utils";

/**
 * Embeds your GoHighLevel calendar.
 * Paste your calendar's booking widget URL into GHL_BOOKING_SRC (lib/utils.ts).
 * In GHL: Calendars > (your calendar) > ... > Embed Code — copy the iframe `src`.
 */
export function GHLBooking() {
  useEffect(() => {
    // Loads GHL's embed script so the calendar auto-resizes.
    const id = "ghl-form-embed";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const configured = !GHL_BOOKING_SRC.includes("REPLACE_ME");

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-white shadow-lift">
      {configured ? (
        <iframe
          src={GHL_BOOKING_SRC}
          title="Book an Enrollment Strategy Session"
          id="MQ4CFV4X4PLE1Wbk4pvu_1784179171744"
          className="h-[720px] w-full border-0"
          scrolling="no"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-20 text-center">
          <p className="text-lg font-semibold text-ink">Calendar not connected yet</p>
          <p className="max-w-md text-sm text-ink-muted">
            Paste your GoHighLevel calendar link into{" "}
            <code className="rounded bg-paper-soft px-1.5 py-0.5 text-ink">
              GHL_BOOKING_SRC
            </code>{" "}
            in <code className="rounded bg-paper-soft px-1.5 py-0.5 text-ink">lib/utils.ts</code>.
          </p>
        </div>
      )}
    </div>
  );
}
