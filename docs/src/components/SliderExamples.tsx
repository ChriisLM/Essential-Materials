import { Slider } from "essential-materials";
import "../../../src/components/basics/Slider/Slider.css";
import Container from "./Utils/Container";

export function SliderExamples() {
  const SliderCodes = {
    Basic: `
    import { Slider } from 'essential-materials';

    const App = () => <Slider min={0} max={100} value={50} />

    export default App;
    `,
    Steps: `
    import { Slider } from 'essential-materials';

    const App = () => (
      <div>
        <h4>Step en 0.5</h4>
        <Slider min={0} max={10} step={0.5} value={5} />
        <h4>Step en 1</h4>
        <Slider min={0} max={10} step={1} value={5} />
      </div>
    );

    export default App;
    `,
    Marks: `
    import { Slider } from 'essential-materials';

    const App = () => (
      <div>
        <Slider
          min={0}
          max={100}
          value={20}
          marks={{ 0: "Bajo", 50: "Medio", 100: "Alto" }}
        />
        <Slider
          min={0}
          max={100}
          value={80}
          marks={{ 0: "Minimo", 100: "Maximo" }}
        />
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Slider } from 'essential-materials';

    const App = () => <Slider min={0} max={100} value={30} disabled />

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
        description="Uso basico del slider. "
        code={SliderCodes.Basic}
      >
        <Slider min={0} max={100} value={50} />
      </Container>
      <Container
        title="Desabilitado"
        description="Radio desabilitado."
        code={SliderCodes.Disable}
      >
        <Slider min={0} max={100} value={30} disabled />
      </Container>
      <Container
        title="Pasos"
        description="Se puede personalizar el aumento que hace el slider."
        code={SliderCodes.Steps}
      >
        <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <span>Step en 0.5</span>
          <Slider min={0} max={10} step={0.5} value={5} />
          <span>Step en 1</span>
          <Slider min={0} max={10} step={1} value={5} />
        </div>
      </Container>
      <Container
        title="Marcas"
        description="Se pueden asignar marcas de interes bajo el slider."
        code={SliderCodes.Marks}
      >
        <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <Slider
            min={0}
            max={100}
            value={20}
            marks={{ 0: "Bajo", 50: "Medio", 100: "Alto" }}
          />
          <Slider
            min={0}
            max={100}
            value={80}
            marks={{ 0: "Minimo", 100: "Maximo" }}
          />
        </div>
      </Container>
    </div>
  );
}
