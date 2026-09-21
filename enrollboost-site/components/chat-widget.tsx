"use client";

import Script from "next/script";

// GoHighLevel (LeadConnector) chat widget
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6ab1799b5853991db9694234"
      strategy="afterInteractive"
    />
  );
}
