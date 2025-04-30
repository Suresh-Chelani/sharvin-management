import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GlobeMesh = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const cloudsRef = useRef<THREE.Mesh>(null);
    const atmosphereRef = useRef<THREE.Mesh>(null);
    const oceanRef = useRef<THREE.Mesh>(null);

    // Load Earth textures from high-quality NASA assets
    const textureLoader = new THREE.TextureLoader();
    const earthDayMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    const earthNormalMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png');
    const earthSpecularMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-water.png');
    const earthCloudsMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-clouds.png');
    const earthNightMap = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-night.jpg');

    useFrame(({ clock }) => {
        const rotationSpeed = 0.05;
        if (meshRef.current) {
            meshRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = clock.getElapsedTime() * (rotationSpeed * 1.1);
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
        }
        if (oceanRef.current) {
            oceanRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
        }
    });

    return (
        <>
            {/* Ocean layer */}
            <Sphere ref={oceanRef} args={[0.995, 128, 128]}>
                <meshPhysicalMaterial
                    color={new THREE.Color('#14b8a6')}
                    transparent={true}
                    transmission={0.6}
                    thickness={0.5}
                    roughness={0.1}
                    metalness={0.1}
                    clearcoat={0.8}
                    clearcoatRoughness={0.2}
                    ior={1.4}
                />
            </Sphere>

            {/* Main Earth sphere */}
            <Sphere ref={meshRef} args={[1, 128, 128]}>
                <meshPhysicalMaterial
                    map={earthDayMap}
                    normalMap={earthNormalMap}
                    normalScale={new THREE.Vector2(3.5, 3.5)}
                    roughnessMap={earthSpecularMap}
                    roughness={0.7}
                    metalness={0.1}
                    envMapIntensity={0.4}
                    clearcoat={0.1}
                    clearcoatRoughness={0.4}
                    emissiveMap={earthNightMap}
                    emissive={new THREE.Color('#14b8a6')}
                    emissiveIntensity={0.1}
                />
            </Sphere>

            {/* Cloud layer */}
            <Sphere ref={cloudsRef} args={[1.003, 128, 128]}>
                <meshPhysicalMaterial
                    map={earthCloudsMap}
                    transparent={true}
                    opacity={0.4}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    roughness={1}
                    metalness={0}
                    clearcoat={0.1}
                />
            </Sphere>

            {/* Atmosphere glow */}
            <Sphere ref={atmosphereRef} args={[1.02, 128, 128]}>
                <meshPhysicalMaterial
                    color={new THREE.Color('#6366f1')}
                    transparent={true}
                    opacity={0.2}
                    depthWrite={false}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                    roughness={0.2}
                    metalness={0}
                    clearcoat={0.5}
                    transmission={0.6}
                />
            </Sphere>
        </>
    );
};

const GlobeVisualization = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 2.8],
                fov: 45,
                near: 0.1,
                far: 1000
            }}
        >
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Enhanced lighting setup */}
            <ambientLight intensity={0.8} color={new THREE.Color('#ffffff')} />
            <directionalLight
                position={[5, 3, 5]}
                intensity={3}
                color={new THREE.Color('#ffffff')}
                castShadow
            />
            <pointLight
                position={[-10, -10, -10]}
                intensity={1}
                color={new THREE.Color('#6366f1')}
            />
            <pointLight
                position={[10, 10, 10]}
                intensity={1.5}
                color={new THREE.Color('#14b8a6')}
            />
            <hemisphereLight
                position={[0, 1, 0]}
                intensity={0.3}
                color={new THREE.Color('#ffffff')}
                groundColor={new THREE.Color('#000000')}
            />

            <GlobeMesh />

            <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                rotateSpeed={0.3}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                minDistance={2}
                maxDistance={4}
            />
        </Canvas>
    );
};

export default GlobeVisualization;