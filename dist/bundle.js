webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(39);

var _Header = __webpack_require__(128);

var _Header2 = _interopRequireDefault(_Header);

var _FormContainer = __webpack_require__(132);

var _FormContainer2 = _interopRequireDefault(_FormContainer);

var _ListContainer = __webpack_require__(133);

var _ListContainer2 = _interopRequireDefault(_ListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchTodos();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          todos = _props.todos,
          remainingTodos = _props.remainingTodos;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { todos: todos, remainingTodos: remainingTodos }),
        _react2.default.createElement(_FormContainer2.default, null),
        _react2.default.createElement(_ListContainer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$todoList = state.todoList,
      todos = _state$todoList.todos,
      completedCount = _state$todoList.completedCount;

  var remainingTodos = todos.length - completedCount;
  return { todos: todos, remainingTodos: remainingTodos };
};

App.propTypes = {
  fetchTodos: _propTypes2.default.func.isRequired,
  todos: _propTypes2.default.arrayOf(_propTypes2.default.object.isRequired).isRequired,
  remainingTodos: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchTodos: _actions.fetchTodos })(App);

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(29);

var _reduxThunk = __webpack_require__(63);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(135);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
var configureStore = function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, middleware);
};

exports.default = configureStore;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var todos = props.todos,
      remainingTodos = props.remainingTodos;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Todos'
    ),
    todos.length > 0 ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Double click todo to mark as complete'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Remaining todos: ',
        remainingTodos
      )
    ) : _react2.default.createElement(
      'p',
      null,
      'Add a something to do.'
    )
  );
};

Header.propTypes = {
  todos: _propTypes2.default.arrayOf(_propTypes2.default.object.isRequired).isRequired,
  remainingTodos: _propTypes2.default.number.isRequired
};

exports.default = Header;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(40);

var _Button2 = _interopRequireDefault(_Button);

var _ListItem = __webpack_require__(130);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'renderListItem',
    value: function renderListItem() {
      var _props = this.props,
          todos = _props.todos,
          toggleTodo = _props.toggleTodo,
          deleteTodo = _props.deleteTodo;

      return todos.map(function (todo) {
        return _react2.default.createElement(_ListItem2.default, {
          key: todo._id,
          todoObj: todo,
          toggleTodo: toggleTodo,
          deleteTodo: deleteTodo
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          todos = _props2.todos,
          toggleAll = _props2.toggleAll,
          deleteCompleted = _props2.deleteCompleted,
          completedCount = _props2.completedCount;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          todos && this.renderListItem()
        ),
        todos.length > 0 && _react2.default.createElement(_Button2.default, { text: 'Toggle All', onClick: toggleAll }),
        completedCount > 0 && _react2.default.createElement(_Button2.default, { text: 'Clear Completed', onClick: deleteCompleted })
      );
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  todos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    todo: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired,
    _id: _propTypes2.default.string.isRequired
  })).isRequired,
  toggleTodo: _propTypes2.default.func.isRequired,
  toggleAll: _propTypes2.default.func.isRequired,
  deleteTodo: _propTypes2.default.func.isRequired,
  deleteCompleted: _propTypes2.default.func.isRequired,
  completedCount: _propTypes2.default.number.isRequired
};

exports.default = List;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(40);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var todoObj = props.todoObj,
      _props$todoObj = props.todoObj,
      todo = _props$todoObj.todo,
      completed = _props$todoObj.completed,
      toggleTodo = props.toggleTodo,
      deleteTodo = props.deleteTodo;

  return _react2.default.createElement(
    'li',
    {
      onDoubleClick: function onDoubleClick() {
        return toggleTodo(todoObj);
      },
      style: { textDecoration: completed ? 'line-through' : 'none' }
    },
    todo,
    _react2.default.createElement(_Button2.default, { text: 'x', onClick: function onClick() {
        return deleteTodo(todoObj);
      } })
  );
};

ListItem.propTypes = {
  todoObj: _propTypes2.default.shape({
    todo: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired,
    _id: _propTypes2.default.string.isRequired
  }).isRequired,
  toggleTodo: _propTypes2.default.func.isRequired,
  deleteTodo: _propTypes2.default.func.isRequired
};

exports.default = ListItem;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(40);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserForm = function UserForm(props) {
  var inputValue = props.inputValue,
      onFormSubmit = props.onFormSubmit,
      setInputText = props.setInputText;

  return _react2.default.createElement(
    'form',
    { onSubmit: onFormSubmit },
    _react2.default.createElement('input', {
      type: 'text',
      value: inputValue,
      onChange: function onChange(e) {
        return setInputText(e.target.value);
      }
    }),
    _react2.default.createElement(_Button2.default, { type: 'submit', text: 'add' })
  );
};

