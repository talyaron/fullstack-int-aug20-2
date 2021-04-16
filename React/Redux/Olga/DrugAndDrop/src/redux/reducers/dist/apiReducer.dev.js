"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  data: [],
  target: []
};

var getDataReducer = function getDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_NAMES':
      {
        console.log(state);
        return _objectSpread({}, state, {
          data: action.payload
        });
      }

    default:
      {
        return state;
      }

    case 'GET_ID':
      {
        var newState = _objectSpread({}, state);

        console.log(newState);
        var id = action.payload.id; // console.log(id)
        // let index = newState.data.findIndex(currentIndex => currentIndex.id==id)
        // newState.data.splice(index, 1)

        return _objectSpread({}, state, {
          id: action.payload.id
        });
      }

    case 'DELETE_ITEM':
      {
        var _newState = _objectSpread({}, state);

        if (_newState.id) {
          var _id = _newState.id;
          console.log(_id);

          var index = _newState.data.findIndex(function (currentIndex) {
            return currentIndex.id == _id;
          });

          _newState.data.splice(index, 1);
        }

        return _objectSpread({}, state, {
          data: _toConsumableArray(state.data)
        });
      }

    case 'ADD_TO_TARGET':
      {
        console.log(action.payload);
      }
      return _objectSpread({}, state, {
        target: [].concat(_toConsumableArray(state.target), [action.payload])
      });
  }
}; // const todoReducer = (state=initialState, action) =>{
//     switch (action.type){
//         case "ADD_TASK":{
//             console.log('add task', action.payload)
//             console.log(state)
//             return {...state, todo:[...state.todo, {id:action.payload.id, taskName:action.payload.taskName}]}
//         }
//         case "DELETE_TASK":{
//             const id = action.payload.id
//             console.log(id)
//            let newState = {...state}
//            console.log(newState.todo)
//            let index = newState.todo.findIndex(currentIndex => currentIndex.id==id)
//            console.log(index)
//            if (index > -1) {
//                newState.todo.splice(index, 1)
//            }
//             return {...state, todo:[...state.todo]}
//         }
//         default:{
//             return state
//         }
//     }
// }
// export default todoReducer


var _default = getDataReducer;
exports["default"] = _default;