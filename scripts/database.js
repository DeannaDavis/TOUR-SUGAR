const database = {
    venues: [
      {
        id: 1,
        name: "The Roxy Theatre",
        address: "9009 Sunset Blvd, West Hollywood, CA 90069",
        sqFootage: 1200,
        maxOccupancy: 200
      },
      {
        id: 2,
        name: "Red Rocks Amphitheatre",
        address: "18300 W Alameda Pkwy, Morrison, CO 80465",
        sqFootage: 15000,
        maxOccupancy: 9000
      },
      {
        id: 3,
        name: "Madison Square Garden",
        address: "4 Pennsylvania Plaza, New York, NY 10001",
        sqFootage: 20000,
        maxOccupancy: 20000
      },
      {
        id: 4,
        name: "The Fillmore",
        address: "1805 Geary Blvd, San Francisco, CA 94115",
        sqFootage: 2500,
        maxOccupancy: 1200
      },
      {
        id: 5,
        name: "Royal Albert Hall",
        address: "Kensington Gore, South Kensington, London SW7 2AP, United Kingdom",
        sqFootage: 5000,
        maxOccupancy: 5500
      },
      {
        id: 6,
        name: "Budokan Hall",
        address: "1-3-28 Nishikicho, Kudanminami, Chiyoda City, Tokyo 102-8321, Japan",
        sqFootage: 3000,
        maxOccupancy: 5000
      },
      {
        id: 7,
        name: "Red Bull Music Academy",
        address: "Revaler Str. 99, 10245 Berlin, Germany",
        sqFootage: 1500,
        maxOccupancy: 400
      },
      {
        id: 8,
        name: "Wembley Stadium",
        address: "Wembley, London HA9 0WS, United Kingdom",
        sqFootage: 90000,
        maxOccupancy: 90000
      },
      {
        id: 9,
        name: "The Sydney Opera House",
        address: "Bennelong Point, Sydney NSW 2000, Australia",
        sqFootage: 50000,
        maxOccupancy: 5500
      },
      {
        id: 10,
        name: "Machu Picchu",
        address: "Unnamed Road, Aguas Calientes, Peru",
        sqFootage: 1000,
        maxOccupancy: 100
      }
    ],
        bands: [
          {
            id: 1,
            name: "The Beatles",
            numMemb: 4,
            genre: "Rock",
            yearFormed: 1960
          },
          {
            id: 2,
            name: "Led Zeppelin",
            numMemb: 4,
            genre: "Rock",
            yearFormed: 1968
          },
          {
            id: 3,
            name: "Nirvana",
            numMemb: 3,
            genre: "Grunge",
            yearFormed: 1987
          },
          {
            id: 4,
            name: "Pink Floyd",
            numMemb: 4,
            genre: "Progressive Rock",
            yearFormed: 1965
          },
          {
            id: 5,
            name: "Queen",
            numMemb: 4,
            genre: "Rock",
            yearFormed: 1970
          },
          {
            id: 6,
            name: "The Rolling Stones",
            numMemb: 4,
            genre: "Rock",
            yearFormed: 1962
          },
          {
            id: 7,
            name: "AC/DC",
            numMemb: 5,
            genre: "Rock",
            yearFormed: 1973
          },
          {
            id: 8,
            name: "Metallica",
            numMemb: 4,
            genre: "Heavy Metal",
            yearFormed: 1981
          },
          {
            id: 9,
            name: "The Doors",
            numMemb: 4,
            genre: "Rock",
            yearFormed: 1965
          },
          {
            id: 10,
            name: "Radiohead",
            numMemb: 5,
            genre: "Alternative Rock",
            yearFormed: 1985
          }
        ],  
        bookings: [
            {
              id: 1,
              bandId: 1,
              venueId: 1,
              date: "2023-07-15"
            },
            {
              id: 2,
              bandId: 2,
              venueId: 2,
              date: "2023-07-16"
            },
            {
              id: 3,
              bandId: 3,
              venueId: 3,
              date: "2023-07-17"
            },
            {
              id: 4,
              bandId: 4,
              venueId: 4,
              date: "2023-07-18"
            },
            {
              id: 5,
              bandId: 5,
              venueId: 5,
              date: "2023-07-19"
            },
            {
              id: 6,
              bandId: 6,
              venueId: 6,
              date: "2023-07-20"
            },
            {
              id: 7,
              bandId: 7,
              venueId: 7,
              date: "2023-07-21"
            },
            {
              id: 8,
              bandId: 8,
              venueId: 8,
              date: "2023-07-22"
            },
            {
              id: 9,
              bandId: 9,
              venueId: 9,
              date: "2023-07-23"
            },
            {
              id: 10,
              bandId: 10,
              venueId: 10,
              date: "2023-07-24"
            },
            {
                id: 1,
                bandId: 1,
                venueId: 10,
                date: "2023-07-15"
              },
              {
                id: 2,
                bandId: 2,
                venueId: 2,
                date: "2023-07-16"
              },
              {
                id: 3,
                bandId: 3,
                venueId: 3,
                date: "2023-07-17"
              },
              {
                id: 4,
                bandId: 4,
                venueId: 4,
                date: "2023-07-18"
              },
              {
                id: 5,
                bandId: 5,
                venueId: 5,
                date: "2023-07-19"
              }
            ]
            
  }

export const getBands = () => {
  return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
  }

  