const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const ascii = fs.readFileSync(path.resolve(__dirname, './ascii.txt'))
console.log(chalk.cyan(ascii.toString()))

console.log('')

console.log(`Name: ${chalk.cyan('William DA SILVA')}`)
console.log(`Age: ${new Date().getFullYear() - new Date('1998-01-25').getFullYear()} years old`)
console.log('Location: Paris, FRANCE')
console.log(`Job: Front-End Developer @ ${chalk.green('Chronotruck')}`)

console.log('')
console.log('Contact informations:')
console.log('E-mail: contact@williamdasilva.fr')
console.log('Twitter: william.to/twitter')

console.log('')
console.log(`Learn more about me at: ${chalk.cyan('william.to/web')}`)
console.log('')
