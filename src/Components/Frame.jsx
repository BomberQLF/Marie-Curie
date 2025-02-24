import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";
import { easing } from "maath";
import { useRef, useState } from "react";
import { MeshReflectorMaterial, Text } from "@react-three/drei";

const Frame = ({ onClick, url, label, position, rotation }) => {
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, url);
  const frame = useRef();
  const borderThickness = 0.1;

  useFrame((state, delta) => {
    if (frame.current) {
      easing.dampC(
        frame.current.material.color,
        hovered ? new Color("gold") : new Color("black"),
        0.25,
        delta
      );
    }
  });

  return (
    <>
      <group onClick={onClick} rotation={rotation}>
        <mesh
          ref={frame}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          position={position}
        >
          <boxGeometry args={[2.5 + borderThickness * 2, 3.2 + borderThickness * 2, borderThickness]} />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[position[0], position[1], position[2] + 0.06]}>
          <planeGeometry args={[2.3, 3]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>

      <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[400, 100]} 
          mixBlur={.6} 
          mirror={0.8} 
          resolution={2048} 
          depthScale={0.2} 
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0.5}
          mixStrength={5}
        />
      </mesh>

      <Text 
        position={[position[0], position[1] + 1.6, position[2] + 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </>
  );
};

export default Frame;