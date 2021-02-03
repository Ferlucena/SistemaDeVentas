/**
 * SISTEMA DE VENTAS CON JAVASCRIPT
 * @author FerLucena
 * @version 1.0
 * @date 02/21
 *
 */

 class Producto{
     static contadorProductos = 0;

     constructor(nombre, precio){
         this._idProducto = ++Producto.contadorProductos;
         this._nombre = nombre;
         this._precio = precio;        
     }

     //Getters
     get idProducto(){
         return this._idProducto;
     }
     get nombre(){
         return this._nombre;
     }
     get precio(){
         return this._precio
     }
 }
 