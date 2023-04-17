# realtime-bus-tracker

This tracker will show a standard, red marker for each buses' near-realtime location on a Google Map on the MBTA Bus Route #1. It updates every 15 seconds from the MBTA API. Uses standard light styling and

## Make It Run

- The html page will need to be served by a simple HTTP server to work
- You will need to obtain and insert your own Google Maps API key in the script tag loading the Google Maps API in the html file
  -- May require some additional setup within Google Maps API key to add server to referrer's list

## Future enhancements

- Replace tag icons with vehicle icons
- Create interface to change mapped routes dynamically
- Add Tomorrow.ai integration for weather at bus locations
- Add additional metadata to the icons, perhaps bus id, latlong coords
- More error handling

MIT License see licensing page

![image](https://user-images.githubusercontent.com/11213335/232378407-6d909c4c-35bb-4837-b371-8258af06a9c0.png)
