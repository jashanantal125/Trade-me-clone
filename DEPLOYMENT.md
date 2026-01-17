# Deployment Guide for Nginx

## Static Build Complete ✅

Your Next.js application has been built as a static site in the `dist` directory.

## Deployment Steps

### 1. Transfer Files to Server

Upload the entire `dist` folder to your server. You can use:
- `scp` (SSH)
- `rsync`
- FTP/SFTP
- Git (clone and build on server)

**Example using scp:**
```bash
scp -r dist/* user@your-server:/var/www/trade-me-consultancy/dist/
```

### 2. Install Nginx (if not already installed)

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

### 3. Configure Nginx

1. Copy the provided `nginx.conf` to your nginx sites directory:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/trade-me-consultancy
   ```

2. Update the configuration:
   - Replace `your-domain.com` with your actual domain or IP
   - Update the `root` path to match where you deployed the `dist` folder
   - Example: `root /var/www/trade-me-consultancy/dist;`

3. Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/trade-me-consultancy /etc/nginx/sites-enabled/
   ```

4. Test nginx configuration:
   ```bash
   sudo nginx -t
   ```

5. Reload nginx:
   ```bash
   sudo systemctl reload nginx
   ```

### 4. Set Permissions

Make sure nginx can read the files:
```bash
sudo chown -R www-data:www-data /var/www/trade-me-consultancy/dist
sudo chmod -R 755 /var/www/trade-me-consultancy/dist
```

### 5. SSL/HTTPS (Optional but Recommended)

If you have a domain, set up SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## File Structure

```
dist/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── services/           # Services pages
├── images/             # All images
└── _next/              # Next.js static assets
```

## Rebuilding

When you make changes:

1. Run `npm run build` locally
2. Upload the new `dist` folder to your server
3. Reload nginx: `sudo systemctl reload nginx`

## Troubleshooting

- **404 errors**: Check that `try_files` directive is correct in nginx config
- **Images not loading**: Verify image paths and permissions
- **CSS/JS not loading**: Check `_next/static/` directory exists and is accessible
- **Check nginx logs**: `sudo tail -f /var/log/nginx/error.log`
