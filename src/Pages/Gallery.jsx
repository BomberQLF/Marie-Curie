import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";
import { Fog } from "three";

// tableau pour les données de chaque frame, ce qui facilite la gestion de la camera et des positionnements
const framesData = [
  { url: "/public/assets/green-img.jpg", label: "Petite Curie", position: [0, 0.8, 0], rotation: [0, 0, 0] },
  { url: "/public/assets/IMG_6289.jpg", label: "TEST", position: [-3, 0.8, -2], rotation: [0, Math.PI / 6, 0] },
  { url: "/public/assets/IMG_6290.jpg", label: "ITEST", position: [3, 0.8, -2], rotation: [0, -Math.PI / 6, 0] },
  { url: "/public/assets/IMG_6291.jpg", label: "TEST 3", position: [-6, 0.8, -4], rotation: [0, Math.PI / 3.5, 0] },
  { url: "/public/assets/vertical-illustration-cone-green-basil-ice-cream-homemade-mint-light-background-summer-desserts-vegan-food-ai-280192510.webp", label: "test 4", position: [6, 0.8, -4], rotation: [0, -Math.PI / 3.5, 0] },
];

const initialCameraPosition = [0, -.5, 7];

const Gallery = () => {
  const [clickedFrame, setClickedFrame] = useState(initialCameraPosition);

  const handleFrameClick = (position) => {
    if (clickedFrame && clickedFrame[0] === position[0] && clickedFrame[1] === position[1] && clickedFrame[2] === position[2]) {
      setClickedFrame(initialCameraPosition);
    } else {
      setClickedFrame(position);
    }
  };

  return (
    <Canvas
      style={{ background: "#222" }}
      camera={{ position: initialCameraPosition, fov: 75 }}
      onCreated={({ scene }) => {
        scene.fog = new Fog(0x333333, 2, 20); 
      }}
    >
      <CameraAnimation clickedFrame={clickedFrame} initialCameraPosition={initialCameraPosition} />
      {framesData.map((frame, index) => (
        <Frame
          key={index}
          onClick={() => handleFrameClick(frame.position)}
          url={frame.url}
          label={frame.label}
          position={frame.position}
          rotation={frame.rotation}
        />
      ))}
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Gallery;