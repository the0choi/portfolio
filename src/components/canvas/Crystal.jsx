import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

function Crystal() {
  const { size } = useThree();
  const Crystal = useGLTF('/crystal_rock/scene.gltf?url');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.003));

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={2} groundColor='white' />
      <pointLight color={0x9f85cc} intensity={10} distance={20} position={[0, 3, 2]} />
      <pointLight color={0x9f85cc} intensity={10} distance={20} position={[0, 3, 2]} />
      <primitive
        object={Crystal.scene}
        scale={1.2}
        position={[0, 0.25, 0]}
        rotation={[0, 0, 0]}
      />
      <meshStandardMaterial attach="material" color={0xffffff} roughness={0} metalness={1} envMapIntensity={10} shininess={50}  reflectivity={1}/>
    </mesh>
  )
};

export default function CrystalCanvas() {
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
      style={{ width: '50vw', height: '50vw' }}
      frameloop="always"
      camera={{position: [0, -11, 0], fov: 10}}
      gl={{ preserveDrawingBuffer: true }}
      fog={{ color: 'red', near: 0, far: 100 }}
      >
      <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Crystal />
      </Suspense>

      <Preload all />
      </Canvas>

    </>
  )
}