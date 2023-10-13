import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/clientes">
          <li>Clientes</li>
        </Link>
        <Link to="/productos">
          <li>Productos</li>
        </Link>
        <Link to="/empresa">
          <li>Empresa</li>
        </Link>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
