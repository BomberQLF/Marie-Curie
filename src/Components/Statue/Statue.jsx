import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { OrbitControls, Resize } from '@react-three/drei';
import * as THREE from 'three';

const Statue = () => {
  const gltf = useLoader(GLTFLoader, '/scene/statue.glb');
  const texture = useLoader(TextureLoader, '/scene/Texture/Marble021_1K-JPG_Color.jpg');

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.2,
        roughness: .8,
      });
    }
  });

  return (
    <Canvas camera={{ position: [0, 4, 10] }} shadows>
      <ambientLight intensity={0.5} color={'#ffffff'} />
      <directionalLight position={[5, 5, 5]} intensity={1} color={'#ffffff'} castShadow />
      <pointLight position={[-5, -5, -5]} color={'#ffff99'} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color={'#99ff99'} />
      <primitive object={gltf.scene} scale={1} position={[0, -2, 6]} rotation={[0, 5, 0]} />
      <Resize />
      <OrbitControls />
    </Canvas>
  );
};

export default Statue;