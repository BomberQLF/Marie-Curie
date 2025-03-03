import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, PointerLockControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";

// tableau pour les données de chaque frame, ce qui facilite la gestion de la camera et des positionnements
const framesData = [
  {
    url: "/public/assets/green-img.jpg",
    label: "Petite Curie",
    position: [1.6, 3, 1],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST",
    position: [-4, 3, -6.8],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "ITEST",
    position: [7.5, 3, -6.8],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST 3",
    position: [-5.5, 3, -3],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "test 4",
    position: [9, 3, -3],
    rotation: [0, -Math.PI / 2, 0],
  },
];

const initialCameraPosition = [1, 2, 11];

const Gallery = () => {
  const [clickedFrame, setClickedFrame] = useState(initialCameraPosition);
  const { scene: gltfScene } = useGLTF('/public/scene/musee.glb');

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
      camera={{ position: initialCameraPosition, fov: 70 }}
      onCreated={({ scene, camera }) => {
        camera.position.set(0, 0, 45);
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
      <primitive object={gltfScene} position={[0, 0, 0]} scale={[6, 6, 6]} />
      {/* <PointerLockControls /> */}
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[1.6, 6, 1]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* <Environment preset="studio" /> */}
    </Canvas>
  );
};

export default Gallery;