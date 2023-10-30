function credit(pul,ay) {
    const array =[]
    let qal = 0
    for (let i = 0; i < ay; i++) {
        if (pul%ay >= ay-i)qal = 1
        array.push(Math.round(pul/ay-((pul%ay)/ay)+qal))
    }
    return array
}

console.log(credit(1237,7));

