// Supabase Edge Function: send-qr-email
// Sends a QR code PNG to the given email via Resend.
//
// Required secrets (set with `supabase secrets set ...`):
//   RESEND_API_KEY   - API key from https://resend.com
//   FROM_EMAIL       - Verified sender, e.g. "QR Generator <noreply@yourdomain.com>"
//
// Deploy: supabase functions deploy send-qr-email --no-verify-jwt

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

type Payload = {
  email?: string;
  label?: string;
  qrPngBase64?: string;
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const fromEmail = Deno.env.get("FROM_EMAIL");
  if (!apiKey || !fromEmail) {
    return json(500, { error: "Server is missing RESEND_API_KEY or FROM_EMAIL" });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const email = payload.email?.trim();
  const qrPngBase64 = payload.qrPngBase64;
  const label = payload.label?.trim() || "Your QR Code";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: "Invalid email address" });
  }
  if (!qrPngBase64) {
    return json(400, { error: "Missing qrPngBase64" });
  }

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:0 auto;padding:24px;color:#0f172a">
      <h1 style="font-size:22px;margin:0 0 8px">Your QR code is ready</h1>
      <p style="margin:0 0 16px;color:#475569;font-size:14px">
        Here is the QR code you generated. The PNG is attached to this email.
      </p>
      <p style="margin:16px 0;font-size:14px"><strong>Label:</strong> ${escapeHtml(label)}</p>
      <p style="margin:24px 0 0;color:#94a3b8;font-size:12px">
        Sent by Online QR Generator.
      </p>
    </div>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: "Your QR Code",
      html,
      attachments: [
        {
          filename: "qr-code.png",
          content: qrPngBase64,
        },
      ],
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    return json(502, { error: "Email provider error", detail });
  }

  return json(200, { ok: true });
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
