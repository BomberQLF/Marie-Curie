import { useThree } from "@react-three/fiber";
import gsap from "gsap";


const CameraAnimation = ({ hovered }) => {
  const { camera } = useThree();

  gsap.to(camera.position, {
    z: hovered ? 2.5 : 5,
    duration: 2,
    ease: "power2.inOut",
  });

  return null;
};

export default CameraAnimation;