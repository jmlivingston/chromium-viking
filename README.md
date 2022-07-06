# Chromium Viking

## Summary

Copies AWS credentials and prompts to save locally

> Warning: Use at your own risk. While this extension is open source and doesn't track you, collect any data, or anything nefarious, be sure you understand what it does and test out before using.

## Environment

Should work in any Chromium based browser. It has been tested on Chrome, Edge, and Brave.

## Instructions

This extension is not currently published to any web store, but you can add it manually with the following steps:

- Download and unzip or use Git to clone this repository to a local directory.
- Open your browser Extension page from the menu or by pasting the following in your address bar depending on your browser.
  - chrome://extensions
  - edge://extensions
  - brave://extensions
  - etc.
- Ensure that "Developer mode" is enabled.
- Click "Load Unpacked"
- Browse to the "src" directory you just downloaded or cloned.
- Browse to any page, then click the extension icon to clear the cache and reload.
- Optional - Pin the extension for easy access.
- Navigate to [https://vikingdigital.awsapps.com/start#/](https://vikingdigital.awsapps.com/start#/)
- Click on the extension scissors icon. This will open the credentials modal, then prompt the user to save locally. For MACOS, you'll want to save as ~/.aws/credentials

> Note: This extension currently has no options.

## Alternative Ways

- Open Developer Tools, click the "Network" tab, click the "Disable cache" checkbox, then refresh the page. Just be sure to uncheck once you're done testing.
  OR
- Open Developer Tools, Click the "Application" tab, click "Clear site data", then refresh the page.

## Credits

> Icons generated at [https://favicon.io/](https://favicon.io/)
