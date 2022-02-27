const meanBtn = document.getElementById('mean')

const weightBtn = document.getElementById('weight')

const scoreInputs = [...document.querySelectorAll('.score')]
const totalInputs = [...document.querySelectorAll('.total')]

const calculateWeight = (event) =>{
    event.preventDefault()

    const rows = [...document.querySelectorAll('.row')]

    const percentages = rows.map((row)=>{
        const score = Number(row.querySelector('.score').value)
        const total = Number(row.querySelector('.total').value)
        
        return score / total * 100
    })

    const weights = rows.map((row)=>{
        const weight = Number(row.querySelector('.weight').value)
        return weight
    })
    
    let totalWeightedPercentage = 0
    for (let i = 0; i < rows.length; i++) {
       totalWeightedPercentage += percentages[i] * weights[i]
    }
    
    const totalWeigt = weights.reduce((result, weight)=>{
        return  result + weight
    }, 0)
    
    const result = totalWeightedPercentage / totalWeigt 

    document.querySelector('#result').innerHTML = result
}

const calculateMean = (event) => {
    event.preventDefault()

    const rows = [...document.querySelectorAll('.row')]

    const percentages = rows.map((row)=>{
        const score = row.querySelector('.score').value
        const total = row.querySelector('.total').value

        return score / total *100
    })

    percentages.forEach((percentage, index) =>{
        const percentageElements = [...document.querySelectorAll('.percent')]
        percentageElements[index].innerHTML = percentage
    })

    const totalPer = percentages.reduce((result, percentage)=> {
        return result + percentage
    }, 0)

    const result = totalPer / rows.length

    document.querySelector('#result').innerHTML = result
}

meanBtn.addEventListener('click', calculateMean)
weightBtn.addEventListener('click', calculateWeight)

scoreInputs.forEach((input, index) => {
    const updatePercent = (event) => {
        const score = scoreInputs[index].value
        const total = totalInputs[index].value
        if (!score || !total){
            document.querySelectorAll('.percent')[index].innerHTML = ''
            return
        }

        const percent = score / total * 100

        document.querySelectorAll('.percent')[index].innerHTML = percent
    }

    input.addEventListener('input', updatePercent)
})

totalInputs.forEach((input, index) => {
    const updatePercent = (event) => {
        const score = scoreInputs[index].value
        const total = totalInputs[index].value
        if (!score || !total){
            document.querySelectorAll('.percent')[index].innerHTML = ''
            return
        }

        const percent = score / total * 100

        document.querySelectorAll('.percent')[index].innerHTML = percent
    }

    input.addEventListener('input', updatePercent)
})
