import React from 'react';

const stylesboton = {
    
     float:"right"
};

const styles1 = {
    
     marginTop:"0px"
};
 
const styles2 = {
    
     background:"#D3D3D3",
     marginTop:"30px",
     padding:"50px"
}; 
const styles3 = {
    
     marginTop:"10px"
};





const AddLibro = (props) => {
  return (
   <div class="col-md-12">
                     <div class="well well-sm">
                   <form className="form-horizontal" style={styles2} onSubmit={(event) => props.addLibro(event)}>
                    
                            <fieldset>
                              <legend class="text-center header">Registro de libros</legend>
                            <div className="col-md-12">
                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                <div>
                                    <input id="producto" id="nombre" name="nombre" type="text" placeholder="Nombre del libro" className="form-control" require value={props.nombre} onChange={props.handleChange}></input>
                                </div>
                            </div>
                            <div className="form-group" className="col-md-12" style={styles3}>
                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                <div>
                                    <input  id="autor" name="autor" type="text" placeholder="Autor del libro" className="form-control" require value={props.autor}  onChange={props.handleChange}></input>
                                </div>
                            </div>
                            <div className="form-group" className="col-md-12" style={styles3}>
                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                <div >
                                    <input id="costo" name="costo" type="number" placeholder="Precio del libro" className="form-control" require value={props.costo} onChange={props.handleChange}></input>
                                </div>
                            </div>

    
                            <div className="form-group" className="col-md-12" style={styles3}>
                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                <div>
                                    <textarea className="form-control" id="descripcion" name="descripcion" placeholder="Descripcion del libro" rows="7" require value={props.descripcion} onChange={props.handleChange}></textarea>
                                </div>
                            </div>

                            <div  className="form-group" className="col-md-12" style={styles3} >
                            <h4  type="text" >Seleccione Categoria:</h4>
                            </div>

                            <div className="form-group" className="col-md-12"  style={styles1} >
                        
                                <select className="col-md-4" name="categoria"  id="categoria" placeholder="Descripcion del producto"  require value={props.categoria} onChange={props.handleChange}>
                                <option values="option1">Terror</option>
                                <option values="option2">Realismo</option>
                                <option values="option3">Drama</option>
                                <option values="option4">Familia</option>
                                <option values="option5">Educación</option>
                                <option values="option6">Ficcion</option>
                                <option values="option7">Caricatura</option>
                              </select>
                            </div>

                           <div className="form-group" style={stylesboton}>
                                <div class="col-md-12" >
                                    <button type="submit" class="btn btn-primary btn-lg " id="hola">Registrar</button>
                                </div>
                            </div>
                        </fieldset>
                     
                    </form>
                       </div>
                        </div>
               
  )
};

export default AddLibro;