# Nginx Configuration for Next.js Static Export

This guide explains how to configure nginx to serve your Next.js static export.

## Quick Setup

### 1. Build your static site
```bash
npm run build
```
This will create the static files in the `dist` directory.

### 2. Copy files to server
```bash
# On your server
sudo mkdir -p /var/www/bfis
sudo cp -r dist/* /var/www/bfis/dist/
sudo chown -R www-data:www-data /var/www/bfis
```

### 3. Install nginx configuration

**Option A: Create a new site configuration**
```bash
sudo cp nginx.conf /etc/nginx/sites-available/bfis
sudo ln -s /etc/nginx/sites-available/bfis /etc/nginx/sites-enabled/
```

**Option B: Add to existing default configuration**
Edit `/etc/nginx/sites-available/default` and replace the content with the configuration from `nginx.conf`.

### 4. Update configuration
Edit `/etc/nginx/sites-available/bfis` and update:
- `server_name` with your domain name
- `root` path to match your actual deployment location

### 5. Test and reload nginx
```bash
# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Configuration Details

### Key Settings

1. **Root Directory**: Points to your `dist` folder
   ```nginx
   root /var/www/bfis/dist;
   ```

2. **SPA Routing**: Handles client-side routing
   ```nginx
   location / {
       try_files $uri $uri/ $uri.html /index.html;
   }
   ```

3. **Static Asset Caching**: Caches static files for 1 year
   ```nginx
   location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

4. **Gzip Compression**: Reduces file sizes for faster loading

## SSL/HTTPS Setup

For production, you should use HTTPS. Here are options:

### Option 1: Let's Encrypt (Free)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option 2: Manual SSL Configuration
1. Obtain SSL certificates
2. Uncomment the HTTPS server block in `nginx.conf`
3. Update certificate paths
4. Reload nginx

## Deployment Script Example

Create a `deploy.sh` script:

```bash
#!/bin/bash

# Build the site
npm run build

# Copy to server (adjust as needed)
rsync -avz --delete dist/ user@your-server:/var/www/bfis/dist/

# Reload nginx on server
ssh user@your-server "sudo systemctl reload nginx"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## Troubleshooting

### Check nginx status
```bash
sudo systemctl status nginx
```

### View nginx error logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### Check if nginx is listening
```bash
sudo netstat -tulpn | grep :80
```

### Test configuration syntax
```bash
sudo nginx -t
```

## Common Issues

1. **403 Forbidden**: Check file permissions
   ```bash
   sudo chown -R www-data:www-data /var/www/bfis
   sudo chmod -R 755 /var/www/bfis
   ```

2. **404 on routes**: Ensure `try_files` includes `/index.html` fallback

3. **Static assets not loading**: Check `_next/static/` path configuration

4. **CORS issues**: Add appropriate CORS headers if needed

## Performance Tips

1. Enable HTTP/2 (requires HTTPS)
2. Use CDN for static assets
3. Enable browser caching headers
4. Consider using nginx as reverse proxy to a CDN

