import React from 'react';

const Formulario = () => {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [lista, setLista] = React.useState([]);
  const [usuarioEditado, setUsuarioEditado] = React.useState(null);

  const registrarDatos = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      alert('Ingrese nombre');
      return;
    }
    if (!apellido.trim()) {
      alert('Ingrese apellido');
      return;
    }
    if (usuarioEditado) {
      const listaActualizada = lista.map((usuario, index) => {
        if (index === lista.indexOf(usuarioEditado)) {
          return { nombre, apellido };
        }
        return usuario;
      });
      setLista(listaActualizada);
      setUsuarioEditado(null);
    } else {
      setLista([
        ...lista,
        { nombre: nombre, apellido: apellido }
      ]);
    }
    setNombre('');
    setApellido('');
  };

  const editarUsuario = (index) => {
    const usuario = lista[index];
    setUsuarioEditado(usuario);
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
  };

  const eliminarUsuario = (index) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (confirmacion) {
      const listaActualizada = lista.filter((usuario, i) => i !== index);
      setLista(listaActualizada);
    }
  };

  return (
    <div className='container'>
      <h2>Formulario</h2>
      <form onSubmit={registrarDatos}>
        <input
          type='text'
          placeholder='Ingrese su nombre'
          className='form-control mb-3'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type='text'
          placeholder='Ingrese su Apellido'
          className='form-control mb-3'
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <div className='d-grip gap-2'>
          <button className='btn btn-outline-primary'>
            Registrar
          </button>
        </div>
      </form>
      <hr />
      <h2>Listado de usuarios</h2>
      <ol>
        {lista.map((elemento, index) => (
          <li key={index}>
            {elemento.nombre} {elemento.apellido}
            <div className="d-grip gap-2">
              <br /><button className='btn btn-outline-primary' onClick={() => editarUsuario(index)}>
                Editar
              </button>
              <br /><button className='btn btn-outline-primary' onClick={() => eliminarUsuario(index)}>
                Eliminar
              </button> 
            </div>                                             
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Formulario;

