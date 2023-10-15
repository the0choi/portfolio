import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

function Snowboard({ isMobile }) {
  const Snowboard = useGLTF('/snowboard/scene.gltf?url');
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={30} groundColor='white' />
      <pointLight color={0x85ccb8} intensity={20} distance={20} position={[0, 3, 2]} />
      <primitive
        object={Snowboard.scene}
        scale={0.13}
        position={isMobile ? [0, 0.3, 0] : [0, 0.15, 0]}
        rotation={[1, 1, -0.5]}
      />
    </mesh>
  )
};

export default function SnowboardCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    function handleMediaQueryChange(e) {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <>
      <Canvas
      style={{ width: '70vw', height: '70vw', position: 'absolute', right: '-400px', top: '-300px', zIndex: '20'}}
      frameloop="always"
      camera={{position: [5, 0, 10], fov: 10}}
      gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          enableZoom={false}
          enableRotate={false}
          enablePan={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Snowboard isMobile={isMobile} />
      </Suspense>

      <Preload all />
      </Canvas>
    </>
  )
}