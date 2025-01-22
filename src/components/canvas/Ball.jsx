import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal, setDecal] = React.useState(null);

  useEffect(() => {
    async function loadTexture() {
      try {
        const [loadedTexture] = await useTexture([props.imgUrl]);
        loadedTexture.anisotropy = 16; // Improve texture quality
        setDecal(loadedTexture);
      } catch (error) {
        console.error("Error loading texture:", error);
        setDecal(null); // Fallback to avoid crashes
      }
    }
    loadTexture();
  }, [props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {decal ? (
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        ) : (
          <meshStandardMaterial color="#ddd" />
        )}
        {decal && (
          <Decal
            position={[0, 0, 0.9]} // Adjusted for better rendering
            rotation={[0, Math.PI / 2, 0]} // Modified rotation
            scale={[0.8, 0.8, 0.8]} // Adjusted scale
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  useEffect(() => {
    // WebGL support checker
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl");
    if (!context) {
      console.error("WebGL is not supported on this device");
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }} // Improved performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
