import { Canvas } from "@react-three/fiber";
import { SpotLight, useGLTF, useHelper } from "@react-three/drei";
import { useState, useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";
import CameraAnimation from "../Components/CameraAnimation";
import Frame from "../Components/Frame";

const framesData = [
  {
    url: "/public/assets/gallery-img/img1.png",
    label: "Petite Curie",
    position: [0, 3, 1],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/gallery-img/img3.png",
    label: "TEST",
    position: [-6.5, 3, -5],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/gallery-img/img3.png",
    label: "ITEST",
    position: [6.75, 3, -5],
    rotation: [0, 0, 0],
  },
  {
    url: "/public/assets/gallery-img/img2.png",
    label: "TEST 3",
    position: [-9.5, 3, -1.5],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    url: "/public/assets/gallery-img/img2.png",
    label: "test 4",
    position: [9.5, 3, -1.5],
    rotation: [0, -Math.PI / 2, 0],
  },
];

const initialCameraPosition = [0, 3, 7.8];

const Gallery = () => {
  const [clickedFrame, setClickedFrame] = useState(initialCameraPosition);
  const pointLightRef1 = useRef();
  const pointLightRef2 = useRef();
  const spotLightRef = useRef();
  
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
    <Canvas style={{ background: "#111" }} camera={{ position: initialCameraPosition, fov: 75 }}>
      <CameraAnimation clickedFrame={clickedFrame} initialCameraPosition={initialCameraPosition} />
      
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

      <primitive object={gltfScene} position={[-2, -0.3, 0]} scale={[7.6, 6, 5]} />
      <pointLight ref={pointLightRef1} position={[0, 0, -3]} intensity={500} decay={2.4} color="#568A4B" />
      <pointLight ref={pointLightRef2} position={[0, 8, 4]} intensity={50} decay={3} color="yellow" />
      <SpotLight ref={spotLightRef} position={[0, 6.8, 2.5]} anglePower={100} intensity={2} decay={.5} angle={Math.PI / 4} color="white" />
    </Canvas>
  );
};

export default Gallery;