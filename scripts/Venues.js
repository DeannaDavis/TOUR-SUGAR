import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

const bookings = getBookings()
const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

const venueBookings = (venues) => {
    let fulfilledBookings = 0;

    for (const booking of bookings) {
        if (booking.venueId === venues.id) {
            fulfilledBookings++;
        }
    }

    return fulfilledBookings;
};


document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [,venueId] = itemClicked.id.split("--")


        for ( const venue of venues) {
            if (parseInt(venueId) === venue.id) {
                const bookingCount = venueBookings(venue);

                window.alert(`${venue.name} is hosting ${bookingCount} band.`)
        }
     }
    }
 }
)
