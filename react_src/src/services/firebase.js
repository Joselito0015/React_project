// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWPJoQFIOkbm0rTjhA-WABdH2M7yOs2n0",
  authDomain: "reactcoderhouse-5787b.firebaseapp.com",
  projectId: "reactcoderhouse-5787b",
  storageBucket: "reactcoderhouse-5787b.appspot.com",
  messagingSenderId: "177569211351",
  appId: "1:177569211351:web:0084ae135275d90c6d6192"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    /* {let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData; }*/
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData(category) {
  const productsRef = collection(db, "products");
  // cambiamos esto
  const q = query(productsRef, where("category", "==", category));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;
  documents.forEach((item) => { console.log(item.data())});
  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


async function _exportProductsWithBatch(){
  const productos = [
    {
      title: "Camiseta de fútbol",
      id: 1,
      stock: 0,
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
      category: "Futbol",
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
      id: 4,
      stock: 2,
      description: "Pelota de baloncesto oficial",
      img: "/src/assets/img/pelota.jpeg",
      price: 150,
      category: "Basquet",
    },
    {
      title: "Camiseta de fútbol",
      id: 5,
      stock: 5,
      description: "Camiseta de fútbol de alta calidad",
      img: "/src/assets/img/camisa.png",
      price: 300,
      category: "Futbol",
    },
    {
      title: "Zapatillas de running",
      id: 6,
      stock: 3,
      description: "Zapatillas de running para entrenamiento",
      img: "/src/assets/img/zapatillas.jpeg",
      price: 200,
      category: "Futbol",
    },
    {
      title: "Shorts de baloncesto",
      id: 7,
      stock: 1,
      description: "Shorts transpirables para baloncesto",
      img: "/src/assets/img/shorts.jpeg",
      price: 150,
      category: "Basquet",
    },
    {
      title: "Pelota de baloncesto",
      id: 8,
      stock: 1,
      description: "Pelota de baloncesto oficial",
      img: "/src/assets/img/pelota.jpeg",
      price: 150,
      category: "Basquet",
    }
  ];

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProductsWithBatch};
