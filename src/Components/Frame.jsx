import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Color } from "three";
import { easing } from "maath";
import { useRef, useState } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

const Frame = ({ onClick, url }) => {
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, url);
  const frame = useRef();

  useFrame((state, delta) => {
    if (frame.current) {
      easing.dampC(
        frame.current.material.color,
        hovered ? new Color("yellow") : new Color("black"),
        0.15,
        delta
      );
    }
  });

  return (
    <>
      <group onClick={onClick}>
        <mesh
          ref={frame}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          position={[0, .8, 0]} 
        >
          <planeGeometry args={[2.5, 3.2]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, .8, 0.01]}>
          <planeGeometry args={[2.3, 3]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>

      <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]} 
          mixBlur={0.85} 
          mirror={0.8} 
          resolution={2048} 
          depthScale={0.5} 
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0.5}
          mixStrength={5}
        />
      </mesh>
    </>
  );
};

export default Frame;