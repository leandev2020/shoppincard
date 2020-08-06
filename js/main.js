//console.log("Esto es una prueba")
let pedido = []

window.addEventListener('DOMContentLoaded', ()=>{

    //var btnCancelar = document.querySelector('#btnCancelar')
    window.btnCancelar.addEventListener('click', ()=>{
        let seguro = confirm("Estas seguro qeu queres cancelar tu compra")
        if(seguro) {
            pedido = [];
            actualizarCarrito()
        }
    })

    window.btnBorrarItem.addEventListener('click', ()=>{
        let seguroBorrarItem = confirm("Estas seguro que queres borrar el ultimo item?")
        if(seguroBorrarItem) {
            pedido.pop()
            actualizarCarrito()
        }
    })

    let productos = document.querySelectorAll('.product')
    //console.log(productor)
    for(let producto of productos){
        producto.addEventListener('click', (e)=>{
            //console.log(e.currentTarget.dataset.producto)
            let prod = e.currentTarget.dataset.producto
            pedido.push(prod)
            actualizarCarrito()
        })
    }
})


function actualizarCarrito(){
    let html = ""
    for(let producto of pedido){
        html += "<li>" + producto + "</li>"
    }
    //console.log(html)
    let ul = document.querySelector('#cart ul');
    ul.innerHTML = html

    let cart = document.querySelector("#cart")
    if(pedido.length==0){
        cart.style.backgroundColor = 'gray'
    }else {
        cart.style.backgroundColor = '#006'
    }
}



