import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";
import { Fog } from "three";

// tableau pour les données de chaque frame, ce qui facilite la gestion de la camera et des positionnements
const framesData = [
  {
    url: "/public/assets/green-img.jpg",
    label: "Petite Curie",
    position: [0, 0.8, 0],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST",
    position: [-5.5, 0.8, -3],
    rotation: [0, Math.PI / 6, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "ITEST",
    position: [5.5, 0.8, -3],
    rotation: [0, -Math.PI / 6, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST 3",
    position: [-10, 0.8, 0],
    rotation: [0, Math.PI / 3.5, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "test 4",
    position: [10, 0.8, 0],
    rotation: [0, -Math.PI / 3, 0],
  },
];

const initialCameraPosition = [0, -0.5, 11];

const Gallery = () => {
  const [clickedFrame, setClickedFrame] = useState(initialCameraPosition);

  const handleFrameClick = (position, rotation, label) => {
    if (
      clickedFrame &&
      clickedFrame.position &&
      clickedFrame.position[0] === position[0] &&
      clickedFrame.position[1] === position[1] &&
      clickedFrame.position[2] === position[2]
    ) {
      setClickedFrame(initialCameraPosition);
    } else {
      setClickedFrame({ position, rotation, label });
    }
  };

  return (
    <Canvas
      style={{ background: "#111" }}
      camera={{ position: initialCameraPosition, fov: 90 }}
      onCreated={({ scene, camera }) => {
        scene.fog = new Fog(0x333333, 2, 48);
        camera.position.set(0, 15, 40);
      }}
    >
      <CameraAnimation
        clickedFrame={clickedFrame}
        initialCameraPosition={initialCameraPosition}
      />
      {framesData.map((frame, index) => (
        <Frame
          key={index}
          onClick={() => {
            handleFrameClick(frame.position, frame.rotation, frame.label);
            console.log("Tu as cliqué sur " + frame.label + frame.position);
          }}
          url={frame.url}
          label={frame.label}
          position={frame.position}
          rotation={frame.rotation}
        />
      ))}
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.2} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Gallery;