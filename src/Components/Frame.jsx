import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Frame = ({ onClick }) => {
  const texture = useLoader(TextureLoader, "/assets/green-img.jpg");

  return (
    <mesh onClick={onClick}>
      <planeGeometry args={[2, 4, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Frame;
