import { Button, Tooltip } from "essential-materials";
import "../../../src/components/basics/Tooltip/Tooltip.css";
import Container from "./Utils/Container";

export function TooltipExamples() {
  const TooltipCodes = {
    Basic: `
    import { Button, Tooltip } from 'essential-materials';

    const App = () => (
      <Tooltip content="Tooltip >:)" position="top" arrow trigger="hover">
        <Button color="primary" variant="filled" size="small">
          Hover Aqui
        </Button>
      </Tooltip>
    )

    export default App;
    `,
    Position: `
    import { Button, Tooltip } from 'essential-materials';

    const App = () => (
      <div>
        <Tooltip content="Arriba" position="top" arrow trigger="hover">
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
        <Tooltip content="Izquierda" position="left" arrow trigger="hover">
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
        <Tooltip content="Derecha" position="right" arrow>
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
        <Tooltip content="Abajo" position="bottom" arrow trigger="hover">
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
      </div>
    );

    export default App;
    `,
    Trigger: `
    import { Button, Tooltip } from 'essential-materials';

    const App = () => (
      <div>
        <Tooltip content="Tooltip en hover" arrow trigger="hover">
          <Button color="primary" variant="filled" size="small">
            Tooltip has Hover
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip en click" arrow trigger="click">
          <Button color="primary" variant="filled" size="small">
            Tooltip has Click
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip en focus" arrow trigger="focus">
          <Button color="primary" variant="filled" size="small">
            Tooltip has Focus
          </Button>
        </Tooltip>
      </div>
    );

    export default App;
    `,
    Disable: `
    import { Button, Tooltip } from 'essential-materials';

    const App = () => (
      <Tooltip content="Tooltip >:)" position="top" arrow trigger="hover" disabled>
        <Button color="primary" variant="filled" size="small">
          Hover Aqui
        </Button>
      </Tooltip>
    )

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
        description="Uso basico del Tooltip. "
        code={TooltipCodes.Basic}
      >
        <Tooltip content="Tooltip >:)" position="top" arrow trigger="hover">
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
      </Container>
      <Container
        title="Desabilitado"
        description="Tooltip desabilitado, el tooltip no saldra."
        code={TooltipCodes.Disable}
      >
        <Tooltip
          content="Tooltip >:)"
          position="top"
          arrow
          trigger="hover"
          disabled
        >
          <Button color="primary" variant="filled" size="small">
            Hover Aqui
          </Button>
        </Tooltip>
      </Container>
      <Container
        title="Posicion"
        description='Determina en que posicion saldra el tooltip: "top", "bottom", "left", "right".'
        code={TooltipCodes.Position}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Tooltip content="Arriba" position="top" arrow trigger="hover">
            <Button color="primary" variant="filled" size="small">
              Hover Aqui
            </Button>
          </Tooltip>
          <Tooltip content="Izquierda" position="left" arrow trigger="hover">
            <Button color="primary" variant="filled" size="small">
              Hover Aqui
            </Button>
          </Tooltip>
          <Tooltip content="Derecha" position="right" arrow>
            <Button color="primary" variant="filled" size="small">
              Hover Aqui
            </Button>
          </Tooltip>
          <Tooltip content="Abajo" position="bottom" arrow trigger="hover">
            <Button color="primary" variant="filled" size="small">
              Hover Aqui
            </Button>
          </Tooltip>
        </div>
      </Container>
      <Container
        title="Trigger"
        description="Se encarga de definir que activa el tooltip."
        code={TooltipCodes.Trigger}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <Tooltip content="Tooltip en hover" arrow trigger="hover">
            <Button color="primary" variant="filled" size="small">
              Tooltip has Hover
            </Button>
          </Tooltip>
          <Tooltip content="Tooltip en click" arrow trigger="click">
            <Button color="primary" variant="filled" size="small">
              Tooltip has Click
            </Button>
          </Tooltip>
          <Tooltip content="Tooltip en focus" arrow trigger="focus">
            <Button color="primary" variant="filled" size="small">
              Tooltip has Focus
            </Button>
          </Tooltip>
        </div>
      </Container>
    </div>
  );
}
