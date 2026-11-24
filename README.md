# ZeroClaw Solana Pay website

Public, buildless product page hosted from `main` at the repository root through GitHub Pages. Its local assets use relative URLs for the `/zeroclaw-website/` project path.

Only public website files belong here. Never add the private `.tgz` package, license files, access tokens, payment engine source, private keys, API credentials, environment files, or databases.

## Sections

Hero, demo video (https://youtu.be/t4aPitLXOmo, recorded on Solana devnet), how it works (three steps plus commands tested against the released package), pricing (US$200 one-time, manual orders), FAQ, and Contact Sales.

## Contact Sales

Every **Contact Sales** button reads `salesContact` from `config.js` (currently the owner-approved public WhatsApp sales link). It accepts only a `mailto:` address or an `https://` URL. While it is empty, the buttons scroll to the contact section, which says the sales contact is being set up. Set the official contact there; no checkout runs on this site and no payment is taken here.

## Preview

Serve this directory with any static server, for example `npx http-server -a 127.0.0.1 -p 8799 .`, then visit `http://127.0.0.1:8799/`.

## Disclosure

Supports Solana Mainnet. The payment workflow was tested on Solana Devnet. The existing Rust core keeps its MIT/Apache-2.0 rights; the paid offer adds the packaged distribution, license, updates, and support.
