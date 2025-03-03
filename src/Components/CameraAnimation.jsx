import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const CameraAnimation = ({ clickedFrame, initialCameraPosition }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (clickedFrame && clickedFrame.label) {
      const { position, rotation } = clickedFrame;
      let cameraPosition = { x: position[0], y: position[1], z: position[2] + 2 };
      let lookAtPosition = { x: position[0], y: position[1], z: position[2] };

      switch (clickedFrame.label) {
        case "Petite Curie":
          cameraPosition = { x: position[0], y: position[1], z: position[2] + 4 };
          lookAtPosition = { x: position[0], y: position[1], z: position[2] };
          break;
        case "TEST":
          cameraPosition = { x: position[0] + 1, y: position[1], z: position[2] + 1 };
          lookAtPosition = { x: position[0] + 1, y: position[1], z: position[2] };
          break;
        case "ITEST":
          cameraPosition = { x: position[0] - 1.2, y: position[1], z: position[2] + 1.8 };
          lookAtPosition = { x: position[0], y: position[1] + 1, z: position[2] };
          break;
        case "TEST 3":
          cameraPosition = { x: position[0] + 2, y: position[1], z: position[2] + 1.5 };
          lookAtPosition = { x: position[0], y: position[1], z: position[2] + 1 };
          break;
        case "test 4":
          cameraPosition = { x: position[0] - 2.3, y: position[1], z: position[2] + 1 };
          lookAtPosition = { x: position[0] - 1, y: position[1], z: position[2] };
          break;
        default:
          cameraPosition = { x: position[0], y: position[1], z: position[2] + 2 };
          lookAtPosition = { x: position[0], y: position[1], z: position[2] };
          break;
      }

      gsap.to(camera.position, {
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(lookAtPosition.x, lookAtPosition.y, lookAtPosition.z);
        },
      });
      gsap.to(camera.rotation, {
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
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
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        },
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