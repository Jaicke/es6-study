"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercício 1
var User = /*#__PURE__*/function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin ? true : false;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, password);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var user = new User('email@teste.com', 'senha123');
var admin = new Admin('email@teste.com', 'senha123');
console.log(user.isAdmin());
console.log(admin.isAdmin()); // Exercício 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var mesaFuncionarios = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === "Rocketseat";
});
console.log(mesaFuncionarios);
var naoEncontrado = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(naoEncontrado);
var filterIdade = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}).filter(function (item) {
  return item.idade < 50;
});
console.log(filterIdade); // Exercicio 3
// 3.1

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
})); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return nome, idade;
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise); // Exercicio 4
// 4.1

var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(name); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); // Exercicio 5
// 5.1

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// function soma...

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2

var user1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var user2 = _objectSpread(_objectSpread({}, user1), {}, {
  nome: "Gabriel"
});

var user3 = _objectSpread(_objectSpread({}, user1), {}, {
  endereco: {
    cidade: "Lontras"
  }
});

console.log(user2);
console.log(user3); // Exercicio 6

var usuario6 = 'Diego';
var idade6 = 23;
console.log("O usu\xE1rio ".concat(usuario6, " possui ").concat(idade6, " anos")); // Exercicio 7

var nome7 = 'Diego';
var idade7 = 23;
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade: 'Rio do Sul'
};
console.log(usuario7);
