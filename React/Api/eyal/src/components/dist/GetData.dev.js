"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var GetData = function GetData(_ref) {
  var AlphaSettings = _ref.AlphaSettings,
      MarketData = _ref.MarketData,
      setMarketData = _ref.setMarketData;

  var getMarketData = function getMarketData() {
    var data1;
    return regeneratorRuntime.async(function getMarketData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("https://alpha-vantage.p.rapidapi.com/query?market=".concat(AlphaSettings.market, "&symbol=").concat(AlphaSettings.symbol, "&function=").concat(AlphaSettings.theFunction), {
              method: 'GET',
              headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_DEV_MODE,
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
              }
            }).then(function (r) {
              return r.json();
            }).then(function (response) {
              data1 = response['Time Series (Digital Currency Daily)'];
            })["catch"](function (err) {
              console.error(err);
            }));

          case 2:
            return _context.abrupt("return", data1);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _react.useEffect)(function () {
    var callGetData = function callGetData() {
      var MarketData1;
      return regeneratorRuntime.async(function callGetData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(getMarketData());

            case 2:
              MarketData1 = _context2.sent;
              setMarketData(MarketData1);
              console.log(MarketData1);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    callGetData();
  }, []);
};

var _default = GetData;
exports["default"] = _default;