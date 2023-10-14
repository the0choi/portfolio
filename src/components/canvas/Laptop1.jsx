import { Suspense, useEffect, useState} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import sceneModel from '/laptop_1/scene.gltf?url';

function Laptop1({ isMobile }) {
  const { size } = useThree();
  const scaleFactor = isMobile ? 0.7 : 0.3;
  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const scale = scaleFactor * (canvasWidth / 1920);

  const laptop = useGLTF(sceneModel);

  return (
    <mesh>
      <hemisphereLight intensity={6} groundColor='black' />
      <pointLight intensity={0} />
      <primitive
        object={laptop.scene}
        scale={scale}
        position={isMobile ? [0, 0, 0] : [0, -0.3, 0]}
        rotation={[0.3, 0.3, -0.1]}
      />
    </mesh>
  )
};

export default function Laptop1Canvas() {
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
      frameloop="demand"
      shadows
      camera={{position: [10, 0, 10], fov: 20}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Laptop1 isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}