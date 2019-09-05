"use strict";
exports.__esModule = true;
var formattedDayDate = function (date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
};
function price(startDate, endDate) {
    var startTime = startDate.getTime();
    var endTime = endDate.getTime();
    var data = [];
    for (var days = 0; startTime + days * 86400000 < endTime; days++) {
        var date = new Date(startTime + days * 86400000);
        data = data.concat(require("./data/" + formattedDayDate(date) + ".json"));
    }
    return data;
}
exports.price = price;
exports["default"] = {
    price: price
};
