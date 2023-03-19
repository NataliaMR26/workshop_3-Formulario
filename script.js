// Lista de productos
const productos = [
   {
    nombre:'Celular',
    precio: 650,
    cantidad: 3,
    categoria:'Tecnología'
   },
   {
    nombre:'Licuadora',
    precio: 230,
    cantidad: 4,
    categoria:'Hogar'
   },
   {
    nombre:'Televisor',
    precio: 879,
    cantidad: 2,
    categoria:'Tecnología'
   },
   {
    nombre:'Cafetera',
    precio: 129,
    cantidad: 3,
    categoria:'Hogar'
   },
   {
    nombre:'Airpods',
    precio: 649,
    cantidad: 6,
    categoria:'Tecnología'
   },
   {
    nombre:'Horno',
    precio: 319,
    cantidad: 5,
    categoria:'Hogar'
   }
];

const pintarproducto = ()=>{
    const productsHTML = document.getElementById('products');
    productsHTML.innerHTML='';
    productos.forEach(element => {
        productsHTML.innerHTML+=`
            <tr>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
                <td>${element.categoria}</td>
                <td>
                <button onClick="updateProduct('${element.nombre}')">Actualizar</button>
                <button onClick="deleteProduct('${element.nombre}')">Eliminar</button>
                </td>
            </tr>
        `
    });
}
pintarproducto();

function addproduct (event) {
    event.preventDefault();
    const nombre = document.getElementById('name').value
    const precio = document.getElementById('price').value
    const cantidad = document.getElementById('quantity').value
    const categoria = document.getElementById('category').value

    const product = {
        nombre,
        precio,
        cantidad,
        categoria,
    }
    const findProduct= productos.findIndex(product=> product.nombre.toUpperCase()===nombre.toUpperCase());
    if(findProduct>-1){
        const newProduct= productos.find(product=> product.nombre.toUpperCase()===nombre.toUpperCase());
        newProduct.cantidad=newProduct.cantidad+Number(cantidad);
        productos.splice(findProduct,1,newProduct)

    }else {
        productos.push(product)
    }
   
    pintarproducto();
}

const deleteProduct = (producto) =>{
    const findProduct= productos.findIndex(product=> product.nombre.toUpperCase()===producto.toUpperCase());
    productos.splice(findProduct,1);
    pintarproducto();
}

const updateProduct = (producto)=>{
    const nombre = document.getElementById('name').value
    const precio = document.getElementById('price').value
    const cantidad = document.getElementById('quantity').value
    const categoria = document.getElementById('category').value
    const product = {
        nombre,
        precio,
        cantidad,
        categoria,
    }
    const findProduct= productos.findIndex(product=> product.nombre.toUpperCase()===producto.toUpperCase());
    productos.splice(findProduct,1,product)
    pintarproducto();
}

const buttonSent = document.getElementById('enviar');
buttonSent.addEventListener('click',addproduct);