
// 배열의 평균값 계산
// by Kazel
export const getAvgArry = numbers => {
    try{
        if (numbers.length === 0) return 0
        const sum = numbers.reduce((a, b) => a + b)
        return sum / numbers.length
    }
    catch(err){
        return 0
    }
}

// 배열의 합 계산
// by Kazel
export const getSumArry = numbers => {
    try{
        if (numbers.length === 0) return 0
        const sum = numbers.reduce((a, b) => a + b)
        return sum
    }
    catch(err){
        return 0
    }
}

// 랜덤수 발생
// by Kazel
export const getRandom = maxValue => {
    try{
        return parseInt(Math.random() * maxValue)
    }
    catch(err){
        return err
    }
}

// 랜덤수 발생 (특정 숫자를 count만큼 리턴한다)
// by Kazel
export const getRandomMulti = (maxValue, count) => {
    try{
        let arryTmp = []
        let nowInteger = 0

        while(arryTmp.length < count)
        {
            nowInteger = parseInt(Math.random() * maxValue)

            if(arryTmp.filter(val => val === nowInteger).length < 1)
                arryTmp.push(nowInteger)
        }
        return arryTmp
    }
    catch(err){
        return err
    }
}