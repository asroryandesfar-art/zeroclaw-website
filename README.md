# ZeroClaw Solana Pay website

Public, buildless landing page hosted from `main` at the repository root through GitHub Pages. Its local assets use relative URLs for the `/zeroclaw-website/` project path.

Only public website files belong here. No payment engine source, private keys, API credentials, environment files, databases, or license signing material.

## Checkout configuration

`config.js` starts with an empty `checkoutUrl`. The buy button reads **Checkout coming soon** and cannot open a checkout. When an official Lemon Squeezy link exists, set that value after reviewing the URL and completing the buyer journey. The site accepts HTTPS links on `lemonsqueezy.com` or its subdomains only.

## Preview

Run `python3 -m http.server 8000` in this directory, then visit `http://localhost:8000/`.

## Disclosure

The $200 lifetime offer includes permanent non-exclusive business use, 12 months of updates, and 90 days of support. Automated Rust tests and public Mainnet read-only checks have passed, but a real paid Mainnet SOL/USDC invoice has not yet been verified end to end. Live WhatsApp delivery remains unverified. The existing Rust core retains its MIT/Apache-2.0 rights; the paid offer adds distribution, updates, and support.
