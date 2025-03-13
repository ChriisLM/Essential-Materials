import { Input } from "essential-materials";
import "../../../src/components/basics/Input/Input.css";
import Container from "./Utils/Container";

export function InputExamples() {
  const InputCodes = {
    Basic: `
    import { Input } from 'essential-materials';

    const App = () => <Input size="small" placeholder="Escribe algo..." />

    export default App;
    `,
    Types: `
    import { Input } from 'essential-materials';

    const App = () => (
      <div>
        <h4>Input Normal</h4>
        <Input type="text" placeholder="Introduce tu nombre" />

        <h4>Input de Email</h4>
        <Input type="email" placeholder="Introduce tu correo" />

        <h4>Input de Contraseña</h4>
        <Input type="password" placeholder="Introduce tu contraseña" />

        <h4>Input de Numero</h4>
        <Input type="number" placeholder="0" />

        <h4>Input de Fecha</h4>
        <Input type="date" />

        <h4>Input de Telefono</h4>
        <Input type="tel" placeholder="Introduce tu telefono" />
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Input } from 'essential-materials';

    const App = () => (
      <div>
        <h4>Input Pequeño</h4>
        <Input size="small" placeholder="Pequeño" />

        <h4>Input Mediano</h4>
        <Input size="medium" placeholder="Mediano" />

        <h4>Input Grande</h4>
        <Input size="large" placeholder="Grande" />
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Input } from 'essential-materials';

    const App = () => <Input placeholder="Desabilitado" type="text" disable />

    export default App;
    `,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridAutoRows: "min-content",
        width: "100%",
        gap: "20px 20px",
      }}
    >
      <Container
        title="Basico"
        description="Uso basico del input. "
        code={InputCodes.Basic}
      >
        <Input size="small" placeholder="Escribe algo..." />
      </Container>
      <Container
        title="Desabilitado"
        description="Input desabilitado."
        code={InputCodes.Disable}
      >
        <Input placeholder="Desabilitado" type="text" disable />
      </Container>
      <Container
        title="Tipos"
        description="Los distintos tipos de input que se pueden colocar."
        code={InputCodes.Types}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <h4>Input Normal</h4>
          <Input type="text" placeholder="Introduce tu nombre" />

          <h4>Input de Email</h4>
          <Input type="email" placeholder="Introduce tu correo" />

          <h4>Input de Contraseña</h4>
          <Input type="password" placeholder="Introduce tu contraseña" />

          <h4>Input de Numero</h4>
          <Input type="number" placeholder="0" />

          <h4>Input de Fecha</h4>
          <Input type="date" />

          <h4>Input de Telefono</h4>
          <Input type="tel" placeholder="Introduce tu telefono" />
        </div>
      </Container>
      <Container
        title="Tamaños"
        description="Se puede colocar en tres tamaños."
        code={InputCodes.Sizes}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <h4>Input Pequeño</h4>
          <Input size="small" placeholder="Pequeño" />

          <h4>Input Mediano</h4>
          <Input size="medium" placeholder="Mediano" />

          <h4>Input Grande</h4>
          <Input size="large" placeholder="Grande" />
        </div>
      </Container>
    </div>
  );
}
