import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

function Crystal({ isMobile }) {
  const { scene } = useGLTF('/crystal_rock/scene.gltf?url');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.003));

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(0xffffff);
        child.material.roughness = 0;
        child.material.metalness = 0.5;
        child.material.envMapIntensity = 10;
        child.material.shininess = 10;
        child.material.reflectivity = 1;
      }
    });
  }, [scene]);

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={10} groundColor='white' />
      <ambientLight intensity={1} />
      <pointLight color={0x85ccb8} intensity={10} distance={20} position={[0, 3, 2]} />
      <pointLight color={0x9f85cc} intensity={10} distance={20} position={[0, 3, 2]} />
      <primitive
        object={scene}
        scale={1.2}
        position={isMobile ? [0, 0.2, 0] : [0, 0.2, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

export default function CrystalCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 500px)');
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
      style={{ width: '50vw', height: 'max(50vw, 350px)' }}
      frameloop="always"
      camera={{position: [0, -11, 0], fov: 11}}
      gl={{ preserveDrawingBuffer: true }}
      // fog={{ color: 'black', near: 0, far: 100 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={true} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Crystal isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}