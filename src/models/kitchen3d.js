import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import { KitchenModel } from "./Kitchen";
export default function Kitchen3d() {
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
          <KitchenModel
            scale={[1, 1, 1]}
            position={[0, -1.3, 10.6]}
            rotation-y={1.22}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
