const productos = [
  { tipo: "hamburguesa", nombre: "cheeseburger", precio: 6000 },
  { tipo: "hamburguesa", nombre: "hamburguesa completa", precio: 7000 },
  { tipo: "hamburguesa", nombre: "hamburguesa vegetariana", precio: 6000 },
  {
    tipo: "bebida",
    nombre: "lata de 354ml",
    precio: 2000,
  },
  {
    tipo: "bebida",
    nombre: "botella de 500ml",
    precio: 3000,
  },
  {
    tipo: "guarnicion",
    nombre: "papas fritas",
    precio: 3000,
  },
  {
    tipo: "guarnicion",
    nombre: "aros de cebolla ",
    precio: 3800,
  },
  {
    tipo: "guarnicion",
    nombre: "papas fritas con cheddar",
    precio: 4500,
  },
];
let carritoCompra = [];
let comprando = true;

const userName = prompt(
  `Bienvenido a Weiss Burger. Primero vamos a necesitar unos datos para continuar, ¿Cuál es tu nombre?`
);
const userDir = prompt(
  `Buenisimo ${userName}!, necesitamos la direccion a la cual queres enviar el pedido.`
);

const addProduct = () => {
  const opcionElegida = Number(
    prompt(
      `Selecciona una opción. \n1 - Hamburguesa \n2 - Bebida \n3 - Guarnicion`
    )
  );
  switch (opcionElegida) {
    case 1:
      const productoHamburguesa = Number(
        prompt(
          `1 - Cheeseburger ($6000) \n2 - Hamburguesa completa ($7000) \n3 - Hamburguesa vegetariana ($6000)`
        )
      );
      switch (productoHamburguesa) {
        case 1:
          carritoCompra = [
            ...carritoCompra,
            productos[productoHamburguesa - 1],
          ];
          break;
        case 2:
          carritoCompra = [
            ...carritoCompra,
            productos[productoHamburguesa - 1],
          ];
          break;
      }
      break;
    case 2:
      const productoBebida = Number(
        prompt(
          `1 - Lata de gaseosa de 354 ml($2000) \n2 - Botella de 500ml ($3000)`
        )
      );
      switch (productoBebida) {
        case 1:
          carritoCompra = [...carritoCompra, productos[productoBebida + 1]];
          break;
        case 2:
          carritoCompra = [...carritoCompra, productos[productoBebida + 1]];
          break;
      }
      break;
    case 3:
      const productoGuarnicion = Number(
        prompt(
          `1 - Papas fritas ($3000) \n2 - Aros de cebolla ($3800) \n3 - Papas fritas con cheddar ($3500)`
        )
      );
      switch (productoGuarnicion) {
        case 1:
          carritoCompra = [...carritoCompra, productos[productoGuarnicion + 3]];
          break;
        case 2:
          carritoCompra = [...carritoCompra, productos[productoGuarnicion + 3]];
          break;
      }
      break;
  }
};

const removeProduct = () => {
  if (carritoCompra.length > 0) {
    carritoCompra.length = carritoCompra.length - 1;
  }
};

const resetMarket = () => {
  if (carritoCompra.length > 0) {
    carritoCompra.splice(0, carritoCompra.length);
  }
};

const endMarket = (carritoCompra) => {
  return carritoCompra.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
};

while (comprando) {
  const opcionElegida = Number(
    prompt(
      `Selecciona una opción. \n1 - Añadir producto \n2 - Retirar último producto \n3 - Reiniciar carrito \n4 - Finalizar compra`
    )
  );
  switch (opcionElegida) {
    case 1:
      addProduct();
      break;
    case 2:
      removeProduct();
      break;
    case 3:
      resetMarket();
      break;
    case 4:
      alert(
        `${userName} gracias por comprar en nuestro carrito express. \nTu pedido lo vas a estar recibiendo en ${userDir}. \nEl precio total es de $${endMarket(
          carritoCompra
        )}`
      );
      comprando = false;
      break;
  }
  console.table(carritoCompra);
}
