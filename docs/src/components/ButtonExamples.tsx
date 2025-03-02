import { Button } from "essential-materials";
import "../../../src/components/basics/Button/Button.css"

export function ButtonVariants() {
  return (
    <>
      <Button color="primary" variant="filled">Filled</Button>
      <Button color="secondary" variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
    </>
  );
}

export function ButtonTamanos() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </>
  );
}