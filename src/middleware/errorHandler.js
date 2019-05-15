const responseFormatter = require('../utils/responseFormatter');

module.exports = (error, req, res, next) => {
    if (error.response) {
        const data = error.response.data;
        if (data.cod === '429') {
            // logger.warn(data.message);//需要新增logger功能
            console.log(data.message);
            return responseFormatter (
                res, 
                503, 
                'The server is busy at the moment, please try again later',
                 null);
        }
        return responseFormatter(
            res,
            Number.parseInt(data.cod),
            data.message,
            null
        );
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // logger.warn(error.request);需要新增logger
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    //   console.log(error.config);
    // logger.error(error.stack);需要新增logger功能
    return responseFormatter(
        res,
        500,
        'Something failed, we are investigating!',
        null
    );
};