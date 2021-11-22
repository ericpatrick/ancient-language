const vowels = ["a", "e", "i", "o", "u", "y"]

const translate = (englishText: string): string => {
  const englishWords = englishText.split(" ")
  const resultArr = []

  for (let engWord of englishWords) {
    let prefixIndex = engWord.length
    for (let i = 0; i < engWord.length; i++) {
      if (vowels.includes(engWord[i])) {
        prefixIndex = i
        break
      }
    }

    const regex = new RegExp(/[\w]$/)
    const hasMatch = regex.test(engWord)
    let pontuaction = null

    if (!hasMatch) {
      pontuaction = engWord[engWord.length - 1]
      const engWordWiouthPontuctuation = engWord.substring(
        0,
        engWord.length - 2
      )
    }

    const engWordClone = engWord
    const prefix = engWord.substring(0, prefixIndex)
    const sten = engWord.substring(prefixIndex, engWord.length)

    let ancientWord = `${sten}${prefix}ay`

    if (pontuaction) ancientWord += pontuaction

    resultArr.push(ancientWord)
  }

  return resultArr.join("")
}

console.log(translate("Stop"))