UserForm.propTypes = {
  inputValue: _propTypes2.default.string.isRequired,
  setInputText: _propTypes2.default.func.isRequired,
  onFormSubmit: _propTypes2.default.func.isRequired
};

exports.default = UserForm;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(39);

var actions = _interopRequireWildcard(_actions);

var _UserForm = __webpack_require__(131);

var _UserForm2 = _interopRequireDefault(_UserForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = function (_Component) {
  _inherits(FormContainer, _Component);

  function FormContainer() {
    _classCallCheck(this, FormContainer);

    var _this = _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).call(this));

    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    return _this;
  }

  _createClass(FormContainer, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(e) {
      var _props = this.props,
          inputValue = _props.inputValue,
          addTodo = _props.addTodo;

      e.preventDefault
      // Empty input check
      ();if (inputValue.length > 0) {
        addTodo(inputValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          inputValue = _props2.inputValue,
          setInputText = _props2.setInputText;

      return _react2.default.createElement(_UserForm2.default, {
        inputValue: inputValue,
        setInputText: setInputText,
        onFormSubmit: this.onFormSubmit
      });
    }
  }]);

  return FormContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var todoList = _ref.todoList;
  return {
    inputValue: todoList.inputValue
  };
};

FormContainer.propTypes = {
  inputValue: _propTypes2.default.string.isRequired,
  setInputText: _propTypes2.default.func.isRequired,
  addTodo: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(FormContainer);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(39);

var actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(129);

var _List2 = _interopRequireDefault(_List);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListContainer = function (_Component) {
  _inherits(ListContainer, _Component);

  function ListContainer() {
    _classCallCheck(this, ListContainer);

    return _possibleConstructorReturn(this, (ListContainer.__proto__ || Object.getPrototypeOf(ListContainer)).apply(this, arguments));
  }

  _createClass(ListContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          todos = _props.todos,
          toggleTodo = _props.toggleTodo,
          toggleAll = _props.toggleAll,
          deleteTodo = _props.deleteTodo,
          deleteCompleted = _props.deleteCompleted,
          completedCount = _props.completedCount;

      return _react2.default.createElement(_List2.default, {
        todos: todos,
        toggleTodo: toggleTodo,
        toggleAll: toggleAll,
        deleteTodo: deleteTodo,
        deleteCompleted: deleteCompleted,
        completedCount: completedCount
      });
    }
  }]);

  return ListContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var todoList = _ref.todoList;
  return {
    todos: todoList.todos,
    completedCount: todoList.completedCount
  };
};

ListContainer.propTypes = {
  todos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    todo: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired,
    _id: _propTypes2.default.string.isRequired
  })).isRequired,
  toggleTodo: _propTypes2.default.func.isRequired,
  toggleAll: _propTypes2.default.func.isRequired,
  deleteTodo: _propTypes2.default.func.isRequired,
  deleteCompleted: _propTypes2.default.func.isRequired,
  completedCount: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(ListContainer);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(20);

var _store = __webpack_require__(110);

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(109);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(29);

var _todos_reducer = __webpack_require__(136);

var _todos_reducer2 = _interopRequireDefault(_todos_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  todoList: _todos_reducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(69);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  inputValue: '',
  todos: [],
  completedCount: 0
};

var todosReducer = function todosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.INPUT_VALUE:
      return _extends({}, state, {
        inputValue: action.payload
      });
    case _actionTypes.FETCH_TODOS:
      return _extends({}, state, {
        todos: action.payload
      });
    case _actionTypes.ADD_TODO:
      return _extends({}, state, {
        inputValue: '',
        todos: [].concat(_toConsumableArray(state.todos), [action.payload])
      });
    case _actionTypes.TOGGLE_ALL:
      return _extends({}, state, {
        todos: [].concat(_toConsumableArray(action.payload))
      });
    case _actionTypes.TOGGLE_TODO:
      {
        var updatedState = state.todos.map(function (todo) {
          return todo._id === action.payload._id ? _extends({}, todo, { completed: !todo.completed }) : todo;
        });
        return _extends({}, state, {
          todos: [].concat(_toConsumableArray(updatedState))
        });
      }
    case _actionTypes.DELETE_TODO:
      {
        var _updatedState = state.todos.filter(function (todo) {
          return todo._id !== action.payload;
        });
        return _extends({}, state, {
          todos: [].concat(_toConsumableArray(_updatedState))
        });
      }
    case _actionTypes.DELETE_COMPLETED:
      {
        var _updatedState2 = state.todos.filter(function (todo) {
          return todo.completed === false;
        });
        return _extends({}, state, {
          todos: [].concat(_toConsumableArray(_updatedState2))
        });
      }
    case _actionTypes.COMPLETED_COUNT:
      return _extends({}, state, {
        completedCount: action.payload
      });
    case _actionTypes.INCREMENT_COMPLETED_COUNT:
      return _extends({}, state, {
        completedCount: state.completedCount + 1
      });
    case _actionTypes.DECREMENT_COMPLETED_COUNT:
      return _extends({}, state, {
        completedCount: state.completedCount - 1
      });
    default:
      return state;
  }
};

