"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    ["/texture/earth_daymap.jpg"]
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 24;
    cloudsRef.current.rotation.y = elapsedTime / 20;
  });

  return (
    <>
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={5}
        />
      </Sphere>
      <Sphere ref={cloudsRef} args={[1.01, 64, 64]}>
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>
      <Sphere args={[1.015, 64, 64]}>
        <meshPhongMaterial
          color="#88ccff"
          transparent={true}
          opacity={0.2}
          depthWrite={false}
        />
      </Sphere>
    </>
  );
}

function Lights() {
  const mouseLight = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, z: 5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({
        x: (x * viewport.width) / 2,
        y: (y * viewport.height) / 2,
        z: 5,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [viewport]);

  useFrame(() => {
    if (mouseLight.current) {
      mouseLight.current.position.set(
        mousePosition.x,
        mousePosition.y,
        mousePosition.z
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#4444ff" />
      <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={0.6} />
      <pointLight
        ref={mouseLight}
        color="#ffd700"
        intensity={0.8}
        distance={10}
        decay={2}
      />
    </>
  );
}

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      camera.position.z += event.deltaY * 0.005;
      camera.position.z = Math.max(2, Math.min(camera.position.z, 10));
    };
    gl.domElement.addEventListener("wheel", handleScroll);
    return () => gl.domElement.removeEventListener("wheel", handleScroll);
  }, [camera, gl]);
  return null;
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <Lights />
        <Earth />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <CameraController />
      </Canvas>
    </div>
  );
}
