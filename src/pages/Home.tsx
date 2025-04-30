import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center ">popup</div> */}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          position: [0, 10, 80],
          fov: 50,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[-10, -10, -10]} />
          <hemisphereLight intensity={1} />
          <Island scale={1.5} position={[0, -1, 0]} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
