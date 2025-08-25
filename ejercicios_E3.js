const usuarios =[
{
    "id": "doc1",
    "nombre": "Juan Pérez",
    "edad": 28,
    "activo": true,
    "saldo": 150.75,
    "direccion": {
    "calle": "Avenida Principal 456",
    "ciudad": "Madrid",
    "pais": "España",
      "codigoPostal": "28001",
      "coordenadas": {
        "latitud": 40.4168,
        "longitud": -3.7038
      }
    },
    "intereses": ["deportes", "lectura", "viajes"],
    "amigos": [
      {
        "nombre": "Ana García",
        "edad": 26,
        "relacion": "mejor amiga"
      },
      {
        "nombre": "Carlos López",
        "edad": 29,
        "relacion": "compañero de trabajo"
      }
    ],
    "historialCompras": [
      {
        "producto": "Libro de programación",
        "precio": 25.99,
        "fecha": "2025-01-15T14:30:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      },
      {
        "producto": "Auriculares inalámbricos",
        "precio": 89.50,
        "fecha": "2025-03-22T09:45:00Z",
        "detalles": {
          "cantidad": 2,
          "envio": false
        }
      }
    ],
    "puntuacion": null,
    "ultimoAcceso": "2025-08-20T13:16:00Z"
  },
  {
    "id": "doc2",
    "nombre": "María Rodríguez",
    "edad": 35,
    "activo": false,
    "saldo": 320.00,
    "direccion": {
      "calle": "Calle Secundaria 789",
      "ciudad": "Barcelona",
      "pais": "España",
      "codigoPostal": "08001",
      "coordenadas": {
        "latitud": 41.3851,
        "longitud": 2.1734
      }
    },
    "intereses": ["cocina", "música", "arte"],
    "amigos": [
      {
        "nombre": "Luis Martínez",
        "edad": 34,
        "relacion": "esposo"
      },
      {
        "nombre": "Sofía Hernández",
        "edad": 32,
        "relacion": "hermana"
      },
      {
        "nombre": "Pedro Sánchez",
        "edad": 36,
        "relacion": "amigo de la infancia"
      }
    ],
    "historialCompras": [
      {
        "producto": "Pinturas acrílicas",
        "precio": 45.20,
        "fecha": "2025-02-10T11:20:00Z",
        "detalles": {
          "cantidad": 3,
          "envio": true
        }
      }
    ],
    "puntuacion": 4.5,
    "ultimoAcceso": "2025-07-15T18:45:00Z"
  },
  {
    "id": "doc3",
    "nombre": "Alberto Gómez",
    "edad": 42,
    "activo": true,
    "saldo": -50.25,
    "direccion": {
      "calle": "Plaza Mayor 123",
      "ciudad": "Valencia",
      "pais": "España",
      "codigoPostal": "46001",
      "coordenadas": {
        "latitud": 39.4699,
        "longitud": -0.3763
      }
    },
    "intereses": ["tecnología", "cine", "fotografía"],
    "amigos": [],
    "historialCompras": [
      {
        "producto": "Cámara DSLR",
        "precio": 599.99,
        "fecha": "2025-04-05T16:10:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      },
      {
        "producto": "Trípode",
        "precio": 79.99,
        "fecha": "2025-04-12T10:55:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": false
        }
      },
      {
        "producto": "Lentes adicionales",
        "precio": 199.00,
        "fecha": "2025-05-01T14:00:00Z",
        "detalles": {
          "cantidad": 2,
          "envio": true
        }
      }
    ],
    "puntuacion": 3.8,
    "ultimoAcceso": "2025-08-19T22:30:00Z"
  },
  {
    "id": "doc4",
    "nombre": "Elena Fernández",
    "edad": 19,
    "activo": true,
    "saldo": 0.00,
    "direccion": {
      "calle": "Calle Universitaria 567",
      "ciudad": "Sevilla",
      "pais": "España",
      "codigoPostal": "41001",
      "coordenadas": {
        "latitud": 37.3891,
        "longitud": -5.9845
      }
    },
    "intereses": ["estudios", "deportes extremos", "videojuegos"],
    "amigos": [
      {
        "nombre": "Raúl Díaz",
        "edad": 20,
        "relacion": "compañero de clase"
      }
    ],
    "historialCompras": [],
    "puntuacion": null,
    "ultimoAcceso": "2025-08-20T08:15:00Z"
  },
  {
    "id": "doc5",
    "nombre": "Francisco Ruiz",
    "edad": 55,
    "activo": false,
    "saldo": 1000.50,
    "direccion": {
      "calle": "Avenida Retiro 890",
      "ciudad": "Bilbao",
      "pais": "España",
      "codigoPostal": "48001",
      "coordenadas": {
        "latitud": 43.2630,
        "longitud": -2.9350
      }
    },
    "intereses": ["jardinería", "lectura histórica", "viajes culturales"],
    "amigos": [
      {
        "nombre": "Isabel Moreno",
        "edad": 53,
        "relacion": "esposa"
      },
      {
        "nombre": "Javier Navarro",
        "edad": 56,
        "relacion": "amigo de trabajo"
      },
      {
        "nombre": "Carmen Ortega",
        "edad": 54,
        "relacion": "vecina"
      },
      {
        "nombre": "Miguel Pérez",
        "edad": 57,
        "relacion": "compañero de club"
      }
    ],
    "historialCompras": [
      {
        "producto": "Libro de historia antigua",
        "precio": 35.00,
        "fecha": "2025-06-18T13:40:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": false
        }
      },
      {
        "producto": "Herramientas de jardinería",
        "precio": 120.75,
        "fecha": "2025-07-02T15:25:00Z",
        "detalles": {
          "cantidad": 1,
          "envio": true
        }
      }
    ],
    "puntuacion": 4.9,
    "ultimoAcceso": "2025-06-30T19:50:00Z"
  }
]

