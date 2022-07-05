import * as THREE from 'three'
import React, { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { FiguresPropsType } from './types'
import { ThreeEvent } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
};

export const Queen: FC<FiguresPropsType> = ({ id, position, color, onFigureSelect }): JSX.Element => {

  const { nodes } = useGLTF('figures/queen.gltf') as GLTFResult

  const onFigureClick = (event: ThreeEvent<MouseEvent>) => {
    onFigureSelect(id)
  }

  return (

    <group
      onClick={onFigureClick}
      position={position}
      scale={[0.3, 0.3, 0.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
        <meshPhysicalMaterial color={color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('figures/queen.gltf')