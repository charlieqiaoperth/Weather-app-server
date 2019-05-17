const { getName} = require('country-list');
class City {
    constructor(rawData) {
        this.name = rawData.name;
        this.coord = rawData.coord;
        this.country = getName(rawData.country);
        this.polulation = rawData.polulation;
    }
}

module.exports =City;