import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const CameraAnimation = ({ clickedFrame, initialCameraPosition }) => {
  // Utilisation de usethtee ici pour pouvoir accéder à la caméra de threejs et pour éviter qu'elle croit que c'est une simple variable
  const { camera } = useThree();


  // AJOUTER LE PROPS ROTATION VENANT DE LA FRAME --> pour que dans le composant camera je puisse séléctionner la rotation de la camera en fonction de la frame
  useEffect(() => {
    if (clickedFrame) {
      gsap.to(camera.position, {
        x: clickedFrame[0],
        y: clickedFrame[1],
        z: clickedFrame[2] + 3,
        duration: 2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(camera.position, {
        x: initialCameraPosition[0],
        y: initialCameraPosition[1],
        z: initialCameraPosition[2],
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, [clickedFrame, camera, initialCameraPosition]);

  return null;
};

export default CameraAnimation;