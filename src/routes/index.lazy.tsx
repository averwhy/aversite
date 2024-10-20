import { createLazyFileRoute } from '@tanstack/react-router';
import ParticleImage, {
  type ParticleOptions,
  Vector,
  forces,
  type ParticleForce
} from "react-particle-image";

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: () => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const mouseForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 0.01);
};

const clickForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 35);
};

function Index() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <ParticleImage
          src={"/avry_transparent.png"}
          scale={2}
          creationDuration={1500}
          entropy={40}
          maxParticles={4200}
          particleOptions={particleOptions}
          mouseMoveForce={mouseForce}
          touchMoveForce={clickForce}
          mouseDownForce={clickForce}
          backgroundColor="#1e293b"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="font-bold text-white">
          <span>
          hey
          <p className='pb-5 text-center text-gray-400'>
            this site is a work in progress! so far /portfolio has had the most work done on it
            <br/>
            thanks for visiting :D
          </p>
          </span>
        </div>
      </div>
    </>
  )
}