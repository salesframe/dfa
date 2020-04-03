'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
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

/**
 * Returns a new set representing the union of a and b.
 */
function union(a, b) {
  var s = new Set(a);
  addAll(s, b);
  return s;
}
/**
 * Adds all items from the set b to a.
 */

function addAll(a, b) {
  var _iterator = _createForOfIteratorHelper(b),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var x = _step.value;
      a.add(x);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * Returns whether two sets are equal
 */

function equal(a, b) {
  if (a === b) return true;
  if (a.size !== b.size) return false;

  var _iterator2 = _createForOfIteratorHelper(a),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var x = _step2.value;

      if (!b.has(x)) {
        return false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
}

/**
 * Base AST node
 */

var Node = /*#__PURE__*/function () {
  function Node() {
    _classCallCheck(this, Node);

    Object.defineProperty(this, 'followpos', {
      value: new Set()
    });
  }

  _createClass(Node, [{
    key: "calcFollowpos",
    value: function calcFollowpos() {
      for (var key in this) {
        if (this[key] instanceof Node) {
          this[key].calcFollowpos();
        }
      }
    }
  }]);

  return Node;
}();
/**
 * Represents a variable reference
 */

var Variable = /*#__PURE__*/function (_Node) {
  _inherits(Variable, _Node);

  var _super = _createSuper(Variable);

  function Variable(name) {
    var _this;

    _classCallCheck(this, Variable);

    _this = _super.call(this);
    _this.name = name;
    return _this;
  }

  _createClass(Variable, [{
    key: "copy",
    value: function copy() {
      return new Variable(this.name);
    }
  }]);

  return Variable;
}(Node);
/**
 * Represents a comment
 */

var Comment = /*#__PURE__*/function (_Node2) {
  _inherits(Comment, _Node2);

  var _super2 = _createSuper(Comment);

  function Comment(value) {
    var _this2;

    _classCallCheck(this, Comment);

    _this2 = _super2.call(this);
    _this2.value = value;
    return _this2;
  }

  return Comment;
}(Node);
/**
 * Represents an assignment statement.
 * e.g. `variable = expression;`
 */

var Assignment = /*#__PURE__*/function (_Node3) {
  _inherits(Assignment, _Node3);

  var _super3 = _createSuper(Assignment);

  function Assignment(variable, expression) {
    var _this3;

    _classCallCheck(this, Assignment);

    _this3 = _super3.call(this);
    _this3.variable = variable;
    _this3.expression = expression;
    return _this3;
  }

  return Assignment;
}(Node);
/**
 * Represents an alternation.
 * e.g. `a | b`
 */

var Alternation = /*#__PURE__*/function (_Node4) {
  _inherits(Alternation, _Node4);

  var _super4 = _createSuper(Alternation);

  function Alternation(a, b) {
    var _this4;

    _classCallCheck(this, Alternation);

    _this4 = _super4.call(this);
    _this4.a = a;
    _this4.b = b;
    return _this4;
  }

  _createClass(Alternation, [{
    key: "copy",
    value: function copy() {
      return new Alternation(this.a.copy(), this.b.copy());
    }
  }, {
    key: "nullable",
    get: function get() {
      return this.a.nullable || this.b.nullable;
    }
  }, {
    key: "firstpos",
    get: function get() {
      return union(this.a.firstpos, this.b.firstpos);
    }
  }, {
    key: "lastpos",
    get: function get() {
      return union(this.a.lastpos, this.b.lastpos);
    }
  }]);

  return Alternation;
}(Node);
/**
 * Represents a concatenation, or chain.
 * e.g. `a b c`
 */

var Concatenation = /*#__PURE__*/function (_Node5) {
  _inherits(Concatenation, _Node5);

  var _super5 = _createSuper(Concatenation);

  function Concatenation(a, b) {
    var _this5;

    _classCallCheck(this, Concatenation);

    _this5 = _super5.call(this);
    _this5.a = a;
    _this5.b = b;
    return _this5;
  }

  _createClass(Concatenation, [{
    key: "calcFollowpos",
    value: function calcFollowpos() {
      _get(_getPrototypeOf(Concatenation.prototype), "calcFollowpos", this).call(this);

      var _iterator = _createForOfIteratorHelper(this.a.lastpos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          addAll(n.followpos, this.b.firstpos);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Concatenation(this.a.copy(), this.b.copy());
    }
  }, {
    key: "nullable",
    get: function get() {
      return this.a.nullable && this.b.nullable;
    }
  }, {
    key: "firstpos",
    get: function get() {
      var s = this.a.firstpos;

      if (this.a.nullable) {
        s = union(s, this.b.firstpos);
      }

      return s;
    }
  }, {
    key: "lastpos",
    get: function get() {
      var s = this.b.lastpos;

      if (this.b.nullable) {
        s = union(s, this.a.lastpos);
      }

      return s;
    }
  }]);

  return Concatenation;
}(Node);
/**
 * Represents a repetition.
 * e.g. `a+`, `b*`, or `c?`
 */

var Repeat = /*#__PURE__*/function (_Node6) {
  _inherits(Repeat, _Node6);

  var _super6 = _createSuper(Repeat);

  function Repeat(expression, op) {
    var _this6;

    _classCallCheck(this, Repeat);

    _this6 = _super6.call(this);
    _this6.expression = expression;
    _this6.op = op;
    return _this6;
  }

  _createClass(Repeat, [{
    key: "calcFollowpos",
    value: function calcFollowpos() {
      _get(_getPrototypeOf(Repeat.prototype), "calcFollowpos", this).call(this);

      if (this.op === '*' || this.op === '+') {
        var _iterator2 = _createForOfIteratorHelper(this.lastpos),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var n = _step2.value;
            addAll(n.followpos, this.firstpos);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Repeat(this.expression.copy(), this.op);
    }
  }, {
    key: "nullable",
    get: function get() {
      return this.op === '*' || this.op === '?';
    }
  }, {
    key: "firstpos",
    get: function get() {
      return this.expression.firstpos;
    }
  }, {
    key: "lastpos",
    get: function get() {
      return this.expression.lastpos;
    }
  }]);

  return Repeat;
}(Node);
function buildRepetition(expression) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  if (min < 0 || min > max) {
    throw new Error("Invalid repetition range: ".concat(min, " ").concat(max));
  }

  var res = null;

  for (var i = 0; i < min; i++) {
    res = concat(res, expression.copy());
  }

  if (max === Infinity) {
    res = concat(res, new Repeat(expression.copy(), '*'));
  } else {
    for (var _i = min; _i < max; _i++) {
      res = concat(res, new Repeat(expression.copy(), '?'));
    }
  }

  return res;
}

function concat(a, b) {
  if (!a) {
    return b;
  }

  return new Concatenation(a, b);
}
/**
 * Base class for leaf nodes
 */


var Leaf = /*#__PURE__*/function (_Node7) {
  _inherits(Leaf, _Node7);

  var _super7 = _createSuper(Leaf);

  function Leaf() {
    _classCallCheck(this, Leaf);

    return _super7.apply(this, arguments);
  }

  _createClass(Leaf, [{
    key: "nullable",
    get: function get() {
      return false;
    }
  }, {
    key: "firstpos",
    get: function get() {
      return new Set([this]);
    }
  }, {
    key: "lastpos",
    get: function get() {
      return new Set([this]);
    }
  }]);

  return Leaf;
}(Node);
/**
 * Represents a literal value, e.g. a number
 */


var Literal = /*#__PURE__*/function (_Leaf) {
  _inherits(Literal, _Leaf);

  var _super8 = _createSuper(Literal);

  function Literal(value) {
    var _this7;

    _classCallCheck(this, Literal);

    _this7 = _super8.call(this);
    _this7.value = value;
    return _this7;
  }

  _createClass(Literal, [{
    key: "copy",
    value: function copy() {
      return new Literal(this.value);
    }
  }]);

  return Literal;
}(Leaf);
/**
 * Marks the end of an expression
 */

var EndMarker = /*#__PURE__*/function (_Leaf2) {
  _inherits(EndMarker, _Leaf2);

  var _super9 = _createSuper(EndMarker);

  function EndMarker() {
    _classCallCheck(this, EndMarker);

    return _super9.apply(this, arguments);
  }

  return EndMarker;
}(Leaf);
/**
 * Represents a tag
 * e.g. `a:(a b)`
 */

var Tag = /*#__PURE__*/function (_Leaf3) {
  _inherits(Tag, _Leaf3);

  var _super10 = _createSuper(Tag);

  function Tag(name) {
    var _this8;

    _classCallCheck(this, Tag);

    _this8 = _super10.call(this);
    _this8.name = name;
    return _this8;
  }

  _createClass(Tag, [{
    key: "copy",
    value: function copy() {
      return new Tag(this.name);
    }
  }, {
    key: "nullable",
    get: function get() {
      return true;
    }
  }]);

  return Tag;
}(Leaf);

var nodes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Node: Node,
  Variable: Variable,
  Comment: Comment,
  Assignment: Assignment,
  Alternation: Alternation,
  Concatenation: Concatenation,
  Repeat: Repeat,
  buildRepetition: buildRepetition,
  Literal: Literal,
  EndMarker: EndMarker,
  Tag: Tag
});

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any(expectation) {
      return "any character";
    },
    end: function end(expectation) {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = {
    rules: peg$parserules
  },
      peg$startRuleFunction = peg$parserules,
      peg$c0 = function peg$c0(s) {
    return s;
  },
      peg$c1 = "#",
      peg$c2 = peg$literalExpectation("#", false),
      peg$c3 = /^[^\r\n]/,
      peg$c4 = peg$classExpectation(["\r", "\n"], true, false),
      peg$c5 = /^[\r\n]/,
      peg$c6 = peg$classExpectation(["\r", "\n"], false, false),
      peg$c7 = function peg$c7(v) {
    return new n.Comment(v.join(''));
  },
      peg$c8 = "=",
      peg$c9 = peg$literalExpectation("=", false),
      peg$c10 = ";",
      peg$c11 = peg$literalExpectation(";", false),
      peg$c12 = function peg$c12(v, e) {
    return new n.Assignment(v, e);
  },
      peg$c13 = function peg$c13(v) {
    return new n.Variable(v);
  },
      peg$c14 = "|",
      peg$c15 = peg$literalExpectation("|", false),
      peg$c16 = function peg$c16(a, b) {
    return new n.Alternation(a, b);
  },
      peg$c17 = function peg$c17(a, b) {
    return new n.Concatenation(a, b);
  },
      peg$c18 = ":",
      peg$c19 = peg$literalExpectation(":", false),
      peg$c20 = function peg$c20(t, e) {
    return new n.Concatenation(e, new n.Tag(t));
  },
      peg$c21 = "*",
      peg$c22 = peg$literalExpectation("*", false),
      peg$c23 = function peg$c23(t) {
    return new n.Repeat(t, '*');
  },
      peg$c24 = "?",
      peg$c25 = peg$literalExpectation("?", false),
      peg$c26 = function peg$c26(t) {
    return new n.Repeat(t, '?');
  },
      peg$c27 = "+",
      peg$c28 = peg$literalExpectation("+", false),
      peg$c29 = function peg$c29(t) {
    return new n.Repeat(t, '+');
  },
      peg$c30 = "{",
      peg$c31 = peg$literalExpectation("{", false),
      peg$c32 = "}",
      peg$c33 = peg$literalExpectation("}", false),
      peg$c34 = function peg$c34(t, m) {
    return n.buildRepetition(t, m, m);
  },
      peg$c35 = ",",
      peg$c36 = peg$literalExpectation(",", false),
      peg$c37 = function peg$c37(t, min) {
    return n.buildRepetition(t, min, Infinity);
  },
      peg$c38 = function peg$c38(t, max) {
    return n.buildRepetition(t, 0, max);
  },
      peg$c39 = function peg$c39(t, min, max) {
    return n.buildRepetition(t, min, max);
  },
      peg$c40 = function peg$c40(x) {
    return new n.Literal(x);
  },
      peg$c41 = "(",
      peg$c42 = peg$literalExpectation("(", false),
      peg$c43 = ")",
      peg$c44 = peg$literalExpectation(")", false),
      peg$c45 = function peg$c45(e) {
    return e;
  },
      peg$c47 = function peg$c47(a, b) {
    return a + b.join('');
  },
      peg$c48 = "_",
      peg$c49 = peg$literalExpectation("_", false),
      peg$c50 = /^[a-zA-Z]/,
      peg$c51 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
      peg$c52 = /^[0-9]/,
      peg$c53 = peg$classExpectation([["0", "9"]], false, false),
      peg$c54 = function peg$c54(num) {
    return parseInt(num.join(''));
  },
      peg$c55 = /^[ \t\r\n]/,
      peg$c56 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false),
      peg$currPos = 0,
      peg$posDetailsCache = [{
    line: 1,
    column: 1
  }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parserules() {
    var s0, s1;
    s0 = [];
    s1 = peg$parsestatement();

    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsestatement();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestatement() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parsestatement_type();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s1 = peg$c0(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestatement_type() {
    var s0;
    s0 = peg$parseassignment();

    if (s0 === peg$FAILED) {
      s0 = peg$parsecomment();
    }

    return s0;
  }

  function peg$parsecomment() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      {
        peg$fail(peg$c2);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = [];

      if (peg$c3.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;

        {
          peg$fail(peg$c4);
        }
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);

        if (peg$c3.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          {
            peg$fail(peg$c4);
          }
        }
      }

      if (s2 !== peg$FAILED) {
        if (peg$c5.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          {
            peg$fail(peg$c6);
          }
        }

        if (s3 !== peg$FAILED) {
          s1 = peg$c7(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseassignment() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parsevariable();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c8;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          {
            peg$fail(peg$c9);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            s5 = peg$parsealternation();

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 59) {
                  s7 = peg$c10;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;

                  {
                    peg$fail(peg$c11);
                  }
                }

                if (s7 !== peg$FAILED) {
                  s1 = peg$c12(s1, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevariable() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parsename();

    if (s1 !== peg$FAILED) {
      s1 = peg$c13(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsealternation() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseconcatenation();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 124) {
          s3 = peg$c14;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          {
            peg$fail(peg$c15);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            s5 = peg$parsealternation();

            if (s5 !== peg$FAILED) {
              s1 = peg$c16(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$parseconcatenation();
    }

    return s0;
  }

  function peg$parseconcatenation() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parserepeat();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseconcatenation();

        if (s3 !== peg$FAILED) {
          s1 = peg$c17(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$parserepeat();
    }

    return s0;
  }

  function peg$parserepeat() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parsename();

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c18;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        {
          peg$fail(peg$c19);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parserepeat();

        if (s3 !== peg$FAILED) {
          s1 = peg$c20(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseterm();

      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s2 = peg$c21;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          {
            peg$fail(peg$c22);
          }
        }

        if (s2 !== peg$FAILED) {
          s1 = peg$c23(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseterm();

        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 63) {
            s2 = peg$c24;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            {
              peg$fail(peg$c25);
            }
          }

          if (s2 !== peg$FAILED) {
            s1 = peg$c26(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseterm();

          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 43) {
              s2 = peg$c27;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;

              {
                peg$fail(peg$c28);
              }
            }

            if (s2 !== peg$FAILED) {
              s1 = peg$c29(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseterm();

            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s2 = peg$c30;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;

                {
                  peg$fail(peg$c31);
                }
              }

              if (s2 !== peg$FAILED) {
                s3 = peg$parsenumber();

                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s4 = peg$c32;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;

                    {
                      peg$fail(peg$c33);
                    }
                  }

                  if (s4 !== peg$FAILED) {
                    s1 = peg$c34(s1, s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseterm();

              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 123) {
                  s2 = peg$c30;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;

                  {
                    peg$fail(peg$c31);
                  }
                }

                if (s2 !== peg$FAILED) {
                  s3 = peg$parsenumber();

                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s4 = peg$c35;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;

                      {
                        peg$fail(peg$c36);
                      }
                    }

                    if (s4 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s5 = peg$c32;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;

                        {
                          peg$fail(peg$c33);
                        }
                      }

                      if (s5 !== peg$FAILED) {
                        s1 = peg$c37(s1, s3);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseterm();

                if (s1 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 123) {
                    s2 = peg$c30;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;

                    {
                      peg$fail(peg$c31);
                    }
                  }

                  if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s3 = peg$c35;
                      peg$currPos++;
                    } else {
                      s3 = peg$FAILED;

                      {
                        peg$fail(peg$c36);
                      }
                    }

                    if (s3 !== peg$FAILED) {
                      s4 = peg$parsenumber();

                      if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s5 = peg$c32;
                          peg$currPos++;
                        } else {
                          s5 = peg$FAILED;

                          {
                            peg$fail(peg$c33);
                          }
                        }

                        if (s5 !== peg$FAILED) {
                          s1 = peg$c38(s1, s4);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }

                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseterm();

                  if (s1 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 123) {
                      s2 = peg$c30;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;

                      {
                        peg$fail(peg$c31);
                      }
                    }

                    if (s2 !== peg$FAILED) {
                      s3 = peg$parsenumber();

                      if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                          s4 = peg$c35;
                          peg$currPos++;
                        } else {
                          s4 = peg$FAILED;

                          {
                            peg$fail(peg$c36);
                          }
                        }

                        if (s4 !== peg$FAILED) {
                          s5 = peg$parsenumber();

                          if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s6 = peg$c32;
                              peg$currPos++;
                            } else {
                              s6 = peg$FAILED;

                              {
                                peg$fail(peg$c33);
                              }
                            }

                            if (s6 !== peg$FAILED) {
                              s1 = peg$c39(s1, s3, s5);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }

                  if (s0 === peg$FAILED) {
                    s0 = peg$parseterm();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseterm() {
    var s0, s1, s2, s3;
    s0 = peg$parsevariable();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsenumber();

      if (s1 !== peg$FAILED) {
        s1 = peg$c40(s1);
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c41;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          {
            peg$fail(peg$c42);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsealternation();

          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c43;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              {
                peg$fail(peg$c44);
              }
            }

            if (s3 !== peg$FAILED) {
              s1 = peg$c45(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsename() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parsename_start_char();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsename_char();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsename_char();
      }

      if (s2 !== peg$FAILED) {
        s1 = peg$c47(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsename_start_char() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 95) {
      s0 = peg$c48;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      {
        peg$fail(peg$c49);
      }
    }

    if (s0 === peg$FAILED) {
      if (peg$c50.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        {
          peg$fail(peg$c51);
        }
      }
    }

    return s0;
  }

  function peg$parsename_char() {
    var s0;
    s0 = peg$parsename_start_char();

    if (s0 === peg$FAILED) {
      if (peg$c52.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        {
          peg$fail(peg$c53);
        }
      }
    }

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c52.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      {
        peg$fail(peg$c53);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c52.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          {
            peg$fail(peg$c53);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s1 = peg$c54(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parse_() {
    var s0, s1;
    s0 = [];

    if (peg$c55.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      {
        peg$fail(peg$c56);
      }
    }

    while (s1 !== peg$FAILED) {
      s0.push(s1);

      if (peg$c55.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        {
          peg$fail(peg$c56);
        }
      }
    }

    return s0;
  }

  var n = nodes;
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

var grammar = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/**
 * Processes a list of statements into a symbol table
 */

var SymbolTable = /*#__PURE__*/function () {
  function SymbolTable(statements) {
    var externalSymbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SymbolTable);

    this.variables = {};
    this.symbols = {};
    this.main = null;
    this.size = 0;
    this.addExternalSymbols(externalSymbols);
    this.process(statements);
  }

  _createClass(SymbolTable, [{
    key: "addExternalSymbols",
    value: function addExternalSymbols(externalSymbols) {
      for (var key in externalSymbols) {
        this.variables[key] = new Literal(externalSymbols[key]);
        this.symbols[key] = externalSymbols[key];
        this.size++;
      }
    }
  }, {
    key: "process",
    value: function process(statements) {
      var _iterator = _createForOfIteratorHelper(statements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var statement = _step.value;

          if (statement instanceof Assignment) {
            this.variables[statement.variable.name] = this.processExpression(statement.expression);

            if (statement.expression instanceof Literal) {
              this.symbols[statement.variable.name] = statement.expression.value;
              this.size++;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.main = this.variables.main;

      if (!this.main) {
        throw new Error('No main variable declaration found');
      }
    }
  }, {
    key: "processExpression",
    value: function processExpression(expr) {
      // Process children
      for (var key in expr) {
        if (expr[key] instanceof Node) {
          expr[key] = this.processExpression(expr[key]);
        }
      } // Replace variable references with their values


      if (expr instanceof Variable) {
        var value = this.variables[expr.name];
        if (value == null) throw new Error("Undeclared indentifier ".concat(expr.name));
        expr = this.processExpression(value.copy());
      }

      return expr;
    }
  }]);

  return SymbolTable;
}();

var END_MARKER = new EndMarker();
/**
 * This is an implementation of the direct regular expression to DFA algorithm described
 * in section 3.9.5 of "Compilers: Principles, Techniques, and Tools" by Aho,
 * Lam, Sethi, and Ullman. http://dragonbook.stanford.edu
 * There is a PDF of the book here:
 * http://www.informatik.uni-bremen.de/agbkb/lehre/ccfl/Material/ALSUdragonbook.pdf
 */

function buildDFA(root, numSymbols) {
  root = new Concatenation(root, END_MARKER);
  root.calcFollowpos();
  var failState = new State(new Set(), numSymbols);
  var initialState = new State(root.firstpos, numSymbols);
  var dstates = [failState, initialState]; // while there is an unmarked state S in dstates

  while (1) {
    var s = null;

    for (var j = 1; j < dstates.length; j++) {
      if (!dstates[j].marked) {
        s = dstates[j];
        break;
      }
    }

    if (s == null) {
      break;
    } // mark S


    s.marked = true; // for each input symbol a

    for (var a = 0; a < numSymbols; a++) {
      // let U be the union of followpos(p) for all
      //  p in S that correspond to a
      var u = new Set();

      var _iterator = _createForOfIteratorHelper(s.positions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;

          if (p instanceof Literal && p.value === a) {
            addAll(u, p.followpos);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (u.size === 0) {
        continue;
      } // if U is not in dstates


      var ux = -1;

      for (var i = 0; i < dstates.length; i++) {
        if (equal(u, dstates[i].positions)) {
          ux = i;
          break;
        }
      }

      if (ux === -1) {
        // Add U as an unmarked state to dstates
        dstates.push(new State(u, numSymbols));
        ux = dstates.length - 1;
      }

      s.transitions[a] = ux;
    }
  }

  return dstates;
}

var State = function State(positions, len) {
  _classCallCheck(this, State);

  this.positions = positions;
  this.transitions = new Uint16Array(len);
  this.accepting = positions.has(END_MARKER);
  this.marked = false;
  this.tags = new Set();

  var _iterator2 = _createForOfIteratorHelper(positions),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var pos = _step2.value;

      if (pos instanceof Tag) {
        this.tags.add(pos.name);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

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

function parse(string, externalSymbols) {
  var ast = grammar.parse(string);
  return new SymbolTable(ast, externalSymbols);
}
function build(symbolTable) {
  var states = buildDFA(symbolTable.main, symbolTable.size);
  return new StateMachine({
    stateTable: states.map(function (s) {
      return Array.from(s.transitions);
    }),
    accepting: states.map(function (s) {
      return s.accepting;
    }),
    tags: states.map(function (s) {
      return Array.from(s.tags);
    })
  });
}
function compile(string, externalSymbols) {
  return build(parse(string, externalSymbols));
}

exports.build = build;
exports.default = compile;
exports.parse = parse;
//# sourceMappingURL=compile.js.map
