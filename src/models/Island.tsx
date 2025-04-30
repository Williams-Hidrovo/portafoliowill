import { a } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh } from 'three'
import islandScene from '../assets/3d/island.glb'

interface IslandProps {
  scale?: number
  position?: [number, number, number]
}

const Island = (props: IslandProps) => {
  const islandRef = useRef<Group>(null)
  const { nodes, materials } = useGLTF(islandScene) as any

  useFrame((state, delta) => {
    if (islandRef.current) {
      islandRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <a.group ref={islandRef} {...props}>
      <mesh geometry={(nodes.polySurface944_tree_body_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface945_tree1_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface946_tree2_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface947_tree1_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface948_tree_body_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface949_tree_body_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.pCube11_rocks1_0 as Mesh).geometry} material={materials.PaletteMaterial001} />
    </a.group>
  )
}

useGLTF.preload(islandScene)
export default Island
