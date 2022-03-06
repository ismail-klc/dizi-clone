const toLower = (string) => {
    let str = string
        .toLowerCase()
        .replace(/ /g, '-')

    let lowerStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'ç') lowerStr += 'c'
        else if (str[i] === 'ğ') lowerStr += 'g'
        else if (str[i] === 'ı') lowerStr += 'i'
        else if (str[i] === 'ö') lowerStr += 'o'
        else if (str[i] === 'ş') lowerStr += 's'
        else if (str[i] === 'ü') lowerStr += 'u'
        else lowerStr += str[i]
    }

    return lowerStr
}

export default toLower