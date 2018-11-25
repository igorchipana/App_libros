import React from 'react';
 

const styles = {
    color: "black",
    marginTop: "50px",
    marginLeft: "0px",
    float: "center",
    fontSize: "18px"
};
const LibroList = (props) => {
  return (

    <div  className="well" style={styles}> 
      <legend className="text-center header" >Lista de Libros registrados</legend>
              <div>
                      <table className="table table-striped"  >
                      <thead className="thead-dark">
                            <tr>
                              <th scope="col">Nombre del Libro</th>
                              <th scope="col">Descripción</th>
                              <th scope="col">Categoria</th>
                              <th scope="col">Autor</th>
                              <th scope="col">Precio</th>
                            </tr>
                          </thead>
     
      {
                
        props.libros.map((libro) => {
          return (
                        <tbody >
                      <tr>
                       <td key={libro.id}>{libro.nombre}</td>
                       <td>{libro.descripcion}</td>
                       <td>{libro.categoria}</td>
                       <td>{libro.autor}</td>
                       <td>{libro.costo}</td>
                       </tr>
                        </tbody> 
          )
        })

      }
                </table>
                     
        </div>

    </div>

 
  )
};
 
export default LibroList;

