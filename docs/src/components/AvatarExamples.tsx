import { Avatar } from "essential-materials";
import "../../../src/components/basics/Avatar/Avatar.css";
import Container from "./Utils/Container";

export function AvatarExamples() {
  const AvatarCodes = {
    Shape: `
    import { Avatar } from 'essential-materials';

    const App = () => (
      <div>
        <Avatar src="https://i.pravatar.cc/150?img=9" shape="circle" />
        <Avatar src="https://i.pravatar.cc/150?img=10" shape="square" />
      </div>
    );

    export default App;
    `,
    Border: `
    import { Avatar } from 'essential-materials';

    const App = () => (
      <div>
        <Avatar src="https://i.pravatar.cc/150?img=4" border="none" />
        <Avatar src="https://i.pravatar.cc/150?img=6" border="solid" />
        <Avatar src="https://i.pravatar.cc/150?img=7" border="dashed" />
        <Avatar src="https://i.pravatar.cc/150?img=8" border="dotted" />
      </div>
    );

    export default App;
    `,
    Sizes: `
    import { Avatar } from 'essential-materials';

    const App = () => (
      <div>
        <Avatar src="https://i.pravatar.cc/150?img=1" size="small" />
        <Avatar src="https://i.pravatar.cc/150?img=2" size="medium" />
        <Avatar src="https://i.pravatar.cc/150?img=3" size="large" />
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
        title="Tamaños"
        description='Se puede colocar en tres tamaños: "small", "medium", "large".'
        code={AvatarCodes.Sizes}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Avatar src="https://i.pravatar.cc/150?img=1" size="small" />
          <Avatar src="https://i.pravatar.cc/150?img=2" size="medium" />
          <Avatar src="https://i.pravatar.cc/150?img=3" size="large" />
        </div>
      </Container>
      <Container
        title="Borde"
        description='Se aplica un borde que puede ser "solid", "dashed", "dotted" o "none".'
        code={AvatarCodes.Border}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Avatar src="https://i.pravatar.cc/150?img=4" border="none" />
          <Avatar src="https://i.pravatar.cc/150?img=6" border="solid" />
          <Avatar src="https://i.pravatar.cc/150?img=7" border="dashed" />
          <Avatar src="https://i.pravatar.cc/150?img=8" border="dotted" />
        </div>
      </Container>
      <Container
        title="Forma"
        description='Hay dos formas "circle" o "square".'
        code={AvatarCodes.Shape}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Avatar src="https://i.pravatar.cc/150?img=9" shape="circle" />
          <Avatar src="https://i.pravatar.cc/150?img=10" shape="square" />
        </div>
      </Container>
    </div>
  );
}
