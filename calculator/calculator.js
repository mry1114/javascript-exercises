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

const updatePercent = (scoreInput, totalInput, percentElement) => {
    const score = Number(scoreInput.value)
    const total = Number(totalInput.value)
    if (!score || !total) {
        percentElement.innerHTML = ''
        return
    }
    const percent = score / total * 100

    percentElement.innerHTML = percent
}

meanBtn.addEventListener('click', calculateMean)
weightBtn.addEventListener('click', calculateWeight)

const addInputEventListener = (input, index) => {
    const scoreInput = scoreInputs[index]
    const totalInput = totalInputs[index]
    const percentElement = document.querySelectorAll('.percent')[index]

    input.addEventListener('input', () => updatePercent(scoreInput, totalInput, percentElement))
}

scoreInputs.forEach((input, index) => {
    addInputEventListener(input, index)
})

totalInputs.forEach((input, index) => {
    addInputEventListener(input, index)
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
    scoreInputs.push(scoreInput)
    totalInputs.push(totalInput)
    addInputEventListener(scoreInput,rows.length)
    addInputEventListener(totalInput,rows.length)
}

addActivityBtn.addEventListener('click', addRow)
