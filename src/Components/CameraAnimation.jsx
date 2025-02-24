import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const CameraAnimation = ({ clickedFrame, initialCameraPosition }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (Array.isArray(clickedFrame)) {
      gsap.to(camera.position, {
        x: clickedFrame[0],
        y: clickedFrame[1],
        z: clickedFrame[2] + 3, 
        duration: 2,
        ease: "power2.inOut",
      });
      gsap.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    } else if (clickedFrame && clickedFrame.position && clickedFrame.rotation) {
      gsap.to(camera.position, {
        x: clickedFrame.position[0],
        y: clickedFrame.position[1], 
        z: clickedFrame.position[2] + 3,
        duration: 2,
        ease: "power2.inOut",
      });
      gsap.to(camera.rotation, {
        x: 0,
        y: clickedFrame.rotation[1],
        z: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(camera.position, {
        x: initialCameraPosition[0],
        y: initialCameraPosition[1], // Ajuster la hauteur de la caméra
        z: initialCameraPosition[2],
        duration: 2,
        ease: "power2.inOut",
      });
      gsap.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, [clickedFrame, camera, initialCameraPosition]);

  return null;
};

export default CameraAnimation;