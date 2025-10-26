/*
Задача состоим в том, чтобы реализовать класс RomNum, который должен содержать в себе два статических метода:
1-ый метод должен преобразовывать римские цифры в число
2-ой метод должен преобразовывать число в римские цифры
P.S. Число не может быть больше 3000 (MMM)! 
*/

class RomNum{
    static fromRoman(arr) {
        let rom = {
            I:1,
            V:5,
            X:10,
            L:50,
            C:100,
            D:500,
            M:1000
        }
        arr = arr.split("")
        let sum = 0;
        let a = 0;
        let b = 0;
        arr.forEach((el,i)=>{
            if(i % 2 == 0){
                a = rom[el]
                if(a > b) a -= b
                if(b > a) sum += b
                if(b == a) b += a
                b = 0
            }else{
                b = rom[el]
                if(a < b) b -= a
                if(b < a) sum += a
                if(b == a) b += a
                a = 0
            }
        })      
        return sum+a+b
    }
    static toRoman(arr) {
        let rom = {
            1:'I',
            5:'V',
            10:'X',
            50:'L',
            100:'C',
            500:'D',
            1000:'M'
        }
        arr = String(arr).split("").reverse()
        let sum = "";
        arr.forEach((el,i) => {
            if (el < 9) {
                if (el < 5) {
                    if (el < 4) {
                        for (let j = 0; j < el; j++) sum += rom[1*10**i]               
                    }else{
                        sum += rom[10*10**i]
                        sum += rom[1*10**i]
                    }
                } else {
                    for (let j = 0; j < el-5; j++) sum += rom[1*10**i]
                    sum += rom[5*10**i]
                }
            }else{
                sum += rom[10*10**i]
                sum += rom[1*10**i]
            }
        });
        return sum.split("").reverse().join("")
    }
}
// --- из римских цифр в число ---
console.log(RomNum.fromRoman('MCMXC')) // -> 1990
console.log(RomNum.fromRoman('X')) // -> 10
console.log(RomNum.fromRoman('MMXXII')) // -> 2022
console.log(RomNum.fromRoman('MMCM')) // -> 2900
// --- из числа в римские цифры --- 
console.log(RomNum.toRoman(1990)) // -> 'MCMXC'
console.log(RomNum.toRoman(2501)) // -> 'MMDI'
console.log(RomNum.toRoman(1)) // -> 'I'
console.log(RomNum.toRoman(100)) // -> 'C'