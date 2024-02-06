
const express =  require ("express");

const app = express();


app.listen(5173, function (){
    console.log("Servidor creado http://localhost:5173")
})

/* let conexion = mysql.createConnection(
    {
        host: "localhost",
        database: "contacto",
        user: "root"  ,
        password: "armando1gaspar"
     }    
);
 */
/* conexion.connect(function(err){
    if(err){
        console.log("Error de conexión:", err);
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
}); */