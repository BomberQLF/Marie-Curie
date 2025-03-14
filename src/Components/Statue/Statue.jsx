import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Resize } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const Statue = () => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 60 }} shadows>
      <ambientLight intensity={0.2} color={'#ffffff'} />
      <AnimatedLights />
      <StatueContent />
      <Resize />
    </Canvas>
  );
};

const AnimatedLights = () => {
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();
  const lightHelper = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to(light1.current.position, { duration: 6, x: 2, y: 4, z: 8, ease: 'power1.inOut' })
            .to(light2.current.position, { duration: 6, x: -2, y: 3, z: 7, ease: 'power1.inOut' }, 0)
            .to(light3.current.position, { duration: 6, x: 1, y: 5, z: 6, ease: 'power1.inOut' }, 0);
  }, []);

  return (
    <>
      <pointLight ref={light1} position={[0, 4, 10]} color={'#ffff99'} intensity={0.9} />
      <pointLight ref={light2} position={[1, 3, 8.3]} intensity={1} color={'#99ff99'} />
      <pointLight ref={light3} position={[0, 3.8, 5.2]} intensity={1} color={'#99ff99'} />
      <pointLight ref={lightHelper} position={[-0.6, 4.4, 8.5]} intensity={0.8} color={'#d38b97'} />
    </>
  );
};

const StatueContent = () => {
  const gltf = useLoader(GLTFLoader, '/scene/statuev3_v2.glb');
  const { camera } = useThree();

  useFrame(() => {
    camera.lookAt(0, 3.6, 7.8);
  });

  const timeline = gsap.timeline({ repeat: -1 });
  timeline.to(camera.position, { duration: 12, x: -2, y: 2.5, z: 8.2, ease: 'power1.inOut' })
          .to(camera.position, { duration: 12, x: 0, y: 4, z: 5, ease: 'power1.inOut' })
          .to(camera.position, { duration: 12, x: 3, y: 3, z: 8, ease: 'power1.inOut' })
          .to(camera.position, { duration: 12, x: 0, y: 4, z: 10, ease: 'power1.inOut' });

  return (
    <primitive object={gltf.scene} scale={1} position={[0, -2.1, 7.8]} rotation={[0, 4.1, 0]} />
  );
};

export default Statue;