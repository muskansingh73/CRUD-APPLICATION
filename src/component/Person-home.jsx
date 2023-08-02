import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PersonHome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, geometry, material, mesh;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);

      geometry = new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Add animation logic here, e.g., rotating the mesh
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    init();

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return( 

  <canvas ref={canvasRef}
 />
  
)

}


export default PersonHome;