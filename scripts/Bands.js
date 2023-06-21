import { getBands, getVenues, getBookings } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

export const Bands = () => {
  let html = "<ul>";

  for (const band of bands) {
    html += `<li id="band--${band.id}">${band.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith("band")) {
    const [, bandId] = itemClicked.id.split("--");

    for (const band of bands) {
      if (band.id === parseInt(bandId)) {
        
        for (const booking of bookings) {
          if (booking.bandId === parseInt(bandId)) {
            
            for (const venue of venues) {
              if (booking.venueId === parseInt(venue.id)) {
                window.alert(`${band.name} is playing at ${venue.name}.`);
              }
            }
          }
        }
      }
    }
  }
});

