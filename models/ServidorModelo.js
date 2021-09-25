const express = require('express')

class ServidorModelo{

    constructor(){
        this.app = express()
        this.enrutarPeticiones()

    }

    encerderServidor(){

        this.app.listen(process.env.PUERTO, function(){

            console.log("Servidor encendido... "+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.get('/avanzada/v1/jugadores', function (req, res) {
            res.send('Peticion de tipo GET (Para Buscar todos los jugadores)')
          })
          
        this.app.get('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('Peticion de tipo GET (Para Buscar un jugador)')
            })
          
        this.app.post('/avanzada/v1/jugadores', function (req, res) {
              res.send('Peticion de tipo POST (Para Insertar)')
            })
          
        this.app.put('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('Peticion de tipo PUT (Para Editar)')
            })
          
        this.app.delete('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('Peticion de tipo DELETE (Para Eliminar)')
            })

    }

    conectarConBD(){

    }

}

module.exports=ServidorModelo