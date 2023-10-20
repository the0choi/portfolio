import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

function Arm({ isMobile }) {
  const { scene } = useGLTF('/power_arm/scene.gltf?url');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x += 0.003));

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // child.material.color.set(0xffffff);
        child.material.roughness = 0;
        child.material.metalness = 0.5;
        child.material.envMapIntensity = 10;
        child.material.shininess = 10 ;
        child.material.reflectivity = 1;
      }
    });
  }, [scene]);

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight color={0x85ccb8} intensity={50} distance={10} position={[0, 3, 2]} />
      <ambientLight intensity={1} />
      <primitive
        object={scene}
        scale={0.02}
        position={isMobile ? [0.4, 0.2, 0] : [0, 0.2, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
};

export default function ArmCanvas() {
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
      style={{ width: '60vw', height: 'max(50vw, 350px)' }}
      frameloop="always"
      camera={{position: [-10, -10, 0], fov: 10}}
      gl={{ preserveDrawingBuffer: true }}
      fog={{ color: '0x11151c', near: 0, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={true} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Arm isMobile={isMobile} />
      </Suspense>

    <Preload all />
    </Canvas>
  )
}