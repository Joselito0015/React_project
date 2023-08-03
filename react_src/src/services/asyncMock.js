function getData() {
  // 1. Generamos la promise
  // 2. simulamos los retardos con setTimeout
  // 3. Resolvemos los productos con "resolve"
  // 4. Retornamos la Promise
  return new Promise((resolve, reject) => {
    const productos = [
      {
        title: "Camiseta de fútbol",
        id: 1,
        stock: 5,
        description: "Camiseta de fútbol de alta calidad",
        img: "/src/assets/img/camisa.png",
        price: 300,
        category: "Futbol",
      },
      {
        title: "Zapatillas de running",
        id: 2,
        stock: 8,
        description: "Zapatillas de running para entrenamiento",
        img: "/src/assets/img/zapatillas.jpeg",
        price: 200,
        category: "Futbol"
      },
      {
        title: "Shorts de baloncesto",
        id: 3,
        stock: 3,
        description: "Shorts transpirables para baloncesto",
        img: "/src/assets/img/shorts.jpeg",
        price: 150,
        category: "Basquet",
      },
      {
        title: "Pelota de baloncesto",
        id: 10,
        stock: 2,
        description: "Pelota de tenis oficial",
        img: "/src/assets/img/pelota.jpeg",
        price: 142,
        category: "Basquet",
      },
    ];

    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 500);
  });
}

export default getData;
