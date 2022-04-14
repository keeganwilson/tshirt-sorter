// Write your solution below:
const tshirtSorter = str => {
    let sortArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            sortArr.unshift(str[i]);
        }   else if (str[i] === 'm') {
            sortArr.splice(sortArr.lastIndexOf('s') + 1, 0, str[i]);
        }   else sortArr.push(str[i]);
    }
    return sortArr.join('')
}

console.log(tshirtSorter('smlmlmssmlssml'))
