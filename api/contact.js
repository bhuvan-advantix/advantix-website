import { Resend } from 'resend';

const adminHtml = (name, email, company, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; background-color: #030014; color: #ffffff; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #030014; padding: 40px 10px;">
        <tr>
            <td align="center">
                <table width="100%" max-width="600" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #0a0a0a; border: 1px solid #2a2a35; border-radius: 12px; overflow: hidden;">
                    <tr>
                        <td align="center" style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 35px 40px;">
                            <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">Advantix<span style="color: #d8b4fe;">AGI</span></h1>
                            <p style="margin: 8px 0 0 0; font-size: 13px; color: #e2e8f0; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">System Notification</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 25px 0; font-size: 18px; color: #ffffff; font-weight: 600; border-bottom: 2px solid #1e1e2d; padding-bottom: 12px;">INBOUND LEAD DETAILS</h2>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #1e1e2d; border-radius: 8px; border-collapse: separate; border-spacing: 0; background-color: #0f0f16;">
                                <tr>
                                    <td width="30%" style="padding: 16px 20px; border-right: 1px solid #1e1e2d; border-bottom: 1px solid #1e1e2d; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; background-color: #0c0c11; border-top-left-radius: 8px;">Client Name</td>
                                    <td width="70%" style="padding: 16px 20px; border-bottom: 1px solid #1e1e2d; color: #ffffff; font-size: 15px; font-weight: 500;">${name}</td>
                                </tr>
                                <tr>
                                    <td width="30%" style="padding: 16px 20px; border-right: 1px solid #1e1e2d; border-bottom: 1px solid #1e1e2d; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; background-color: #0c0c11;">Email Address</td>
                                    <td width="70%" style="padding: 16px 20px; border-bottom: 1px solid #1e1e2d; font-size: 15px;">
                                        <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none; font-weight: 500;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="padding: 16px 20px; border-right: 1px solid #1e1e2d; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; background-color: #0c0c11; border-bottom-left-radius: 8px;">Company</td>
                                    <td width="70%" style="padding: 16px 20px; color: #ffffff; font-size: 15px; font-weight: 500;">${company || 'N/A'}</td>
                                </tr>
                            </table>
                            <h3 style="margin: 30px 0 15px 0; font-size: 13px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Submitted Message</h3>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 24px; background-color: #151520; border: 1px solid #1e1e2d; border-left: 4px solid #7c3aed; border-radius: 4px; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </td>
                                </tr>
                            </table>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-top: 35px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}?subject=Re: Your inquiry to Advantix AGI" style="display: inline-block; background-color: #7c3aed; border: 1px solid #8b5cf6; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 36px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">Reply to Prospect</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 25px 40px; background-color: #050508; border-top: 1px solid #1e1e2d;">
                            <p style="margin: 0; color: #4b5563; font-size: 12px; font-weight: 500;">Secure transmission from Advantix AGI Web Interface</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

const clientHtml = (name, adminEmail) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; background-color: #030014; color: #ffffff; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #030014; padding: 40px 10px;">
        <tr>
            <td align="center">
                <table width="100%" max-width="600" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #0a0a0a; border: 1px solid #2a2a35; border-radius: 12px; overflow: hidden;">
                    <tr>
                        <td align="center" style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 40px;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">Advantix<span style="color: #d8b4fe;">AGI</span></h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 45px 40px;">
                            <h2 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #ffffff;">Thank you, ${name}.</h2>
                            <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.7;">
                                We have successfully received your inquiry at Advantix AGI. Our engineering and strategy team is reviewing your message and will respond within 24 to 48 business hours.
                            </p>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin: 25px 0; border: 1px solid #1e1e2d; border-radius: 8px; background-color: #0f0f16;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <p style="margin: 0; color: #a78bfa; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #1e1e2d; padding-bottom: 12px; margin-bottom: 16px;">Our Expertise</p>
                                        <p style="margin: 0; color: #9ca3af; font-size: 14px; line-height: 1.6;">
                                            We specialize in engineering transformative AI solutions, deploying intelligent autonomous agents, and orchestrating advanced data workflows to elevate enterprise operations.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-top: 35px;">
                                <tr>
                                    <td align="center">
                                        <a href="https://advantixagi.com" style="display: inline-block; background-color: transparent; border: 2px solid #7c3aed; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 36px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">Return to Website</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 30px 40px; background-color: #050508; border-top: 1px solid #1e1e2d;">
                            <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; font-weight: 500;">
                                For urgent matters, directly contact <a href="mailto:${adminEmail}" style="color: #7c3aed; text-decoration: none;">${adminEmail}</a>
                            </p>
                            <p style="margin: 0; color: #4b5563; font-size: 12px;">&copy; ${new Date().getFullYear()} Advantix AGI LLP. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export default async function handler(req, res) {
  // CORS check (Vercel automatically implements standard rules, but we explicit it for security)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields.' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const ADMIN_EMAIL    = process.env.ADMIN_EMAIL;
  const FROM_EMAIL     = process.env.FROM_EMAIL || 'noreply@advantixagi.com';

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration: API Key missing' });
  }

  if (!ADMIN_EMAIL) {
    return res.status(500).json({ error: 'Server misconfiguration: ADMIN_EMAIL missing' });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    // 1. Send Admin Email
    await resend.emails.send({
      from: `Advantix AGI <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `New Lead: ${name} (${company || 'No Company'})`,
      replyTo: email,
      html: adminHtml(name, email, company, message),
    });

    // 2. Send Client Email
    await resend.emails.send({
      from: `Advantix AGI <${FROM_EMAIL}>`,
      to: email,
      replyTo: ADMIN_EMAIL,
      subject: `We have received your message, ${name} — Advantix AGI`,
      html: clientHtml(name, ADMIN_EMAIL),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Resend API Error on Vercel:', err);
    return res.status(500).json({ error: err?.message || 'Error sending email' });
  }
}
