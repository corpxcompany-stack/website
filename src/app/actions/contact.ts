"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = "CorpX Website <noreply@send.mycorpx.com>";
const NOTIFY_ADDRESS = "info@mycorpx.com";

export type ContactFormState = {
  success: boolean;
  message: string;
};

/** Strips HTML-significant characters so form input can't break or inject into the email body. */
function esc(value: string | null | undefined): string {
  if (!value) return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Removes newlines — a CR/LF in a subject line allows header injection. */
function safeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = ((formData.get("full_name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const phone = ((formData.get("phone") as string) ?? "").trim();
  const service = ((formData.get("service") as string) ?? "").trim();
  const location = ((formData.get("location") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();

  // --- Validation ---
  if (!name) {
    return { success: false, message: "Enter your name to continue." };
  }
  if (!email && !phone) {
    return { success: false, message: "Add an email address or phone number so we can reach you." };
  }
  if (email && !isValidEmail(email)) {
    return { success: false, message: "That email address doesn't look right. Check it and try again." };
  }

  // --- 1. Save the lead ---
  const { error: dbError } = await supabase
    .from("contact_submissions")
    .insert([{ name, email, phone, service, location, message }]);

  if (dbError) {
    console.error("[contact] Supabase insert failed:", dbError);
    return {
      success: false,
      message: "We couldn't save your enquiry. Please try again, or call us on +91 95950 00022.",
    };
  }

  // --- 2. Notify the business ---
  const subject = safeHeader(
    `🚀 New Lead [${location || "Web"}]: ${name} - ${service || "General Inquiry"}`
  );

  const plainText = [
    "New Service Enquiry - CorpX",
    `Name: ${name}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Location: ${location || "Not specified"}`,
    `Service: ${service || "Not specified"}`,
    `Message: ${message || "No additional requirements provided"}`,
  ].join("\n");

  const formattedMessage = esc(message).replace(/\n/g, "<br/>") || "<em>No specific requirements provided.</em>";

  try {
    const { error: emailError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [NOTIFY_ADDRESS],
      ...(email && isValidEmail(email) ? { replyTo: email } : {}),
      subject,
      text: plainText,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead Notification</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f6f8; padding: 32px 16px;">
            <tr>
              <td align="center">
                <!-- Main Container -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #eef0f2;">
                  
                  <!-- Header Badge -->
                  <tr>
                    <td style="padding: 28px 32px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #38bdf8; background-color: rgba(56, 189, 248, 0.12); padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px;">
                              New Website Lead
                            </span>
                            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                              ${esc(service) || "General Service Enquiry"}
                            </h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Contact Meta Details -->
                  <tr>
                    <td style="padding: 24px 32px 16px 32px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                        
                        <!-- Client Name -->
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 120px; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: 600; color: #0f172a;">${esc(name)}</td>
                        </tr>

                        <!-- Email -->
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">
                            ${
                              email 
                                ? `<a href="mailto:${esc(email)}" style="color: #0284c7; text-decoration: none; font-weight: 500;">${esc(email)}</a>` 
                                : '<span style="color: #94a3b8;">Not provided</span>'
                            }
                          </td>
                        </tr>

                        <!-- Phone -->
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">
                            ${
                              phone 
                                ? `<a href="tel:${esc(phone)}" style="color: #0284c7; text-decoration: none; font-weight: 500;">${esc(phone)}</a>` 
                                : '<span style="color: #94a3b8;">Not provided</span>'
                            }
                          </td>
                        </tr>

                        <!-- Location -->
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Location</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #334155;">
                            ${esc(location) || '<span style="color: #94a3b8;">Not specified</span>'}
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Message / Requirements Box -->
                  <tr>
                    <td style="padding: 0 32px 28px 32px;">
                      <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                        Requirement Notes:
                      </div>
                      <div style="background-color: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #334155;">
                        ${formattedMessage}
                      </div>

                      <!-- Quick Action Buttons -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                        <tr>
                          ${
                            email 
                              ? `<td align="left" style="padding-right: 8px;">
                                  <a href="mailto:${esc(email)}" style="background-color: #0f172a; color: #ffffff; padding: 10px 18px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none; display: inline-block;">
                                    Reply via Email
                                  </a>
                                </td>` 
                              : ''
                          }
                          ${
                            phone 
                              ? `<td align="left">
                                  <a href="tel:${esc(phone)}" style="background-color: #e2e8f0; color: #0f172a; padding: 10px 18px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none; display: inline-block;">
                                    Call Client
                                  </a>
                                </td>` 
                              : ''
                          }
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                        Synced with <strong>Supabase</strong> &bull; Submitted via <strong>corpx.co.in</strong>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (emailError) {
      console.error("[contact] Resend send failed:", emailError);
    }
  } catch (err) {
    console.error("[contact] Resend threw:", err);
  }

  return { success: true, message: "Thanks — we've got your enquiry and will be in touch shortly." };
}