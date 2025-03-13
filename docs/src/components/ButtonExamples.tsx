import { Button } from "essential-materials";
import "../../../src/components/basics/Button/Button.css";
import Container from "./Utils/Container";

export function ButtonExamples() {
  const ButtonCodes = {
    Basic: `
    import { Button } from 'essential-materials';

    const App = () => <Button>Boton Basico</Button>

    export default App;
    `,
    Disabled: `
    import { Button } from 'essential-materials';

    const App = () => <Button disabled>Boton Basico</Button>

    export default App;
    `,
    Variant: `
    import { Button } from 'essential-materials';

    const App = () => (
      <div>
        <Button color="primary" variant="filled">Filled</Button>
        <Button variant="dashed">Dashed</Button>
        <Button variant="outlined">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Button } from 'essential-materials';

    const App = () => (
      <div>
        <Button size="small" color="primary">Pequeño</Button>
        <Button size="medium" color="primary">Mediano</Button>
        <Button size="large" color="primary">Grande</Button>
      </div>
    );

    export default App;
    `,
    Colors: `
    import { Button } from 'essential-materials';

    const App = () => (
      <div>
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
    );

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
        description="Uso basico del Button. "
        code={ButtonCodes.Basic}
      >
        <Button>Boton Basico</Button>
      </Container>
      <Container
        title="Desabilitado"
        description="Boton desabilitado. "
        code={ButtonCodes.Disabled}
      >
        <Button disabled>Boton Basico</Button>
      </Container>
      <Container
        title="Variantes"
        description="Todas las variantes que se pueden colocar."
        code={ButtonCodes.Variant}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <Button color="primary" variant="filled">
            Filled
          </Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="outlined">Outline</Button>
          <Button variant="text">Text</Button>
        </div>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={ButtonCodes.Sizes}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Button size="small" color="primary">
            Pequeño
          </Button>
          <Button size="medium" color="primary">
            Mediano
          </Button>
          <Button size="large" color="primary">
            Grande
          </Button>
        </div>
      </Container>
      <Container
        title="Colores"
        description='Se puede elegir entre tres colores "Default", "Primary", "Secondary".'
        code={ButtonCodes.Colors}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </div>
      </Container>
    </div>
  );
}
