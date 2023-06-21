import { getBands, getVenues, getBookings } from "./database.js"

// Get copy of state for use in this module
const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


const findBands = (booking, allBands) => {
    let bookingBands = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBands = band.name
        }
    }

    return bookingBands
}

const findVenue = (booking, allVenues) => {
    let bookingVenues = null;

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenues = venue.name;
        }
    }
    return bookingVenues;
}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBands(booking, bands)

        html += `<li id="booking--${booking.id}">${band} played at ${venue} on ${new Date(booking.date).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener("click", async (clickEvent) => {
    const itemClicked = clickEvent.target;
  
    if (itemClicked.id.startsWith("booking")) {
      const [, bookingId] = itemClicked.id.split("--");
  
      // Filter the bookings array to find matching bookings based on the ID
      const matchingBookings = bookings.filter(
        (booking) => booking.id === parseInt(bookingId)
      );
  
      // Create an array of promises for retrieving band information
      const bandPromises = matchingBookings.map((booking) => {
        const bandId = booking.bandId;
  
        // Find the band in the bands array that matches the bandId
        const matchingBand = bands.find((band) => band.id === bandId);
  
        if (matchingBand) {
          // If a matching band is found, resolve the promise with the band information
          const bandInfo = `BAND NAME: ${matchingBand.name}, BAND MEMBERS: ${matchingBand.numMemb}, GENRE: ${matchingBand.genre}, YEAR FORMED: ${matchingBand.yearFormed}`;
          return Promise.resolve(bandInfo);
        }
  
        // If no matching band is found, reject the promise with an error message
        return Promise.reject("Band not found");
      });
  
      try {
        // Wait for all the promises to resolve or reject using Promise.all()
        const bandInfoArray = await Promise.all(bandPromises);
  
        // Display the band information in separate pop-up windows using window.alert()
        for (const bandInfo of bandInfoArray) {
          window.alert(bandInfo);
        }
      } catch (error) {
        // Handle any errors that occurred during the process
        console.error(error);
      }
    }
  });
  
  
  

