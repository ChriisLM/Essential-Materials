import { Divider } from "essential-materials";
import "../../../src/components/basics/Divider/Divider.css";
import Container from "./Utils/Container";

export function DividerExamples() {
  const DividerCodes = {
    Variant: `
    import { Divider } from 'essential-materials';

    const App = () => (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider variant="solid" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider variant="dashed" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider variant="dotted" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
      <div />
    );

    export default App;
    `,
    Thickness: `
    import { Divider } from 'essential-materials';

    const App = () => (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider thickness="1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider thickness="2" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider thickness="3" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
      </div>
    );

    export default App;
    `,
    Spacing: `
    import { Divider } from 'essential-materials';

    const App = () => (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider spacing="small" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider spacing="medium" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
        <Divider spacing="large" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh nec dolor consequat condimentum.
        </p>
      </div>
    );

    export default App;
    `,
    Vertical: `
    import { Divider } from 'essential-materials';

    const App = () => (
      <div>
        <p>Lorem</p>
        <Divider orientation="vertical" />
        <p>Lorem</p>
        <Divider orientation="vertical" />
        <p>Lorem</p>
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
        description='Se puede elegir entre tres variantes "solid", "dashed", "dotted". '
        code={DividerCodes.Variant}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider variant="solid" thickness="2" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider variant="dashed" thickness="2" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider variant="dotted" thickness="2" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
        </div>
      </Container>
      <Container
        title="Grosor"
        description="Se puede configurar el grosor de la linea deseado, valor numerico."
        code={DividerCodes.Thickness}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider thickness="1" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider thickness="2" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider thickness="3" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
        </div>
      </Container>
      <Container
        title="Separacion"
        description="Espacio generado alrededor del divider."
        code={DividerCodes.Spacing}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider spacing="small" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider spacing="medium" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
          <Divider spacing="large" />
          <p style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nibh nec dolor consequat condimentum.
          </p>
        </div>
      </Container>
      <Container
        title="Vertical"
        description="Cambiar orientacion del divider por vertical."
        code={DividerCodes.Vertical}
      >
        <div
          style={{ display: "flex", justifyContent:"center", columnGap: "10px" }}
        >
          <p style={{ fontSize: "13px" }}>Lorem</p>
          <Divider orientation="vertical" />
          <p style={{ fontSize: "13px" }}>Lorem</p>
          <Divider orientation="vertical" />
          <p style={{ fontSize: "13px" }}>Lorem</p>
        </div>
      </Container>
    </div>
  );
}
