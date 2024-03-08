import { Formulario } from "../src/components/formulario.jsx";
import { Nav } from "../src/components/nav.jsx"
export const App = () => {
    return (
      <>
        <main className="w-100 mb-5">
          <Nav />
          <Formulario />
        </main>
      </>
    );
};
