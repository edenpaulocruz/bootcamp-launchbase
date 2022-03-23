module.exports = {
  age: timestamp => {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    const day = today.getDate() - birthDate.getDate()

    if (month < 0 || month == 0 && day < 0) {
      age = age - 1
    }

    return age
  },
  date: timestamp => {
    const date = new Date(timestamp)
    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },
  grad: code => {
    const grad = {
      2: 'Ensino Médio Completo',
      3: 'Ensino Superior Completo',
      4: 'Mestrado',
      5: 'Doutorado'
    }

    return grad[code]
  },
  mode: code => {
    const mode = {
      P: 'Presencial',
      R: 'A distância'
    }

    return mode[code]
  }
}
