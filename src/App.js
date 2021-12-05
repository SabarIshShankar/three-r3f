import * as THREE from "THREE";
import { render } from "react-dom";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Sphere({ geometry, x, y, x, s }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.x =
      x + Math.sin((state.clock.getElapsedTime() * s) / 2);
    ref.current.position.y =
      z + Math.sin((state.clock.getElapsedTime() * s) / 2);
    ref.current.position.z =
      z + Math.sin((state.clock.getElapsedTime() * s) / 2);
  });

  return (
    <Mesh ref={ref} position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
      <meshStandardMaterial color="hotpink" roughness={1} />
    </Mesh>
  );
}
