// ejercicio 1
let edadUsuario = prompt('Ingresa tu edad: ')
let añosFaltantes = 18 - edadUsuario
switch (true) {
    case edadUsuario >= 18:
        console.log('Eres lo suficientemente mayor para conducir.')
        break;
    case edadUsuario < 18:
        console.log('Te faltan', + añosFaltantes + ' años para conducir.')
        break;
}

// ejercicio 2.
let miEdad = 20
let tuEdad = prompt('Ingresa tu edad: ')
let mayor = tuEdad - miEdad
let menor = miEdad - tuEdad
if (tuEdad > miEdad) {
    console.log('Eres ' + mayor + ' año/s mayor que yo.')
} else {
    console.log('Eres ' + menor + ' año/s menor que yo.')
}

// ejercicio 3.
let a = prompt('Ingresa un número para a: ')
let b = prompt('Ingresa un número para b: ')
let verdad = a > b

if (a > b) {
    console.log(a + ' es mayor que ' + b)
} else {
    console.log(b + ' es mayor que ' + a)
}

verdad ? console.log(a + ' es mayor que ' + b) : console.log(b + ' es mayor que ' + a)

// ejercicio 4.
let mesUsuarioInput = prompt('Por favor, ingresa qué mes es: ')
let mes = mesUsuarioInput.toLowerCase()

switch (mes) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('La estación es Otoño.')
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('La estación es Invierno.')
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('La estación es Primavera.')
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('La estación es Verano.')
        break;
    default:
        console.log('No es un mes válido.')
}

// ejercicio 5.
let puntos = prompt('Ingresa tus puntos: ')

if (puntos >= 80 && puntos <= 100) {
    console.log('Tu calificación es: A')
} else if (puntos >= 70 && puntos <= 79) {
    console.log('Tu calificación es: B')
} else if (puntos >= 60 && puntos <= 69) {
    console.log('Tu calificación es: C')
} else if (puntos >= 50 && puntos <= 59) {
    console.log('Tu calificación es: D')
} else if (puntos >= 0 && puntos <= 49) {
    console.log('Tu calificación es: F')
}
