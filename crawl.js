const { execSync } = require('child_process')
const fs = require('fs')

const dictionary = JSON.parse(fs.readFileSync('dictionary.json'))

for (const key in dictionary) {
    console.log(key)
    const out = execSync(`npm search ${key}`)
    if (!out.includes('No matches found')) {
        delete dictionary[key]
    }
}

fs.writeFileSync('results.json', JSON.stringify(dictionary))
