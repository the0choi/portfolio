import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

function Dog() {
  const mesh = useRef();
  const { scene } = useGLTF('/portfolio/shiba/scene.gltf');

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={1} groundColor='white' />
      <pointLight color={0xffffff} intensity={20} distance={10} position={[0, 3, 2]} />
      <ambientLight intensity={30} />
      <primitive
        object={scene}
        scale={1}
        position={[-0.3, 0.3, 0.5]}
        rotation={[0, -0.5, 0]}
      />
    </mesh>
  )
};

export default function DogCanvas() {

  return (
    <Canvas
      style={{ width: '30vw', height: 'max(20vw, 200px)' }}
      frameloop="always"
      camera={{position: [0, 10, 0], fov: 10}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={true} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Dog />
      </Suspense>

    <Preload all />
    </Canvas>
  )
}