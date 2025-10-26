class MathArray extends Array {
    sumOfElements(){
        return this[0].reduce((acc,el)=> acc += el, 0)
    }
    averageOfElements(){
        return this[0].reduce((acc,el)=> acc += el, 0) / this[0].length
    }
    evenElements(){
        return this[0].filter( el => el % 2 == 0)
    }
    overThenTenElements(){
        return this[0].filter( el => el > 10)
    }
    arrayToStr(){
        return this[0].join("-")
    }
}

export default MathArray