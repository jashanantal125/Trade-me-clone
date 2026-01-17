# EmailJS Setup Guide

This guide will help you configure EmailJS to send contact form submissions to both `fbis.nzd@gmail.com` and `jashanantal25@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (or use SMTP)
5. Copy the **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** Contact Form

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content (HTML):**
```html
<p><strong>New Contact Form Submission</strong></p>

<p><strong>From:</strong> {{from_name}}<br>
<strong>Email:</strong> {{from_email}}<br>
<strong>Phone:</strong> {{phone}}<br>
<strong>Service Interested In:</strong> {{service}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the FBIS website contact form.</em></p>
```

**Settings:**
- **To Email:** `fbis.nzd@gmail.com, jashanantal25@gmail.com` (both emails separated by comma)
- **From Name:** `FBIS Website`
- **From Email:** Use your verified email or leave blank
- **Reply To:** `{{from_email}}` (so you can reply directly to the sender)

4. Save the template and copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (looks like `xxxxxxxxxxxxx`)

## Step 5: Add Environment Variables

1. Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Form

1. Restart your dev server: `npm run dev`
2. Go to the contact page and submit a test form
3. Check both email inboxes for the message

## Troubleshooting

- **Emails not sending:** Verify all three environment variables are set correctly
- **Template errors:** Make sure template variable names match exactly (`{{from_name}}`, `{{from_email}}`, etc.)
- **CORS errors:** Make sure your domain is added in EmailJS account settings if deploying

## Note for Static Build

For static builds, environment variables are embedded at build time. Make sure to:
1. Set environment variables before running `npm run build`
2. Or configure them in your deployment platform (Vercel, Netlify, etc.)
