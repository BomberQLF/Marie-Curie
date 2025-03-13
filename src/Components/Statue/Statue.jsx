import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Resize } from '@react-three/drei';
import gsap from "gsap";

const Statue = () => {
  const gltf = useLoader(GLTFLoader, "/scene/statue.glb");
  const initialPosition = [0, 4, 10];


  return (
    <Canvas camera={{ position: [0, 4, 10] }}>
      <directionalLight position={[5, 5, 5]} />
      <primitive object={gltf.scene} scale={1} position={[0, -2, 6]} rotation={[0, 5, 0]} />
      <Resize />      
    </Canvas>
  );
};

export default Statue;