exports.default = todosReducer;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCompleted = exports.deleteTodo = exports.toggleAll = exports.toggleTodo = exports.addTodo = exports.fetchTodos = exports.setInputText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(62);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setInputText = exports.setInputText = function setInputText(text) {
  return { type: _actionTypes.INPUT_VALUE, payload: text };
};

var fetchTodos = exports.fetchTodos = function fetchTodos() {
  return function (dispatch) {
    _axios2.default.get(_actionTypes.URL).then(function (res) {
      var todos = res.data;
      var completedCount = todos.filter(function (todo) {
        return todo.completed;
      }).length;
      dispatch({ type: _actionTypes.FETCH_TODOS, payload: todos });
      dispatch({ type: _actionTypes.COMPLETED_COUNT, payload: completedCount });
    });
  };
};

var addTodo = exports.addTodo = function addTodo(todo) {
  return function (dispatch) {
    _axios2.default.post(_actionTypes.URL + '/create', { todo: todo }).then(function (res) {
      var newTodo = res.data;
      dispatch({ type: _actionTypes.ADD_TODO, payload: newTodo });
    });
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(todo) {
  return function (dispatch) {
    _axios2.default.put(_actionTypes.URL + '/update', _extends({}, todo, { completed: !todo.completed })).then(function (res) {
      var updatedTodo = res.data;
      dispatch({ type: _actionTypes.TOGGLE_TODO, payload: updatedTodo });
      dispatch({
        type: updatedTodo.completed ? _actionTypes.DECREMENT_COMPLETED_COUNT : _actionTypes.INCREMENT_COMPLETED_COUNT
      });
    });
  };
};

var toggleAll = exports.toggleAll = function toggleAll() {
  return function (dispatch) {
    _axios2.default.put(_actionTypes.URL + '/update/all').then(function (res) {
      var updatedTodos = res.data;
      var completedCount = updatedTodos.filter(function (todo) {
        return todo.completed;
      }).length;
      dispatch({ type: _actionTypes.TOGGLE_ALL, payload: updatedTodos });
      dispatch({ type: _actionTypes.COMPLETED_COUNT, payload: completedCount });
    });
  };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(todo) {
  return function (dispatch) {
    var _id = todo._id,
        completed = todo.completed;

    _axios2.default.delete(_actionTypes.URL + '/delete', { data: { _id: _id } }).then(function () {
      dispatch({ type: _actionTypes.DELETE_TODO, payload: _id }
      // If deleted todo was completed (=== true), decrease completed count
      );if (completed) {
        dispatch({ type: _actionTypes.DECREMENT_COMPLETED_COUNT });
      }
    });
  };
};

var deleteCompleted = exports.deleteCompleted = function deleteCompleted() {
  return function (dispatch) {
    _axios2.default.delete(_actionTypes.URL + '/delete/completed').then(function () {
      dispatch({ type: _actionTypes.DELETE_COMPLETED });
      dispatch({ type: _actionTypes.COMPLETED_COUNT, payload: 0 });
    });
  };
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var type = props.type,
      text = props.text,
      onClick = props.onClick;

  return _react2.default.createElement(
    'button',
    { type: type, onClick: onClick },
    text
  );
};

Button.propTypes = {
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  text: _propTypes2.default.string
};

Button.defaultProps = {
  type: null,
  onClick: null,
  text: null
};

exports.default = Button;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Production Express server
var URL = exports.URL = 'https://mernstack-todos.herokuapp.com';

// User input
var INPUT_VALUE = exports.INPUT_VALUE = 'INPUT_VALUE';

// Todos
var FETCH_TODOS = exports.FETCH_TODOS = 'FETCH_TODOS';
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var TOGGLE_ALL = exports.TOGGLE_ALL = 'TOGGLE_ALL';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';
var DELETE_COMPLETED = exports.DELETE_COMPLETED = 'DELETE_COMPLETED';

// Completed count
var COMPLETED_COUNT = exports.COMPLETED_COUNT = 'COMPLETED_COUNT';
var INCREMENT_COMPLETED_COUNT = exports.INCREMENT_COMPLETED_COUNT = 'INCREMENT_COMPLETED_COUNT';
var DECREMENT_COMPLETED_COUNT = exports.DECREMENT_COMPLETED_COUNT = 'DECREMENT_COMPLETED_COUNT';

/***/ })

},[134]);