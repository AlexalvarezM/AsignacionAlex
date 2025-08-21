//asignacion de clase//
const coleccionUsuarios = [
  {
    "id": "doc1",
    "nombre": "Juan Pérez",
    "historialCompras": [
      {
        "productos": [
          {
            "nombre": "Laptop",
            "precio": 999.99
          }
        ]
      }
    ]
  },
  {
    "id": "doc2",
    "nombre": "María López",
    "direccion": {
      "ciudad": "Managua"
    },
    "puntuacion": 4.8
  },
  {
    "id": "doc3",
    "nombre": "Pedro García",
    "intereses": ["tecnología", "deportes"],
    "historialCompras": [
      {
        "fecha": "2025-01-01"
      },
      {
        "fecha": "2025-02-15"
      }
    ]
  },
  {
    "id": "doc4",
    "nombre": "Ana Martínez",
    "direccion": {
      "coordenadas": {
        "lat": 12.152
      }
    },
    "saldo": 250.50
  },
  {
    "id": "doc5",
    "nombre": "Luis Ramírez",
    "amigos": [
      {
        "nombre": "Amigo Uno"
      },
      {
        "nombre": "Amigo Dos"
      }
    ],
    "historialCompras": [
      {
        "detalles": {
          "envio": true
        }
      }
    ]
  }
];

// 1. Obtén el nombre del primer usuario de la colección.
const ejercicio1 = () => {
  const usuario = coleccionUsuarios[0];
  console.log(usuario.nombre);
};

// 2. Accede a la ciudad de la dirección del usuario con id "doc2".
const ejercicio2 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc2");
  console.log(usuario.direccion.ciudad);
};

// 3. Obtén el primer interés del usuario con id "doc3".
const ejercicio3 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc3");
  console.log(usuario.intereses[0]);
};

// 4. Accede al nombre del segundo amigo del usuario con id "doc5".
const ejercicio4 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc5");
  console.log(usuario.amigos[1].nombre);
};

// 5. Obtén el precio del primer producto en el historial de compras del usuario con id "doc1".
const ejercicio5 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc1");
  console.log(usuario.historialCompras[0].productos[0].precio);
};

// 6. Accede a la latitud de las coordenadas de la dirección del usuario con id "doc4".
const ejercicio6 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc4");
  console.log(usuario.direccion.coordenadas.lat);
};

// 7. Obtén la puntuación del usuario con id "doc2".
const ejercicio7 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc2");
  console.log(usuario.puntuacion);
};

// 8. Accede a la fecha del segundo elemento del historial de compras del usuario con id "doc3".
const ejercicio8 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc3");
  console.log(usuario.historialCompras[1].fecha);
};

// 9. Obtén el valor del campo envio en los detalles de la primera compra del usuario con id "doc5".
const ejercicio9 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc5");
  console.log(usuario.historialCompras[0].detalles.envio);
};

// 10. Accede al saldo del usuario con id "doc4".
const ejercicio10 = () => {
  const usuario = coleccionUsuarios.find(u => u.id === "doc4");
  console.log(usuario.saldo);
};
