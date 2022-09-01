const containerDiv = document.querySelector(".container")
const carritoDiv = document.querySelector(".carrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function crearCards (){
    productos.forEach(prod=>{
        containerDiv.innerHTML +=  `<div class="row">
                                    <div class="col-sm-12 col-md-6 col-xl-4">
                                     <div class="card" style="width: 18rem;">
                                    <img src="./img/smartphone.jpg" class="card-img-top" alt="imagen de un smartphone">
                                    <div class="card-body">
                                    <h5 class="card-title">${prod.Nombre}</h5>
                                    <p class="card-text">${prod.descripcion}</p>
                                    <p class="card-text">${prod.precio}</p>
                                    <p class="card-text">${prod.stock}</p>
                                    <button class="btn btn-primary carrito" id= "btn-agregar${prod.id}">añadir al carrito</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>`   
    })

    funcionalidadbtn()
                        
}

function funcionalidadbtn(){
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", ()=> {
            agregarAlCarrito(prod)
        })
    })
}

function agregarAlCarrito(prod){
    let existe = carrito.some((productoSome) =>productoSome.id === prod.id)
    if(existe === false){
        prod.cantidad                                                                                                                                                                                                              = 1
        carrito.push(prod)
    } else{
        prod.cantidad++
    }
    reenderizaCarrito ()
}

function reenderizaCarrito (){
    carritoDiv.innerHTML = ""
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div class="row">
                                <div class="col-sm-12 col-md-6 col-xl-4">
                                <div class="card" style="width: 18rem;">
                                <img src="./img/smartphone.jpg" class="card-img-top" alt="imagen de un smartphone">
                                <div class="card-body">
                                <h5 class="card-title">${prod.Nombre}</h5>
                                <p class="card-text">${prod.descripcion}</p>
                                <p class="card-text">${prod.precio}</p>
                                <p class="card-text">${prod.stock}</p>
                                <button class="btn btn-primary carrito" id= "btn-borrar${prod.id}">borrar</button>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>`
    
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductos()

}

function borrarProductos(){
    carrito.forEach((prod) => {
        document.querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", ()=> {
            carrito =carrito.filter(
                (productofilter) =>productofilter.id !== prod.id)
                    reenderizaCarrito ()
        })
    })

}

function borrarProductos(){
    carrito.forEach((prod) => {
        document.querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", ()=> {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'se a eliminado el producto',
                showConfirmButton: false,
                timer: 1500
              })
              carrito =carrito.filter(
                (productofilter) =>productofilter.id !== prod.id)
                    reenderizaCarrito ()
       })
    })
}
crearCards ()
reenderizaCarrito ()