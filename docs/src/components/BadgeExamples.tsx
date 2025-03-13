import { Avatar, Badge } from "essential-materials";
import "../../../src/components/basics/Badge/Badge.css";
import Container from "./Utils/Container";

export function BadgeExamples() {
  const BadgeCodes = {
    Basic: `
    import { Badge } from 'essential-materials';

    const App = () => (
      <Badge content="1" variant="primary">
        <Avatar
          src="https://i.pravatar.cc/150?img=7"
          alt="Avatar"
          size="medium"
          shape="square"
          border="dashed"
        />
      </Badge>
    )

    export default App;
    `,
    Variant: `
    import { Badge } from 'essential-materials';

    const App = () => (
      <div>
        <Badge content="1" variant="default" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="primary" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="secondary" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="success" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="warning" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="info" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="error" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Badge } from 'essential-materials';

    const App = () => (
      <div>
        <Badge content="1" variant="primary" size="small">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="primary" size="medium">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
      </div>
    );

    export default App;
    `,
    Position: `
    import { Badge } from 'essential-materials';

    const App = () => (
      <div>
        <Badge content="1" variant="primary" position = "top-left">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="primary" position = "top-right">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="primary" position = "bottom-left">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
        <Badge content="1" variant="primary" position = "bottom-right">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
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
        description="Uso basico del Badge. "
        code={BadgeCodes.Basic}
      >
        <Badge content="1" variant="primary">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            size="medium"
            shape="square"
            border="dashed"
          />
        </Badge>
      </Container>
      <Container
        title="Tamaños"
        description='Se puede colocar en dos tamaños: "small", "medium".'
        code={BadgeCodes.Sizes}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Badge content="1" variant="primary" size="small">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="primary" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
        </div>
      </Container>
      <Container
        title="Posicion"
        description='Se puede colocar en cuatro posiciones: "top-right", "top-left", "bottom-right", "bottom-left".'
        code={BadgeCodes.Position}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Badge content="1" variant="primary" position = "top-left">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="primary" position = "top-right">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="primary" position = "bottom-left">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="primary" position = "bottom-right">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
        </div>
      </Container>
      <Container
        title="Variantes/Colores"
        description="Todas las variantes que se pueden colocar."
        code={BadgeCodes.Variant}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Badge content="1" variant="default" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="primary" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="secondary" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="success" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="warning" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="info" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
          <Badge content="1" variant="error" size="medium">
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar"
              size="medium"
              shape="square"
              border="dashed"
            />
          </Badge>
        </div>
      </Container>
    </div>
  );
}
