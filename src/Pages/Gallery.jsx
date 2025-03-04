import { Canvas } from "@react-three/fiber";
import { SpotLight, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";

// tableau pour les données de chaque frame, ce qui facilite la gestion de la camera et des positionnements
const framesData = [
  {
    url: "/public/assets/green-img.jpg",
    label: "Petite Curie",
    position: [1.8, 3, 1],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST",
    position: [-4, 3, -4],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "ITEST",
    position: [7.5, 3, -4],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "TEST 3",
    position: [-6.6, 3, -.6],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    url: "/public/assets/green-img.jpg",
    label: "test 4",
    position: [9, 3, -.6],
    rotation: [0, -Math.PI / 2, 0],
  },
];

const initialCameraPosition = [2.2, 3, 7.8];

const Gallery = () => {
  const [clickedFrame, setClickedFrame] = useState(initialCameraPosition);
  const { scene: gltfScene } = useGLTF("/public/scene/musee.glb");

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
      camera={{ position: initialCameraPosition, fov: 75 }}
      onCreated={({ scene, camera }) => {
        camera.position.set(2, 3, 2);
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
      <primitive object={gltfScene} position={[0, 0, 0]} scale={[7, 6, 3.5]} />
      {/* <PointerLockControls /> */}
      <ambientLight intensity={0.5} color="#ffffff" />
      <SpotLight
        position={[2.7, 9, -10]}
        intensity={500}
        penumbra={0.5}
        angle={Math.PI / 4}
        distance={20}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#568A4B"}
      />
      <SpotLight
        position={[2.7, 9, -0.43]}
        intensity={200}
        penumbra={0.5}
        angle={Math.PI / 4}
        distance={20}
        color={'#FFFF'}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* <SpotLight
        position={[9, 5, -.6]}
        intensity={200}
        penumbra={0.5}
        angle={Math.PI / 4}
        distance={20}
        color={'#FFFF'}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
    </Canvas>
  );
};

export default Gallery;
