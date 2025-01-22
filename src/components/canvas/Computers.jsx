import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="gray" />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.2}
        penumbra={0.5}
        intensity={1}
        castShadow={false} // Shadows disabled for mobile performance
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.95, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false} // Disabled shadows for better performance
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }} // Optimize for mobile
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
