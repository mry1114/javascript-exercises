const meanBtn = document.getElementById('mean')

const weightBtn = document.getElementById('weight')

const addActivityBtn = document.getElementById('add_activity')

const scoreInputs = [...document.querySelectorAll('.score')]
const totalInputs = [...document.querySelectorAll('.total')]

const calculateWeight = (event) => {
    event.preventDefault()

    const rows = [...document.querySelectorAll('.row')]

    const percentages = rows.map((row) => {
        const score = Number(row.querySelector('.score').value)
        const total = Number(row.querySelector('.total').value)

        return score / total * 100
    })

    const weights = rows.map((row) => {
        const weight = Number(row.querySelector('.weight').value)
        return weight
    })

    let totalWeightedPercentage = 0
    for (let i = 0; i < rows.length; i++) {
        totalWeightedPercentage += percentages[i] * weights[i]
    }

    const totalWeigt = weights.reduce((result, weight) => {
        return result + weight
    }, 0)

    const result = totalWeightedPercentage / totalWeigt

    document.querySelector('#result').innerHTML = result
}

const calculateMean = (event) => {
    event.preventDefault()

    const rows = [...document.querySelectorAll('.row')]

    const percentages = rows.map((row) => {
        const score = row.querySelector('.score').value
        const total = row.querySelector('.total').value

        return score / total * 100
    })

    percentages.forEach((percentage, index) => {
        const percentageElements = [...document.querySelectorAll('.percent')]
        percentageElements[index].innerHTML = percentage
    })

    const totalPer = percentages.reduce((result, percentage) => {
        return result + percentage
    }, 0)

    const result = totalPer / rows.length

    document.querySelector('#result').innerHTML = result
}

meanBtn.addEventListener('click', calculateMean)
weightBtn.addEventListener('click', calculateWeight)

scoreInputs.forEach((input, index) => {
    const updatePercent = () => {
        const score = Number(scoreInputs[index].value)
        const total = Number(totalInputs[index].value)
        if (!score || !total) {
            document.querySelectorAll('.percent')[index].innerHTML = ''
            return
        }

        const percent = score / total * 100

        document.querySelectorAll('.percent')[index].innerHTML = percent
    }

    input.addEventListener('input', updatePercent)
})

totalInputs.forEach((input, index) => {
    const updatePercent = () => {
        const score = Number(scoreInputs[index].value)
        const total = Number(totalInputs[index].value)
        if (!score || !total) {
            document.querySelectorAll('.percent')[index].innerHTML = ''
            return
        }

        const percent = score / total * 100

        document.querySelectorAll('.percent')[index].innerHTML = percent
    }

    input.addEventListener('input', updatePercent)
})

const addRow = (event) => {
    event.preventDefault()

    const rows = [...document.querySelectorAll('.row')]
    const rowNumber = rows.length + 1
    const tbody = document.querySelector('tbody')
    const row = document.createElement('tr')
    row.className = 'row'
    row.innerHTML = `<td>Activity ${rowNumber}</td>
    <td>A${rowNumber}</td>
    <td><input type="number" class="grades weight" value = 6> </td>
    <td><input type="number" class="grades score" value = 7> /
        <input type="number" class="grades total" value = 10>
    </td>
    <td class="percent"></td>`

    tbody.appendChild(row)

    const scoreInput = row.querySelector('.score')
    const totalInput = row.querySelector('.total')

    const updatePercent = () => {
        const score = Number(scoreInput.value)
        const total = Number(totalInput.value)
        if (!score || !total) {
            row.querySelector('.percent').innerHTML = ''
            return
        }
        const percent = score / total * 100

        row.querySelector('.percent').innerHTML = percent
    }
    scoreInput.addEventListener('input', updatePercent)
    totalInput.addEventListener('input', updatePercent)

    

}

addActivityBtn.addEventListener('click', addRow)
