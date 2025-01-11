# PM Unblur Chrome Extension

A Chrome extension that improves readability by removing blur/paywall elements and making content properly scrollable.

## Features

- Removes blur/paywall overlay elements
- Makes content properly scrollable
- Maintains content structure while improving accessibility
- Works automatically on page load
- Continues monitoring for dynamic content changes

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How it Works

The extension:
- Removes elements that typically create blur/paywall overlays
- Makes text content properly scrollable within its container
- Uses MutationObserver to handle dynamically loaded content
- Requires minimal permissions (only activeTab)

## Technical Details

- Built using Manifest V3
- Uses content scripts for DOM manipulation
- Implements MutationObserver for handling dynamic content
- No external dependencies

## Files

- `manifest.json`: Extension configuration and permissions
- `content.js`: Main script that handles DOM modifications
- `README.md`: Documentation

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use and modify as needed.
