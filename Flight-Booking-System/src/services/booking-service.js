const axios = require("axios");

const { BookingRepository } = require("../repositories");
const db = require("../models");
const ServerConfig = require("../config/server-config");

async function createBooking(data) {
  try {
    const result = db.sequelize.transaction(async function bookingImpl(t) {
      //Impl -> implementation
      const flight = await axios.get(
        `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`
      );
      return true;
    });
  } catch (error) {
    console.log(error);

    throw error;
  }
}

module.exports = {
  createBooking,
};
