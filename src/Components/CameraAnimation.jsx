import { useThree } from "@react-three/fiber";
import gsap from "gsap";


const CameraAnimation = ({ clicked }) => {
  const { camera } = useThree();

  gsap.to(camera.position, {
    z: clicked ? 3 : 5,
    y: clicked ? .8 : 0,
    duration: 2,
    ease: "power2.inOut",
  });

  return null;
};

export default CameraAnimation;