const obtenerNombrePrimerUsuario = () =>
   usuarios[0].nombre;

const obtenerCiudadUsuarioDoc2 = () =>
   usuarios.find(u => u.id === "doc2").direccion.ciudad;

const obtenerPrimerInteresDoc3 = () => 
  usuarios.find(u => u.id === "doc3").intereses[0];

const obtenerNombreSegundoAmigoDoc5 = () => 
  usuarios.find(u => u.id === "doc5").amigos[1].nombre;

const obtenerPrecioPrimerProductoDoc1 = () =>
   usuarios.find(u => u.id === "doc1").historialCompras[0].precio;

const obtenerLatitudDoc4 = () => 
  usuarios.find(u => u.id === "doc4").direccion.coordenadas.latitud;

const obtenerPuntuacionDoc2 = () => 
  usuarios.find(u => u.id === "doc2").puntuacion;

const obtenerFechaSegundoElementoDoc3 = () => 
  usuarios.find(u => u.id === "doc3").historialCompras[1].fecha;

const obtenerEnvioPrimeraCompraDoc5 = () => 
  usuarios.find(u => u.id === "doc5").historialCompras[0].detalles.envio;

const obtenerSaldoDoc4 = () => 
  usuarios.find(u => u.id === "doc4").saldo;

// Ejemplo de uso
console.log(obtenerNombrePrimerUsuario()); // Juan Pérez
console.log(obtenerCiudadUsuarioDoc2()); // Barcelona
console.log(obtenerPrimerInteresDoc3()); // tecnología
console.log(obtenerNombreSegundoAmigoDoc5()); // Javier Navarro
console.log(obtenerPrecioPrimerProductoDoc1()); // 25.99
console.log(obtenerLatitudDoc4()); // 37.3891
console.log(obtenerPuntuacionDoc2()); // 4.5
console.log(obtenerFechaSegundoElementoDoc3()); // 2025-04-12
console.log(obtenerEnvioPrimeraCompraDoc5()); // false
console.log(obtenerSaldoDoc4()); // 0.00
