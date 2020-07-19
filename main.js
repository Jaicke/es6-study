// Exercício 1
class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  isAdmin() {
    return this.admin ? true : false
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password)
    this.admin = true
  }
}

const user = new User('email@teste.com', 'senha123')
const admin = new Admin('email@teste.com', 'senha123')

console.log(user.isAdmin())
console.log(admin.isAdmin())

// Exercício 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const idades = usuarios.map(item => item.idade)
console.log(idades)

const mesaFuncionarios = usuarios.filter(item => {
  return item.idade > 18 && item.empresa === "Rocketseat"
})
console.log(mesaFuncionarios)

const naoEncontrado = usuarios.find(item => item.empresa === 'Google')
console.log(naoEncontrado)

const filterIdade = usuarios.map((item) => {
  item.idade = item.idade * 2
  return item
}).filter(item => item.idade < 50)

console.log(filterIdade)

// Exercicio 3

// 3.1
const arr = [1, 2, 3, 4, 5]
console.log(arr.map(item => item + 10))

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 }
const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego"
const idade = 23
const mostraUsuario = (nome = 'Diego', idade = 18) => (nome, idade)
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4
const promise = () => new Promise((resolve, reject) => resolve())
console.log(promise)


// Exercicio 4
// 4.1
const empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
}

const { name, endereco: { cidade, estado } } = empresa
console.log(name) // Rocketseat
console.log(cidade) // Rio do Sul
console.log(estado) // SC

// 4.2
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))


// Exercicio 5
// 5.1
const arr1 = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr1
console.log(x) // 1
console.log(y) // [2, 3, 4, 5, 6]

// function soma...
function soma(...params) {
  return params.reduce((total, next) => total + next)
}
console.log(soma(1, 2, 3, 4, 5, 6)) // 21
console.log(soma(1, 2)) // 3

//5.2
const user1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
}

const user2 = { ...user1, nome: "Gabriel" }
const user3 = { ...user1, endereco: { cidade: "Lontras" } }
console.log(user2)
console.log(user3)

// Exercicio 6
const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

// Exercicio 7
const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
 nome7,
 idade7,
 cidade: 'Rio do Sul',
};
console.log(usuario7)






