import { Label } from "essential-materials";
import "../../../src/components/basics/Label/Label.css";
import Container from "./Utils/Container";

export function LabelExamples() {
  const LabelCodes = {
    Basic: `
    import { Label } from 'essential-materials';

    const App = () => <Label htmlFor="nombre">Nombre</Label>

    export default App;
    `,
    Weight: `
    import { Label } from 'essential-materials';

    const App = () => (
      <div>
        <Label weight="light" htmlFor="password">
          Contraseña
        </Label>
        <Label weight="normal" htmlFor="password">
          Contraseña
        </Label>
        <Label weight="medium" htmlFor="password">
          Contraseña
        </Label>
        <Label weight="bold" htmlFor="password">
          Contraseña
        </Label>
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Label } from 'essential-materials';

    const App = () => (
      <div>
        <Label size="small" htmlFor="email">
          Correo Electrónico
        </Label>
        <Label size="medium" htmlFor="email">
          Correo Electrónico
        </Label>
        <Label size="large" htmlFor="email">
          Correo Electrónico
        </Label>
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Label } from 'essential-materials';

    const App = () => <Label disabled htmlFor="usuario">Usuario</Label>

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
        description="Uso basico del label. "
        code={LabelCodes.Basic}
      >
        <Label htmlFor="nombre">Nombre</Label>
      </Container>
      <Container
        title="Desabilitado"
        description="Label desabilitado."
        code={LabelCodes.Disable}
      >
        <Label disabled htmlFor="usuario">
          Usuario
        </Label>
      </Container>
      <Container
        title="Font Weight"
        description='Grosor de la letra: "light", "normal", "medium", "bold".'
        code={LabelCodes.Weight}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Label weight="light" htmlFor="password">
            Contraseña
          </Label>
          <Label weight="normal" htmlFor="password">
            Contraseña
          </Label>
          <Label weight="medium" htmlFor="password">
            Contraseña
          </Label>
          <Label weight="bold" htmlFor="password">
            Contraseña
          </Label>
        </div>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={LabelCodes.Sizes}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Label size="small" htmlFor="email">
            Correo Electrónico
          </Label>
          <Label size="medium" htmlFor="email">
            Correo Electrónico
          </Label>
          <Label size="large" htmlFor="email">
            Correo Electrónico
          </Label>
        </div>
      </Container>
    </div>
  );
}
