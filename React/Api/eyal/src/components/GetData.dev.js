"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var GetData = function GetData(_ref) {
  var market = _ref.market,
      symbol = _ref.symbol,
      theFunction = _ref.theFunction,
      setMarcetData = _ref.setMarcetData;
  (0, _react.useEffect)(function _callee() {
    var date;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(getMarcetData());

          case 2:
            date = _context.sent;
            setMarcetData(date.Json);
            console.log();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });

  var getMarcetData = function getMarcetData() {
    return regeneratorRuntime.async(function getMarcetData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch("https://alpha-vantage.p.rapidapi.com/query?".concat(market, "=CNY&").concat(symbol, "=BTC&function=").concat(theFunction), {
              "method": "GET",
              "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_DEV_MODE,
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
              }
            }).then(function (response) {
              return response;
            })["catch"](function (err) {
              console.error(err);
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  return h1;
};

var _default = GetData;
exports["default"] = _default;