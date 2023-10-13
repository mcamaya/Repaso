import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Saludo from "./components/Saludo";
import Navbar from "./components/Navbar";
import Clientes from "./components/Clientes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Saludo />} />
      <Route path="/clientes" element={<Clientes />} />
      {/* <Route index path="/home" element={<Saludo />} />
      <Route index path="/home" element={<Saludo />} /> */}
    </Route>
  )
  )

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
