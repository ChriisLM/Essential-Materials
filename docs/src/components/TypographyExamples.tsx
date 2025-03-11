import { Typography } from "essential-materials";
import "../../../src/components/basics/Typography/Typography.css";
import Container from "./Utils/Container";

export function TypographyExamples() {
  const TypographyCodes = {
    Variant: `
    import { Typography } from 'essential-materials';

    const App = () => (
      <div>
        <Typography variant="body">Body</Typography>
        <Typography variant="caption">Caption</Typography>
        <Typography variant="overline">Overline</Typography>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
      </div>
    );

    export default App;
    `,
    Weight: `
    import { Typography } from 'essential-materials';

    const App = () => (
      <div>
        <Typography weight="light">Texto</Typography>
        <Typography weight="normal">Texto</Typography>
        <Typography weight="medium">Texto</Typography>
        <Typography weight="bold">Texto</Typography>
      </div>
    );

    export default App;
    `,
    Transform: `
    import { Typography } from 'essential-materials';

    const App = () => (
      <div>
        <Typography transform="capitalize">texto</Typography>
        <Typography transform="uppercase">texto</Typography>
        <Typography transform="lowercase">TEXTO</Typography>
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
        title="Variantes"
        description="Las variantes permitidas para typography. "
        code={TypographyCodes.Variant}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="body">Body</Typography>
          <Typography variant="caption">Caption</Typography>
          <Typography variant="overline">Overline</Typography>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="h3">h3</Typography>
          <Typography variant="h4">h4</Typography>
          <Typography variant="h5">h5</Typography>
          <Typography variant="h6">h6</Typography>
        </div>
      </Container>
      <Container
        title="Font Weight"
        description='Grosor de la letra: "light", "normal", "medium", "bold".'
        code={TypographyCodes.Weight}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography weight="light">Texto</Typography>
          <Typography weight="normal">Texto</Typography>
          <Typography weight="medium">Texto</Typography>
          <Typography weight="bold">Texto</Typography>
        </div>
      </Container>
      <Container
        title="Transformacion"
        description="Opcion de transformar el texto en mayusculas, minusculas o capitalize."
        code={TypographyCodes.Transform}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography transform="capitalize">texto</Typography>
          <Typography transform="uppercase">texto</Typography>
          <Typography transform="lowercase">TEXTO</Typography>
        </div>
      </Container>
    </div>
  );
}
