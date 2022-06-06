// exports.translate = function(word) {
// };


//I don't know an efficient way to change the capitalization - the way I would go about it would be to add 
//const isUpperCase = (string) => /^[A-Z]*$/.test(string)
//then : isUpperCase(wordArr[i]) for every single conditional.

function translate(str) {
    let wordArr=str.split(" ")
    let vowels="aeiou"
    let answer=[]
    for (let i=0;i<wordArr.length;i++) {
        let word=wordArr[i].toLowerCase()           //changed it all to lowercase
        if (vowels.includes(word[0])) {                 //starts with a vowel
            answer.push(`${word}ay`)
        }
        else if (word[0]!=="q" && vowels.includes(word[1])) {               //starts with 1 consonant not q, next is vowel
            answer.push(`${word.slice(1)}${word[0]}ay`)
        }

        else if (word[0]=="q" && word[1]=="u"){                             //starts    with qu
            answer.push(`${word.slice(2,word.length)}quay`)
        }

        else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {          //starts w/ 2 consonants
            if (word[1]=="q" && word[2]== "u") {
                answer.push(`${word.slice(3,word.length)}${word.slice(0,3)}ay`)
            }
            else if (!vowels.includes(word[2])) {
                answer.push(`${word.slice(3,word.length)}${word.slice(0,3)}ay`)     //3rd is consonant
            }
            else {
                answer.push(`${word.slice(2,word.length)}${word.slice(0,2)}ay`)     //3rd is vowel
            }
        }
    }


        
    return answer.join(" ")
}

//works:
// console.log("translates a word beginning with a vowel:");
// console.log(translate("apple"))// === "appleay");

// console.log("translates two words:");
// console.log(translate("eat pie")) // === "eatay iepay");

// console.log("translates a word beginning with a consonant:");
// console.log(translate("banana"))// === "ananabay");

// console.log("counts 'qu' as a single phoneme:");
// console.log(translate("quiet")) // === "ietquay");

// console.log("translates a word beginning with two consonants:");
// console.log(translate("cherry")) // === "errychay");

// console.log("translates a word beginning with three consonants:");
// console.log(translate("three")) // === "eethray");
// console.log("counts 'sch' as a single phoneme:");
// console.log(translate("school")) // === "oolschay");

// console.log("counts 'qu' as a consonant even when it's preceded by a consonant:");
// console.log(translate("square")) // === "aresquay");

// console.log("translates many words:");
console.log(translate("the quick brown fox")) // === "ethay ickquay ownbray oxfay");

// console.log(translate("This is my quickly testing string zach ball frick frack chew imagination"))

// console.log(translate("ain't it crazy? Mr. Thompson?"))





//tried to use map and for each:
    // let answer=wordArr.map(function (word) {
    //     if (vowels.includes(word[0])) {
    //         word+="ay"
    //     }
    // })

    // wordArr.forEach(element => {
    //     if (vowels.includes(element[0])) {
    //         element+="ay"
    //     }
    // });