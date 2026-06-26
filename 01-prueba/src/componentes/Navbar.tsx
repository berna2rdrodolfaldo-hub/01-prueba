function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MiTienda</h2>
      </div>

      <div className="menu">
        <button>Perfil</button>
        <button>Carrito</button>
        <button>Contactos</button>
      </div>
    </nav>
  );
}

export default Navbar;