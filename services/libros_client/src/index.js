import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  // nuevo
import LibroList from './components/LibroList'; 
import AddLibro from './components/AddLibro';
 
class App extends Component {

  constructor() {
	super();
 this.state = {
    libros: [],
    autor: '',
    nombre: '',
    costo: '',
    descripcion: '',
    categoria: '',
    };

   this.handleChange = this.handleChange.bind(this);
   this.addLibro = this.addLibro.bind(this);  
	
  }


  componentDidMount() {
   this.getLibros();
	};
	
	handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  addLibro(event) {
    event.preventDefault();
    //console.log('sanity check!');
  //  console.log(this.state);
     const data = {
           nombre: this.state.nombre,
           autor: this.state.autor,
           costo: this.state.costo,
           descripcion: this.state.descripcion,
           categoria: this.state.categoria
           };
       var valor =document.getElementById("nombre").value;
       var valor1 =document.getElementById("autor").value;
       var valor2 =document.getElementById("costo").value;
        var valor3 =document.getElementById("descripcion").value;
        var valor4 =document.getElementById("categoria").value;
       console.log(data);
        if(valor== null || valor.length ==0){
          alert("falta data de nombre!!");
        }else if(valor1== null || valor1.length ==0) {
            alert("falta data de autor!!");
        }
        else if(valor2== null || valor2.length ==0){
           alert("falta data de costo!!");
        }else if(valor3== null || valor3.length ==0){
           alert("falta data de descripcion!!");
        }else if(valor4== null || valor4.length ==0){
          alert("falta seleccionar categoria!!");
        }
        else{
        axios.post(`${process.env.REACT_APP_LIBROS_SERVICE_URL}/libros`, data)
        
        .then((res) => {
        this.getLibros(); 
        this.setState({ nombre:'', autor: ' ', costo: ' ', descripcion: ' ', categoria: ' ' });  
        alert("Se registro un  nuevo libro correctamente =)");
        })
        .catch((err) => { console.log(err); });
        }
  };



  getLibros() {
	axios.get(`${process.env.REACT_APP_LIBROS_SERVICE_URL}/libros`)  // new
	.then((res) =>{ this.setState({ libros: res.data.data.libros }); })
	.catch((err) =>{ console.log(err.response); });
   };




 render() {
    return (
      <div className="row"> 
      <div className="col-lg-12">
       <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
       <a className="navbar-brand" href="#">App-Libros</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Bienvenidos<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Revistas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Ultimos</a>
      </li>
     </ul>
    </div>
   </nav>
  </div>
        <div className="col-sm-12">
     
          <div className="col-sm-5">
              <AddLibro
                             nombre={this.state.nombre}
                             autor={this.state.autor}
                             costo={this.state.costo}
                             descripcion={this.state.descripcion}
                             categoria={this.state.categoria}
                             addLibro={this.addLibro}
                             handleChange={this.handleChange} 
                             /> 
          </div>
          <div className="col-sm-7" > <LibroList libros= {this.state.libros}/> </div>
       </div>


        </div>
    )
  }
  
};
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
