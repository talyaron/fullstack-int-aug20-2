"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteEmployee = exports.addEmployee = void 0;

var _actionTypes = require("../actionTypes");

var addEmployee = function addEmployee(employeeName) {
  return {
    type: _actionTypes.ADD_EMPLOYEE,
    payload: {
      employeeName: employeeName,
      id: 'id' + new Date().getTime()
    }
  };
};

exports.addEmployee = addEmployee;

var DeleteEmployee = function DeleteEmployee(id) {
  return {
    type: _actionTypes.DELETE_EMPLOYEE,
    payload: id
  };
};
/* type: DELETE_EMPLOYEE,
payload: {
    employeeName,
    id:'id' + (new Date()).getTime()
} */

/* export const addEmployee = employeeName => ({
    type: ADD_EMPLOYEE,
    payload: {
        employeeName,
        id:'id' + (new Date()).getTime()
    }
}) */


exports.DeleteEmployee = DeleteEmployee;