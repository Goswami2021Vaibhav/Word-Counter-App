const regex = /[^a-zA-Z0-9]/g;
function countWord(inputValue) {
    let words = inputValue.split(' ')

    // removing symbols 

    let removedSymbols = words.map(word => word.replace(regex, ''))

    // removing empty space 

    let removedEmptySpace = removedSymbols.filter(word => word.length > 0)

    let wordCount = removedEmptySpace.length;
    let characterCount = inputValue.length;
    document.querySelector('.words').innerHTML = wordCount
    document.querySelector('.characters').innerHTML = characterCount
}