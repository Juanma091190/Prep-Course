// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  z = palabras[0];
  for (i = 1; i < palabras.length; i++){
    z = z + ' ' +palabras[i];
  }
  return z;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  z = false;
  for (i = 0; i < array.length; i++){
    z = z || (array[i] === elemento);
  }
  return z;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  z = 0 ;
  for (i = 0; i < numeros.length; i++){
    z = z + numeros[i];
  }
  return z;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  z = 0;
  for (i = 0; i < resultadosTest.length; i++){
    z = z + resultadosTest[i];
  }
  z = z/resultadosTest.length
    return z;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  z = Math.min(z, numeros[0]);
  for (i = 0; i < numeros.length; i++){
    z = Math.max(z, numeros[i]);
  }
  return z;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  z = 0
  if (arguments.length === 0) {
    z = 0;
  } else {
    z = 1;
    for (i = 0; i < arguments.length; i++){
      z = z * arguments[i];
    }
  }
  return z;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  z = 0
  arreglo.forEach(element => {
    if (element > 18) {
      z = z + 1;
    }     
  });
  return z;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia >=2 && numeroDeDia <= 6) {
      return "Es dia Laboral";
    }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  texto = n.toString();
  arreglo = texto.split('');
  if (arreglo[0] === '9') {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  x = arreglo[0];
  arreglo.forEach(elemento => {
    if (x === elemento) {
      z = true;
    } else {
      z = false;
    }
  });
  return z;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  z = [];
  x1 = false;
  x2 = false;
  x3 = false;
  
  array.forEach(element => {
    if(element === 'Enero' || element === 'Marzo' || element === 'Noviembre') {
      z.push(element);
    } 
  });
  
  array.forEach(element => {
    x1 = x1 || element === 'Enero';   
  });
  
  array.forEach(element => {
    x2 = x2 || element === 'Marzo';   
  });
  
  array.forEach(element => {
    x3 = x3 || element === 'Noviembre';   
  });
  
  if (x1 && x2 && x3) {
    return z;
  } else {
    return 'No se encontraron los meses pedidos';
  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  z = [];
  
  array.forEach(element => {
    if(element > 100) {
      z.push(element);
    } 
  });

  return z;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  z = [];
  for (i = 0; i < 10; i++){
    if (numero === i) {
      return 'Se interrumpió la ejecución';
      break;
    }
    numero = numero + 2;
    z.push(numero);
  }
  return z;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  z = [];
  for (i = 0; i < 10; i++){
    if (i === 5) {
      continue;
    }
    numero = numero + 2;
    z.push(numero);
  }
  return z;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
