function calculo_dni(form) {
    let DNI = form.dni.value.trim()
    let letra = form.letra.value.trim().toUpperCase()


    if (isNaN(DNI) || DNI < 0 || DNI > 99999999) {
        alert("El número proporcionado no es válido")
        return false
    }


    let i = DNI % 23


    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    let letra1 = letras[i]

    if (letra1 !== letra) {
        alert("La letra que ha indicado no es correcta")
        return false
    }


    alert("El número y la letra de DNI son correctos")
    return true
}