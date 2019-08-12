const directionsScraper = require('./directions-handler');
const drugSets = ['f9de7c2f-016b-4f40-8b5e-141ad194be97', 'c2302bfe-b367-4867-b803-29f066a42dc7'];

drugSets.forEach((id) => {
    directionsScraper(id);
});