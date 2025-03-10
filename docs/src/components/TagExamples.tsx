import { Tag } from "essential-materials";
import "../../../src/components/basics/Tag/Tag.css";
import Container from "./Utils/Container";

export function TagExamples() {
  const TagCodes = {
    Basic: `
    import { Tag } from 'essential-materials';

    const App = () => <Tag>Etiqueta</Tag>

    export default App;
    `,
    Variant: `
    import { Tag } from 'essential-materials';

    const App = () => (
      <div>
        <Tag variant="default">default</Tag>
        <Tag variant="primary">Primaria</Tag>
        <Tag variant="secondary">Secundaria</Tag>
        <Tag variant="success">Exito</Tag>
        <Tag variant="warning">Advertencia</Tag>
        <Tag variant="info">informacion</Tag>
        <Tag variant="error">Error</Tag>
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Tag } from 'essential-materials';

    const App = () => (
      <div>
        <Tag size="small" variant="primary">Pequeño</Tag>
        <Tag size="medium" variant="primary">Mediano</Tag>
        <Tag size="large" variant="primary">Grande</Tag>
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
        description="Uso basico del Tag. "
        code={TagCodes.Basic}
      >
        <Tag>Etiqueta</Tag>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={TagCodes.Sizes}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Tag size="small" variant="primary">
            Pequeño
          </Tag>
          <Tag size="medium" variant="primary">
            Mediano
          </Tag>
          <Tag size="large" variant="primary">
            Grande
          </Tag>
        </div>
      </Container>
      <Container
        title="Variantes"
        description="Todas las cariantes que se pueden colocar."
        code={TagCodes.Variant}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Tag variant="default">default</Tag>
          <Tag variant="primary">Primaria</Tag>
          <Tag variant="secondary">Secundaria</Tag>
          <Tag variant="success">Exito</Tag>
          <Tag variant="warning">Advertencia</Tag>
          <Tag variant="info">informacion</Tag>
          <Tag variant="error">Error</Tag>
        </div>
      </Container>
    </div>
  );
}
