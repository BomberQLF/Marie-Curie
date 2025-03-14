import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { OrbitControls, Resize, GizmoHelper, GizmoViewport } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

const Statue = () => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 60 }} shadows>
      <ambientLight intensity={0.2} color={'#ffffff'} />
      <pointLight position={[0, 4, 10]} color={'#ffff99'} intensity={0.9} />
      <pointLight position={[1, 3, 8.3]} intensity={1} color={'#99ff99'} />
      <pointLight position={[0, 3.8, 5.2]} intensity={1} color={'#99ff99'} />
      <StatueContent />
      <Resize />
      <OrbitControls />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
      </GizmoHelper>
    </Canvas>
  );
};

const StatueContent = () => {
  const gltf = useLoader(GLTFLoader, '/scene/statue.glb');
  const texture = useLoader(TextureLoader, '/scene/Texture/Marble021_1K-JPG_Color.jpg');
  const normalMap = useLoader(TextureLoader, '/scene/Texture/Marble021_1K-JPG_NormalGL.jpg');
  const roughnessMap = useLoader(TextureLoader, '/scene/Texture/Marble021_1K-JPG_Roughness.jpg');
  const displacementMap = useLoader(TextureLoader, '/scene/Texture/Marble021_1K-JPG_Displacement.jpg');
  const { camera } = useThree();

  useFrame(() => {
    camera.lookAt(0, 3.6, 7.8);    
  });

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: texture,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        displacementMap: displacementMap,
        metalness: 0.1,
        roughness: 0.8,
        displacementScale: 0,
      });
    }
  });

  const timeline = gsap.timeline({ repeat: -1 });
  timeline.to(camera.position, { duration: 6, x: -2, y: 2.5, z: 8.2, ease: 'power1.inOut' })
          .to(camera.position, { duration: 6, x: 0, y: 4, z: 5, ease: 'power1.inOut' })
          .to(camera.position, { duration: 6, x: 3, y: 3, z: 8, ease: 'power1.inOut' })
          .to(camera.position, { duration: 6, x: 0, y: 4, z: 10, ease: 'power1.inOut' });

  return (
    <primitive object={gltf.scene} scale={1} position={[0, -2.1, 7.8]} rotation={[0, 4.1, 0]} />
  );
};

export default Statue;