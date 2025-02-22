import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";


const Gallery = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas style={{ background: "#050505" }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <CameraAnimation hovered={hovered} />
      <Frame onClick={() => setHovered(!hovered)} /> {/* Plane avec clic */}
      <OrbitControls />
    </Canvas>
  );
};

export default Gallery;