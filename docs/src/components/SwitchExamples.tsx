import { Switch } from "essential-materials";
import "../../../src/components/basics/Switch/Switch.css";
import Container from "./Utils/Container";

export function SwitchExamples() {
  const SwitchCodes = {
    Basic: `
    import { Switch } from 'essential-materials';

    const App = () => <Switch checked={true} />

    export default App;
    `,
    loading: `
    import { Switch } from 'essential-materials';

    const App = () => (
      <div>
        <Switch checked={true} size="small" loading />
        <Switch checked={false} size="medium" loading />
        <Switch checked={false} size="large" loading />
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Switch } from 'essential-materials';

    const App = () => (
      <div>
        <Switch checked={true} size="small" />
        <Switch checked={true} size="medium" />
        <Switch checked={true} size="large" />
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Switch } from 'essential-materials';

    const App = () => <Switch checked={false} disabled />

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
        description="Uso basico del switch. "
        code={SwitchCodes.Basic}
      >
        <Switch checked={true} />
      </Container>
      <Container
        title="Desabilitado"
        description="Switch desabilitado."
        code={SwitchCodes.Disable}
      >
        <Switch checked={false} disabled />
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={SwitchCodes.Sizes}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Switch checked={true} size="small" />
          <Switch checked={true} size="medium" />
          <Switch checked={true} size="large" />
        </div>
      </Container>
      <Container
        title="Loading"
        description="Se puede agregar animacion de carga en el switch."
        code={SwitchCodes.loading}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Switch checked={true} size="small" loading />
          <Switch checked={false} size="medium" loading />
          <Switch checked={false} size="large" loading />
        </div>
      </Container>
    </div>
  );
}
