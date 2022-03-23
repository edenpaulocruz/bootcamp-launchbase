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
      R: 'Remoto'
    }

    return mode[code]
  }
}
