let nome = prompt('Digite o seu nome')
alert('Olá ' + nome)
let sobrenome = prompt('Digite o seu sobrenome')
let idade = prompt('Digite a sua idade')
let ano = prompt('Digite o ano que você nasceu')
let estado = prompt('Digite o seu estado')
let anoAtual = (parseInt(ano) + parseInt(idade))
const nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)
console.log(idade)
console.log(ano)


console.log(parseInt(ano) + parseInt(idade))

alert('O seu nome e sobrenome é ' + nomeCompleto)
alert('A sua idade é ' + idade)
alert('O ano que você nasceu foi em ' + ano)
alert('Você é do estado de ' + estado)
alert('o ano atual é ' + anoAtual)

