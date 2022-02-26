const meanBtn = document.getElementById('mean')

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
