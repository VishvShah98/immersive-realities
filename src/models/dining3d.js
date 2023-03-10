import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import { DiningModel } from "./Dining";
export default function Dining3d() {



  

  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls
          enableZoom={true}
          enableDamping={true}
          dampingFactor={0.1}
        />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <DiningModel
           scale={[0.8,0.8,0.8]}
             rotation-y={-0.37}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
