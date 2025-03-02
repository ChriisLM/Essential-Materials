import React from "react";
import { Avatar } from "essential-materials";
import "../../../src/components/basics/Avatar/Avatar.css"

export default {
  SizeExamples: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Avatar src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508367/77701290-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg" size="small" border="dashed" />
      <Avatar src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508367/77701290-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg" size="medium" />
      <Avatar src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508367/77701290-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg" size="large" />
    </div>
  ),

  ShapeExamples: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Avatar src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508367/77701290-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg" shape="circle" />
      <Avatar src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508367/77701290-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg" shape="square" />
    </div>
  ),

  FallbackExample: () => (
    <Avatar src="invalid-url.jpg" fallback="A" size="large" />
  ),
};