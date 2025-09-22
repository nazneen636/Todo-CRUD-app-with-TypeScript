// utils/emailTemplates.js
exports.confirmRegistrationTemplate = (
  name,
  email,
  subject,
  fLink,
  otp,
  expiryTime = Date.now() + 10 * 60 * 1000 // timestamp or string
) => {
  // If expiryTime is a timestamp, format it to readable string:
  const expiry =
    typeof expiryTime === "number"
      ? new Date(expiryTime).toLocaleString("en-US", { hour12: false })
      : expiryTime;

  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${subject}</title>
    <style>
      /* General resets */
      body,table,td,a{ -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table{ border-collapse:collapse !important; }
      body{ margin:0 !important; padding:0 !important; width:100% !important; background-color:#0f172a; color:#e6eef8; font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
      a { color: #7c3aed; text-decoration: none; }
      /* Container */
      .email-container { max-width: 600px; margin: 0 auto; padding: 24px; background: linear-gradient(180deg, rgba(17,24,39,0.95), rgba(7,10,13,0.95)); border-radius: 12px; box-shadow: 0 8px 30px rgba(2,6,23,0.6); }
      .brand { text-align:center; margin-bottom: 18px; }
      .brand h1 { margin:0; font-size:20px; background: linear-gradient(90deg,#6366f1,#ec4899,#8b5cf6); -webkit-background-clip: text; color: transparent; font-weight:800; }
      .card { background: #071025; padding: 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.03); }
      .greeting { font-size:16px; margin-bottom:6px; color:#cfe7ff; }
      .lead { font-size:14px; color:#9fb8d9; margin-bottom:16px; line-height:1.5; }
      .otp { display:inline-block; background: linear-gradient(90deg,#111827,#0b1220); padding: 14px 18px; border-radius: 10px; font-size:22px; font-weight:700; letter-spacing:4px; color:#e6f0ff; border: 1px solid rgba(255,255,255,0.04); margin: 12px 0; }
      .cta { display:block; margin-top: 16px; text-align:center; }
      .btn { display:inline-block; padding: 12px 20px; border-radius:10px; background: linear-gradient(90deg,#6366f1,#ec4899); color:white; font-weight:600; text-decoration:none; }
      .meta { margin-top:14px; color:#7f9bb3; font-size:12px; }
      .small { color:#93b0d1; font-size:12px; margin-top:18px; }
      .footer { margin-top:20px; text-align:center; color:#7f9bb3; font-size:12px; }
      /* mobile */
      @media (max-width:480px) {
        .email-container { padding: 16px; border-radius:8px; }
        .otp { font-size:20px; padding:12px 14px; }
      }
    </style>
  </head>
  <body>
    <center style="width:100%;padding:20px 12px;">
      <div class="email-container" role="article" aria-roledescription="email" aria-label="${subject}">
        <div class="brand">
          <h1>Confirm Your Registration</h1>
        </div>

        <div class="card" role="section" aria-labelledby="greeting">
          <p id="greeting" class="greeting">Hello ${escapeHtml(name)},</p>

          <p class="lead">
            Thank you for registering with <strong>${escapeHtml(
              email || "your account"
            )}</strong>.
            To complete your registration, please use the verification code below or click the verification link.
          </p>

          <div style="text-align:center;">
            <div class="otp" aria-live="polite">${escapeHtml(String(otp))}</div>
          </div>

          <div class="cta">
            <a class="btn" href="${escapeAttr(
              fLink
            )}" target="_blank" rel="noopener noreferrer">
              Verify your email
            </a>
          </div>

          <p class="meta">
            This code will expire at <strong>${escapeHtml(
              String(expiry)
            )}</strong>.
          </p>

          <p class="small">
            If you didn't request this, you can safely ignore this email. Do not share this OTP with anyone.
          </p>
        </div>

        <div class="footer">
          <p>Need help? Reply to this email or visit our support page.</p>
          <p style="margin-top:8px;">&copy; ${new Date().getFullYear()} Your Company</p>
        </div>
      </div>
    </center>
  </body>
  </html>
  `;
};

/* Helper functions for safe interpolation (very small helpers) */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
function escapeAttr(str) {
  if (!str) return "";
  return String(str)
    .replaceAll('"', "%22")
    .replaceAll("'", "%27")
    .replaceAll("&", "%26");
}
