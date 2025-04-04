const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services");
const ErrorResponse = require("../utils/common/error-response");
const SuccessResponse = require("../utils/common/success-response");

async function createBooking(req, res) {
  try {
    const response = await BookingService.createBooking({
      flightId: req.body.flightId,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createBooking,
};
