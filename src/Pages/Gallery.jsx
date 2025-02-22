import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";
import { Fog } from "three";

const Gallery = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Canvas
      style={{ background: "#222" }}
      camera={{ position: [0, -0.5, 5], fov: 75 }}
      onCreated={({ scene }) => {
        scene.fog = new Fog(0x333333, 2, 10); 
      }}
    >
      <CameraAnimation clicked={clicked} />
      <Frame onClick={() => setClicked(!clicked)} url="/public/assets/green-img.jpg" />

      <OrbitControls />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default Gallery;