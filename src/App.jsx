import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from "react-router-dom";
import Saludo from "./components/Saludo";
import Navbar from "./components/Navbar";
import Clientes from "./components/Clientes";
import EditarClientes from "./components/EditarClientes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Saludo />} />
      <Route path="clientes" element={<Overlay />}>
        <Route index element={<Clientes />} />
        <Route path="update" element={<EditarClientes />} />
      </Route>
      {/* <Route index path="/home" element={<Saludo />} />
      <Route index path="/home" element={<Saludo />} /> */}
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

function Overlay() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App;
