# Security Policy

## Supported Versions

The following versions of the I3DION platform are currently receiving security updates:

| Version | Supported          |
| ------- | ------------------ |
| 4.x     | :white_check_mark: |
| 3.x     | :x:                |
| < 2.x   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within the I3DION platform, please send an email to the DevSecOps team at [i3diontech@gmail.com](mailto:i3diontech@gmail.com). We consider all security reports with the highest priority and will attempt to address any vulnerabilities immediately.

## DevSecOps Pipeline

The repository utilizes continuous security scanning.

1. **GitHub Dependabot**: Active on all `package.json` dependencies.
2. **Weekly Selenium Audits**: Automated checks that parse console outputs and verify DOM integrity on production.

## Vercel Security Headers

The platform strictly enforces the following HTTP headers via `vercel.json`:
- `X-Frame-Options: DENY` (Prevents Clickjacking)
- `X-Content-Type-Options: nosniff` (Prevents MIME-sniffing)
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (Enforces HTTPS)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy`: Restricts scripts and styles to trusted domains only.
