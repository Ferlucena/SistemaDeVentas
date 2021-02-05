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
         return this._precio;
     }
     //Setters
     set nombre(nombre){
         this._nombre = nombre;
     }
     set precio(precio){
         this._precio = precio;
     }

     toString(){
         return `idProducto: ${this.idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
     }
 }

  /**
   * La relación que existe entre Productos y Orden no es de herencia sino de agregación.
   * En donde los objetos del tipo Producto pueden existir sin necesida de existir un objeto de tipo Orden
   * Por lo que no existirá 'extends'. 
   * El arreglo de productos establecerá la relación de agregación, por lo que una orden podrá tener multiples productos asociados. 
   */
  class Orden{
      static contadorOrdenes = 0;
      static get MAX_PRODUCTOS(){
          return 5;
      }

      constructor(){
          this._idOrden = ++Orden.contadorOrdenes;
          this._productos = [];
          // this._contadorProductosAgregados = 0; --> Variable alternativa cuando no se utliza 'push'
      }

      //ZONA MÉTODOS
      //Getters
      get idOrden(){
          return this._idOrden;
      }

      /** Método para agregar producto */

      agregarProducto (producto){
          if( this._productos.length < Orden.MAX_PRODUCTOS){
              this._productos.push(producto);   //Recordamos la orden Push agrega elementos a un arreglo al final de la lista 
              
              /*this._productos [this._contadorProductosAgregados++] = producto; 
              --> Otra forma de agregar elementos al arreglo aprovechando el contador declarado*/              
          }
          else{
              console.log('No se pueden agregar mas productos');
          }
      }

      /* Con el método siguientes calcularemos el total recorriendo el precio de 
      cada elemento del arreglo mediante un ciclo for, mediante un acumulador
      iremos almacenando el resultado de las sumas parciales y retornará el valor
      total.*/

      calcularTotal(){
          let totalVentas = 0;
          
          //Para recorrer el arreglo utilizamos un ciclo for de sintaxis simplificada para arreglos
          for(let producto of this._productos){
              totalVentas += producto.precio; 
          }
          return totalVentas;
      }

      /* Método, que no retorna nada, solo para imprimir cada elemento de la orden convirtiendo
      cada uno a una cadena para ser impresa */

      mostrarOrden(){
          let productosOrden = '';
          for( let producto of this._productos){
              productosOrden += '\n{'+ producto.toString() + '}';
          }
          console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);

      }

  }

  /*ZONA DE PRUEBAS*/

  let producto1 = new Producto('Pantalón', 100);
  let producto2 = new Producto('Camisa', 150);
  let producto3 = new Producto('Calcetines', 80)
  let producto4 = new Producto('Tshirt',130);
  
  let orden1 = new Orden();

  //Agregando productos
  orden1.agregarProducto(producto1);
  orden1.agregarProducto(producto2);
  orden1.agregarProducto(producto3);
  orden1.agregarProducto(producto4);

  //Imprimiendo la orden
  orden1.mostrarOrden();

  //Creando nueva orden y agregando productos ya declarados
let orden2 = new Orden();

let producto5 = new Producto ('Cinturón', 80);

orden2.agregarProducto(producto5);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto4);

orden2.mostrarOrden();

/*FIN*/



 