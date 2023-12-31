import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

LaptopCanvas.propTypes = {
  title: PropTypes.string.isRequired,
  sceneModel: PropTypes.string.isRequired,
  isModelFirst: PropTypes.bool.isRequired,
  rotation: PropTypes.array.isRequired,
};

Laptop.propTypes = {
  sceneModel: PropTypes.string.isRequired,
  rotation: PropTypes.array.isRequired,
};

function Laptop({ sceneModel, rotation }) {

  const laptop = useGLTF(sceneModel);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={4} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={laptop.scene}
        scale={0.1}
        position={[0, -0.3, 0]}
        rotation={rotation}
      />
    </mesh>
  )
};

export default function LaptopCanvas({ title, sceneModel, isModelFirst, rotation }) {

  return (
    <>
      <Canvas 
        style={{ width: '50vw', height: '50vw' }}
        frameloop="always"
        shadows
        camera={{position: [10, 0, 10], fov: 20}}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          enableZoom={false}
          enablePan={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Laptop sceneModel={sceneModel} rotation={rotation} />
        </Suspense>

        <Preload all />
      </Canvas>

      { isModelFirst ?
        <h1 
          className="lg:flex hidden absolute -z-10 text-black text-[110px] font-semibold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-clip text-center ml-2"
        >{`"${title}"`}</h1>
      :
        <h1 
          className="lg:flex hidden absolute -z-10 text-black text-[110px] ml-48 font-semibold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center"
        >{`"${title}"`}</h1>
    }
    </>
  )
}