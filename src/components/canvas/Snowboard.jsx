import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

function Snowboard() {
  const Snowboard = useGLTF('/portfolio/snowboard/scene.gltf?url');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <primitive
        object={Snowboard.scene}
        scale={0.13}
        position={[0, 0.15, 0]}
        rotation={[1, 1, -0.5]}
      />
    </mesh>
  )
};

export default function SnowboardCanvas() {

  return (
    <Canvas
        style={{ width: '60vw', height: '70vw', position: 'absolute', right: '-500px', top: '-400px', zIndex: '20'}}
        frameloop="always"
        camera={{position: [5, 0, 10], fov: 10}}
        gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false} 
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 50}
          maxAzimuthAngle={Math.PI / 3}
        />
        <Snowboard />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}