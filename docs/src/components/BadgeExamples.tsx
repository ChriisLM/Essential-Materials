import React from "react";
import { Badge } from "essential-materials";
import "../../../src/components/basics/Badge/Badge.css"

export function BadgeExamples() {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      {/* Variantes */}
      <Badge content="Default">🔔</Badge>
      <Badge variant="success" content="Success">✅</Badge>
      <Badge variant="error" content="Error">❌</Badge>

      {/* Tamaños */}
      <Badge size="small" content="S">📩</Badge>
      <Badge size="large" content="L">📩</Badge>

      {/* Posiciones */}
      <Badge position="top-left" content="TL">📩</Badge>
      <Badge position="bottom-right" content="BR">📩</Badge>
    </div>
  );
}
