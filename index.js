//Usando DOM
let mensaje= document.getElementById("mensaje")

//Creación array de objetos
let productos = [{
    descripcion: 'Laptop HP I3 - 4GB - 500GB',
    precio: 400
},
{
    descripcion: 'Desktop Lenovo I3 - 4GB - 500GB - Monitor 19" LG',
    precio: 450
},
{
    descripcion: 'Impresora HP 415',
    precio: 180
},
{
    descripcion: 'Tablet Lenovo A500',
    precio: 150
},
{
    descripcion: 'Switch TP-Link',
    precio: 80
}
]

//Función para elegir un producto de la lista que contiene el array
mostrarMensaje = () => {
let mensaje = 'Bienvenido a mi Cotizador \n¿Elija el producto que desee cotizar?'

let count = 1

for (let producto of productos) {
    mensaje += `\n${count}. ${producto.descripcion} - $ ${producto.precio}`
    count++
}

mensaje += `\n${count}. Salir`

return mensaje
}

//Función para insertar la cantidad de unidades que se desea cotizar
cantidad = (producto) => {
return prompt(`¿Escriba cuantas unidades de ${producto.descripcion} desea comprar?`)
}

//Función para calcular el impuesto por producto
impuesto = (cantidad, producto) => {
alert(`Realizó la cotización de ${cantidad} unidades de ${producto.descripcion} por el valor de $ ${(cantidad * producto.precio) * 1.18}`)
return (cantidad * producto.precio) * 1.18
}

//Función que retorna el precio total de los productos a cotizar.
total = (arg) => {
return arg.reduce((x , element) => x + element, 0)
}

let opt = 0
let gen = []

do {
opt = parseInt(prompt(mostrarMensaje()))

if (opt == productos.length + 1) {
    alert(`La cotización total es $ ${total(gen)}. \Gracias por utilizar nuestro cotizador. \nVuelva pronto.`)
    break
}

gen.push(impuesto(cantidad(productos[opt - 1]), productos[opt - 1]))
} while (true)

mensaje.innerText =`Tu pago total es $ ${total(gen)}. \nGracias por utilizar nuestro cotizador. \nVuelva pronto.`