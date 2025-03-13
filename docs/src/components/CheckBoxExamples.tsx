import { Checkbox } from "essential-materials";
import "../../../src/components/basics/Checkbox/Checkbox.css";
import Container from "./Utils/Container";

export function CheckboxExamples() {
  const CheckedCodes = {
    Basic: `
    import { Checkbox } from 'essential-materials';

    const App = () => <Checkbox size="small" name="checkbox" label="Basico" />

    export default App;
    `,
    Sizes: `
    import { Checkbox } from 'essential-materials';

    const App = () => (
      <div>
        <Checkbox name="small" size="small" label="Pequeño" />
        <Checkbox name="medium" size="medium" label="Mediano" />
      </div>
    );

    export default App;
    `,
    States: `
    import { Checkbox } from 'essential-materials';

    const App = () => (
      <div>
        <Checkbox name="checked" checked label="Marcado" />
        <Checkbox name="disabled" disabled label="Deshabilitado" />
        <Checkbox name="required" required label="Requerido" />
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
        description="Uso basico del checkbox"
        code={CheckedCodes.Basic}
      >
        <Checkbox name="basic" label="Checkbox básico" />
      </Container>
      <Container
        title="Tamaños"
        description="Los dos tamaños posibles para checkbox"
        code={CheckedCodes.Sizes}
      >
        <div style={{ display: "flex", columnGap: "10px" }}>
          <Checkbox name="small" size="small" label="Pequeño" />
          <Checkbox name="medium" size="medium" label="Mediano" />
        </div>
      </Container>
      <Container
        title="Estados"
        description="Tres estados que se pueden añadir a checkbox"
        code={CheckedCodes.States}
      >
        <div style={{ display: "flex", columnGap: "10px" }}>
          <Checkbox name="checked" checked label="Marcado" />
          <Checkbox name="disabled" disabled label="Deshabilitado" />
          <Checkbox name="required" required label="Requerido" />
        </div>
      </Container>
    </div>
  );
}
