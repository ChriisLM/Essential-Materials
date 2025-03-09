import { Radio } from "essential-materials";
import "../../../src/components/basics/Label/Label.css";
import Container from "./Utils/Container";

export function RadioExamples() {
  const RadioCodes = {
    Basic: `
    import { Radio } from 'essential-materials';

    const App = () => <Radio name="opcionA" checked label="Opción 1" />

    export default App;
    `,
    States: `
    import { Radio } from 'essential-materials';

    const App = () => (
      <div>
        <Radio name="opcion1" size="small" label="Marcado" checked />
        <Radio name="opcion2" size="small" label="Desabilitado" disabled />
        <Radio name="opcion3" size="small" label="Requerido" required />
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Radio } from 'essential-materials';

    const App = () => (
      <div>
        <Radio size="small" label="Pequeño" />
        <Radio size="medium" label="Mediano" />
        <Radio size="large" label="Grande" />
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Radio } from 'essential-materials';

    const App = () => <Radio disabled label="Opción 1" />

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
        description="Uso basico del radio. "
        code={RadioCodes.Basic}
      >
        <Radio name="opcionA" checked label="Opción 1" />
      </Container>
      <Container
        title="Desabilitado"
        description="Radio desabilitado."
        code={RadioCodes.Disable}
      >
        <Radio disabled label="Opción 1" />
      </Container>
      <Container
        title="Estados"
        description="Tres estados que se pueden añadir a radio."
        code={RadioCodes.States}
      >
        <div style={{ display: "flex", columnGap: "10px" }}>
          <Radio name="opcion1" size="small" label="Marcado" checked />
          <Radio name="opcion2" size="small" label="Desabilitado" disabled />
          <Radio name="opcion3" size="small" label="Requerido" required />
        </div>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={RadioCodes.Sizes}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Radio size="small" label="Pequeño" />
          <Radio size="medium" label="Mediano" />
          <Radio size="large" label="Grande" />
        </div>
      </Container>
    </div>
  );
}
