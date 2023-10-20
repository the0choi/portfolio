import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
        <Snowboard isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}