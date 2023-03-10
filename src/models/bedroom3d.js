import React, { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import { BedroomModel } from "./Bedroom";
export default function Bedroom3d() {
  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls
          enableZoom={true}
          enableDamping={true}
          dampingFactor={0.1}
        />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <BedroomModel
           scale={[0.8,0.8,0.8]}
             rotation-y={-0.35}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
