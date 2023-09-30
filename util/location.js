const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = 'AIzaSyDjNSpE0be9P7aLNYFF8W35s2I9GRI7tTU';

async function getCoordsForAddress(address) {
  return {
    lat: 26.1064727,
    lng: 91.5834719
  };
  // const response = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}`
  // );

  // const data = response.data;

  // if (!data || data.status === 'ZERO_RESULTS') {
  //   const error = new HttpError(
  //     'Could not find location for the specified address.',
  //     422
  //   );
  //   throw error;
  // }

  // const coordinates = data.results[0].geometry.location;

  // return coordinates;
}

module.exports = getCoordsForAddress;
