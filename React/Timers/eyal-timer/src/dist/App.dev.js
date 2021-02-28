"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Header = _interopRequireDefault(require("./components/Header"));

var _Tasks = _interopRequireDefault(require("./components/Tasks"));

var _Clock = _interopRequireDefault(require("./components/Clock"));

var _AddTask = _interopRequireDefault(require("./components/AddTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _useState = (0, _react.useState)([{
    id: 1,
    text: 'Doctor Appointment',
    time: '12:45',
    remainder: true,
    timesUp: false
  }, {
    id: 2,
    text: 'Meeting at School',
    time: '10:20',
    remainder: true,
    timesUp: false
  }, {
    id: 3,
    text: 'Food Shopping',
    time: '7:39',
    remainder: false,
    timesUp: false
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1]; //Add Task


  var addTask = function addTask(task) {
    var id = Math.floor(Math.random() * 100000) + 1;

    var newTask = _objectSpread({
      id: id
    }, task);

    setTasks([].concat(_toConsumableArray(tasks), [newTask]));
  }; //Delete tasks


  var deleteTask = function deleteTask(id) {
    setTasks(tasks.filter(function (task) {
      return task.id !== id;
    }));
  }; //Toggle remainder


  var toggleRemainder = function toggleRemainder(id) {
    console.log('Toggle Remainder', id);
    setTasks(tasks.map(function (task) {
      return task.id === id ? _objectSpread({}, task, {
        remainder: !task.remainder
      }) : task;
    }));
  };
}

var _default = App;
exports["default"] = _default;