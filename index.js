'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var INITIAL_STATE = 1;
var FAIL_STATE = 0;
/**
 * A StateMachine represents a deterministic finite automaton.
 * It can perform matches over a sequence of values, similar to a regular expression.
 * zilahir - modification
 */

var StateMachine = /*#__PURE__*/function () {
  function StateMachine(dfa) {
    _classCallCheck(this, StateMachine);

    this.stateTable = dfa.stateTable;
    this.accepting = dfa.accepting;
    this.tags = dfa.tags;
  }
  /**
   * Returns an iterable object that yields pattern matches over the input sequence.
   * Matches are of the form [startIndex, endIndex, tags].
   */


  _createClass(StateMachine, [{
    key: "match",
    value: function match(str) {
      var self = this;
      return _defineProperty({}, Symbol.iterator, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var state, startRun, lastAccepting, lastState, p, c;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = INITIAL_STATE;
                startRun = null;
                lastAccepting = null;
                lastState = null;
                p = 0;

              case 5:
                if (!(p < str.length)) {
                  _context.next = 21;
                  break;
                }

                c = str[p];
                lastState = state;
                state = self.stateTable[state][c];

                if (!(state === FAIL_STATE)) {
                  _context.next = 15;
                  break;
                }

                if (!(startRun != null && lastAccepting != null && lastAccepting >= startRun)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return [startRun, lastAccepting, self.tags[lastState]];

              case 13:
                // reset the state as if we started over from the initial state
                state = self.stateTable[INITIAL_STATE][c];
                startRun = null;

              case 15:
                // start a run if not in the failure state
                if (state !== FAIL_STATE && startRun == null) {
                  startRun = p;
                } // if accepting, mark the potential match end


                if (self.accepting[state]) {
                  lastAccepting = p;
                } // reset the state to the initial state if we get into the failure state


                if (state === FAIL_STATE) {
                  state = INITIAL_STATE;
                }

              case 18:
                p++;
                _context.next = 5;
                break;

              case 21:
                if (!(startRun != null && lastAccepting != null && lastAccepting >= startRun)) {
                  _context.next = 24;
                  break;
                }

                _context.next = 24;
                return [startRun, lastAccepting, self.tags[state]];

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
    /**
     * For each match over the input sequence, action functions matching
     * the tag definitions in the input pattern are called with the startIndex,
     * endIndex, and sub-match sequence.
     */

  }, {
    key: "apply",
    value: function apply(str, actions) {
      var _iterator = _createForOfIteratorHelper(this.match(str)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 3),
              start = _step$value[0],
              end = _step$value[1],
              tags = _step$value[2];

          var _iterator2 = _createForOfIteratorHelper(tags),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var tag = _step2.value;

              if (typeof actions[tag] === 'function') {
                actions[tag](start, end, str.slice(start, end + 1));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return StateMachine;
}();

module.exports = StateMachine;
//# sourceMappingURL=index.js.map
