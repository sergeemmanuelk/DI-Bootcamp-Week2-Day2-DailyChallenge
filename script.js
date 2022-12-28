//First method

let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")

if(wordNot < wordBad) {
    console.log(sentence.replace("not that bad", "good"))
} else {
    console.log(sentence)
}

//Second method

let sentence2 = "The movie is not that bad, I like it"
let wordNot2 = sentence.indexOf("not")
let wordBad2 = sentence.indexOf("bad")

if(wordNot < wordBad) {
    console.log(sentence.replace(sentence.substring(wordNot2, wordBad2 + 3), "good"))
} else {
    console.log(sentence)
}
