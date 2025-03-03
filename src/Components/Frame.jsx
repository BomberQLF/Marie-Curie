import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Color, SpotLight } from "three";
import { easing } from "maath";
import { useRef, useState } from "react";
import { MeshReflectorMaterial, Text } from "@react-three/drei";

const Frame = ({ onClick, url, label, position, rotation }) => {
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, url);
  const frame = useRef();
  const borderThickness = 0.005;
  
  useFrame((state, delta) => {
    if (frame.current) {
      easing.dampC(
        frame.current.material.color,
        hovered ? new Color("#5555") : new Color("black"),
        0.25,
        delta
      );
    }
  });

  return (
    <>
      <group onClick={onClick} position={position} rotation={rotation}>
        <mesh
          ref={frame}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <boxGeometry args={[2.5 + borderThickness * 2, 3.2 + borderThickness * 2, borderThickness]} />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.3, 3]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        <Text 
          position={[0, 2, 0.1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>

      <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};

export default Frame;