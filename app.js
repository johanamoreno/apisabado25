//Se rae el modelo del servidor

const ServidorModelo=require('./models/ServidorModelo.js')

//Se trae el dotenv
require('dotenv').config()
  
//Puedo personalizar mi servidor

const servidorJugadores = new ServidorModelo()

// Encender servidor

servidorJugadores.encerderServidor()
