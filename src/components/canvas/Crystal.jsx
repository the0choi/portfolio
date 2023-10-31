import { Suspense, useEffect, useState, useRef, createContext, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import PropTypes from 'prop-types';

HDRBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

const HDRContext = createContext();

function HDRBackground({ children }) {
  const { gl, scene } = useThree();
  const [hdrTexture, setHdrTexture] = useState(null);

  useEffect(() => {
    const loader = new RGBELoader();
    loader.load('/portfolio/crystal_rock/gradient_2.hdr', (texture) => {
      const pmremGenerator = new THREE.PMREMGenerator(gl);
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      setHdrTexture(envMap);
      pmremGenerator.dispose();
    });

    scene.fog = new THREE.Fog(0x11151c, 1, 100);
  }, [gl, scene]);

  return <HDRContext.Provider value={hdrTexture}>
    {children}
  </HDRContext.Provider>;
}

function Crystal() {  
  const { scene } = useGLTF('/portfolio/crystal_rock/scene.gltf?url');
  const mesh = useRef();
  const materialRef = useRef();
  const hdrTexture = useContext(HDRContext); 

  scene.traverse((child) => {
    if (child.isMesh && child.name === "Stone_low_1_Stone_low_1_0") {
      child.material.envMap = hdrTexture;
      child.material.roughness = 0;
      child.material.metalness = 1;
      child.material.envMapIntensity = 10;
      // child.material = new THREE.MeshStandardMaterial({
      //   envMap: hdrTexture,
      //   needsUpdate: true,
      //   color: 0xffffff,
      //   roughness: 0,
      //   metalness: 1,
      //   envMapIntensity: 1,
      // });
    }
  });

  useFrame(() => (mesh.current.rotation.y += 0.003));

  useEffect(() => {
    if (hdrTexture && materialRef.current) {
      materialRef.current.envMap = hdrTexture;
      materialRef.current.needsUpdate = true;
    }
  }, [hdrTexture]);

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={10} groundColor='black' />
      <pointLight color={0x85ccb8} intensity={20} distance={20} position={[0, 3, 2]} />
      <pointLight color={0x9f85cc} intensity={20} distance={20} position={[0, 3, -2]} /> 
      <primitive
        object={scene}
        scale={1.2}
        position={[0, 0.2, 0]}
        rotation={[0, 0, 0]}
      />
      <meshStandardMaterial ref={materialRef} />
    </mesh>
  );
}

export default function CrystalCanvas() {
  return (
    <Canvas
      style={{ width: '50vw', height: 'max(50vw, 350px)' }}
      frameloop="always"
      camera={{ position: [0, -11, 0], fov: 11 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HDRBackground>
          <Crystal />
        </HDRBackground>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
