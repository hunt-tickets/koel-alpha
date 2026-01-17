'use client';

import { Gravity, MatterBody } from "@/components/ui/gravity";

export default function GravityDemo() {
  return (
    <div className="w-full h-screen flex flex-col relative bg-koel-aqua overflow-hidden">
      {/* Header */}
      <div className="pt-20 px-4 z-10 relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-koel-teal w-full text-center font-display uppercase tracking-wider">
          Gravity Physics
        </h1>
        <p className="pt-4 text-base sm:text-lg md:text-xl text-koel-teal w-full text-center font-heading">
          Drag and drop the elements below
        </p>
      </div>

      {/* Gravity Container */}
      <Gravity
        gravity={{ x: 0, y: 1 }}
        className="w-full h-full"
        debug={false}
      >
        {/* KOEL Products as falling objects */}
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="15%"
          y="10%"
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-teal text-white rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Refillable
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="15%"
          angle={-10}
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-yellow text-koel-teal rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Sustainable
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-neutral-900 text-white rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Premium
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="70%"
          y="20%"
          angle={15}
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-teal text-white rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Natural
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="85%"
          y="15%"
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-yellow text-koel-teal rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Care
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="5%"
          angle={-5}
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-white text-koel-teal rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase border-2 border-koel-teal">
            KOEL
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="60%"
          y="8%"
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-neutral-900 text-koel-aqua rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Deodorant
          </div>
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="25%"
          y="25%"
          angle={10}
        >
          <div className="text-lg sm:text-xl md:text-2xl bg-koel-teal text-koel-aqua rounded-full hover:cursor-grab px-6 py-3 font-heading uppercase">
            Fresh
          </div>
        </MatterBody>
      </Gravity>

      {/* Instructions */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-koel-neutral-600 text-sm font-body">
          Click and drag to interact with the physics simulation
        </p>
      </div>
    </div>
  );
}
