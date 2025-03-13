import { Select } from "essential-materials";
import "../../../src/components/basics/Select/Select.css";
import Container from "./Utils/Container";

export function SelectExamples() {
  const SelectCodes = {
    Basic: `
    import { Select } from 'essential-materials';

    const App = () => <Select name="frutas" options={[
            { label: "Manzana", value: "manzana" },
            { label: "Banana", value: "banana" },
            { label: "Uva", value: "uva" },
          ]}
        />

    export default App;
    `,
    Sizes: `
    import { Select } from 'essential-materials';

    const App = () => (
      <div>
        <Select
          name="paises"
          size="small"
          placeholder="Seleccione un país"
          options={[
            { label: "Colombia", value: "colombia" },
            { label: "México", value: "mexico" },
            { label: "Argentina", value: "argentina" },
          ]}
        />
        <Select
          name="paises"
          size="medium"
          placeholder="Seleccione un país"
          options={[
            { label: "Colombia", value: "colombia" },
            { label: "México", value: "mexico" },
            { label: "Argentina", value: "argentina" },
          ]}
        />
        <Select
          name="paises"
          size="large"
          placeholder="Seleccione un país"
          options={[
            { label: "Colombia", value: "colombia" },
            { label: "México", value: "mexico" },
            { label: "Argentina", value: "argentina" },
          ]}
        />
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Select } from 'essential-materials';

    const App = () => (
      <div>
        <h4>Select Deshabilitado</h4>
        <Select
          name="deshabilitado"
          disabled
          options={[
            { label: "Opción 1", value: "opcion1" },
            { label: "Opción 2", value: "opcion2" },
          ]}
        />
        <h4>Select con una Opción Deshabilitada</h4>
        <Select
          name="colores"
          options={[
            { label: "Rojo", value: "rojo" },
            { label: "Verde", value: "verde", disabled: true },
            { label: "Azul", value: "azul" },
          ]}
        />
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
        description="Uso basico del select. "
        code={SelectCodes.Basic}
      >
        <Select
          name="frutas"
          options={[
            { label: "Manzana", value: "manzana" },
            { label: "Banana", value: "banana" },
            { label: "Uva", value: "uva" },
          ]}
        />
      </Container>
      <Container
        title="Desabilitado"
        description="Select desabilitado y Opcion desabilitado."
        code={SelectCodes.Disable}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <span>Select Deshabilitado</span>
          <Select
            name="deshabilitado"
            disabled
            options={[
              { label: "Opción 1", value: "opcion1" },
              { label: "Opción 2", value: "opcion2" },
            ]}
          />
          <span>Select con una Opción Deshabilitada</span>
          <Select
            name="colores"
            options={[
              { label: "Rojo", value: "rojo" },
              { label: "Verde", value: "verde", disabled: true },
              { label: "Azul", value: "azul" },
            ]}
          />
        </div>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={SelectCodes.Sizes}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Select
            name="paises"
            size="small"
            placeholder="Seleccione un país"
            options={[
              { label: "Colombia", value: "colombia" },
              { label: "México", value: "mexico" },
              { label: "Argentina", value: "argentina" },
            ]}
          />
          <Select
            name="paises"
            size="medium"
            placeholder="Seleccione un país"
            options={[
              { label: "Colombia", value: "colombia" },
              { label: "México", value: "mexico" },
              { label: "Argentina", value: "argentina" },
            ]}
          />
          <Select
            name="paises"
            size="large"
            placeholder="Seleccione un país"
            options={[
              { label: "Colombia", value: "colombia" },
              { label: "México", value: "mexico" },
              { label: "Argentina", value: "argentina" },
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
