import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Resize } from '@react-three/drei';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CurveAnimation = ({ reverse = false }) => {
  const lineRef = useRef();
  const lightRef = useRef();
  const numPoints = 100;
  const points = new Float32Array(numPoints * 3);
  const progress = useRef(0);

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, 2.5, 8.2),
    new THREE.Vector3(0, 4, 5),
    new THREE.Vector3(3, 3, 8),
    new THREE.Vector3(0, 4, 10),
    new THREE.Vector3(-2, 2.5, 8.2)
  ], true);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(points, 3)
      );
    }
  }, []);

  useFrame(() => {
    progress.current = (progress.current + 0.001) % 1; 
    const t = (reverse ? 1 - progress.current : progress.current) % 1;
    const lightPoint = curve.getPointAt(t);
    if (lightRef.current) {
      lightRef.current.position.set(lightPoint.x, lightPoint.y, lightPoint.z);
    }
    
    for (let i = 0; i < numPoints; i++) {
      const t = (i / numPoints + (reverse ? 1 - progress.current : progress.current)) % 1;
      const point = curve.getPointAt(t);
      points.set([point.x, point.y - (reverse ? 0.5 : 0), point.z], i * 3);
    }
    if (lineRef.current) {
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={reverse ? '#81CB54' : 'white'} linewidth={1} />
      </line>
      <pointLight ref={lightRef} color={reverse ? '#81CB54' : 'white'} intensity={.7} />
    </>
  );
};

const AnimatedLights = () => {
  const lights = [useRef(), useRef(), useRef()];

  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true })
      .to(lights[0].current.position, { duration: 12, x: 2, y: 4, z: 8})
      .to(lights[1].current.position, { duration: 12, x: -2, y: 3, z: 7}, 0)
      .to(lights[2].current.position, { duration: 12, x: 1, y: 5, z: 6}, 0);
  }, []);

  return lights.map((ref, i) => (
    <pointLight key={i} ref={ref} position={[0, 4, 10]} intensity={i === 0 ? 0.9 : 3} color={'#ffff'} />
  ));
};

const StatueContent = () => {
  const gltf = useLoader(GLTFLoader, '/scene/statue_finale.glb');
  const { camera } = useThree();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: false });

    timeline
      .set(camera.position, { x: 0, y: 5, z: 10 })
      .to(camera.position, { duration: 12, x: -3.2, y: 4.22, z: 8.2, ease: "linear" })
      .to(camera.position, { duration: 12, x: 0, y: 4, z: 5, ease: "linear" })
      .to(camera.position, { duration: 12, x: 3, y: 3, z: 8, ease: "linear" })
      .to(camera.position, { duration: 12, x: 0, y: 5, z: 10, ease: "linear" });

  }, [camera]);

  useFrame(() => camera.lookAt(0, 3.6, 7.8));

  return (
    <primitive object={gltf.scene} scale={1} position={[0, -2.1, 7.8]} rotation={[0, 4.1, 0]} />
  );
};

const Statue = () => (
  <Canvas camera={{ position: [0, 5, 10], fov: 60 }} shadows>
    <ambientLight intensity={0.2} />
    <AnimatedLights />
    <StatueContent />
    <CurveAnimation />
    <CurveAnimation reverse={true} />
    <Resize />
  </Canvas>
);

export default Statue;
