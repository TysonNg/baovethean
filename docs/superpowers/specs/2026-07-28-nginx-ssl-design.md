# Nginx Reverse Proxy and SSL Design

## Goal

Expose the production Next.js application at `https://baovethean.com`, redirect
all HTTP traffic to HTTPS, and redirect `www.baovethean.com` permanently to the
apex domain.

## Architecture

Nginx runs directly on the VPS and owns public ports 80 and 443. It terminates
TLS and proxies application requests to the Next.js process listening only on
`127.0.0.1:3000`. PM2 keeps that Node.js process alive and restores it after a
server reboot. PostgreSQL remains separate and is never exposed through Nginx.

Request flow:

`Browser -> Nginx :80/:443 -> Next.js/Payload :3000 -> PostgreSQL :5432`

## Components

- `deploy/nginx/baovethean.com.conf`: production Nginx virtual host.
- `deploy/pm2/ecosystem.config.cjs`: PM2 process definition for `next start`.
- `docs/deployment.md`: DNS, server setup, Certbot issuance, deployment,
  verification, renewal, logs, and rollback instructions.
- `.env.example`: production URL examples for the canonical domain.

## Routing and TLS

- Port 80 serves the ACME challenge and redirects all other requests to HTTPS.
- Port 443 accepts both hostnames.
- `www.baovethean.com` redirects with HTTP 301 to
  `https://baovethean.com$request_uri`.
- `baovethean.com` proxies to `http://127.0.0.1:3000`.
- Certbot uses the Nginx plugin to issue one certificate containing both names
  and installs automatic renewal through its systemd timer.
- TLS settings generated and maintained by Certbot are not duplicated manually.

## Proxy Behavior

Nginx forwards the original host, client IP, protocol, and forwarding chain.
HTTP/1.1 upgrade headers support WebSocket-compatible connections. Request
bodies up to 50 MB are accepted for Payload media uploads. Proxy timeouts allow
longer admin uploads without leaving connections unlimited.

## PM2 Behavior

PM2 runs `npm start` with `NODE_ENV=production` from the project directory. It
uses one forked process because Next.js manages request concurrency itself.
Memory-based restart protection is enabled, logs use PM2 defaults, and
`pm2 startup` plus `pm2 save` restore the service after reboot.

## Failure Handling

- Nginx returns a gateway error if the PM2-managed application is unavailable.
- PM2 restarts a crashed Node.js process.
- Deployment instructions verify Nginx syntax before reload.
- Certificate issuance is performed only after both DNS names resolve to the
  VPS and ports 80/443 are open.
- Renewal is checked with `certbot renew --dry-run`.

## Verification

- Validate the Nginx configuration with `nginx -t`.
- Confirm PM2 status and local application response on port 3000.
- Confirm HTTP-to-HTTPS and `www`-to-apex redirects with `curl`.
- Confirm the production response and certificate renewal dry run.
- Run repository lint and TypeScript checks for tracked project changes.
