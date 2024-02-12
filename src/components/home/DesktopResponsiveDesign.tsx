export default function DesktopResponsiveDesign() {
  return (
    <>
      <div className="hidden desktop:block tablet:hidden mobile:hidden">
        <div className="flex justify-start">
          <div className="w-6/12 relative">
            <img
              className="absolute top-14 right-0 z-50"
              src="/images/graphic-athletes-desktop.png"
              alt="athletes-bg"
            />
          </div>
        </div>
        <div className="bg-white pt-20">
          <div className="flex justify-end">
            <div className="w-5/12">
              <h1 className="font-roboto text-8xl font-normal text-gray-200 leading-tight ">
                ATHLETES
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className=" flex justify-end">
            <div className="w-5/12">
              <span className="flex items-end mb-8">
                <span className="relative text-2xl text-black font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-purple-800"></span>
                  01
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  CONNECTION
                </span>
              </span>
              <p className="font-roboto text-2xl text-black font-medium tracking-wider">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-16">
          <div className="flex justify-end">
            <div className="w-5/12">
              <div className="flex items-end mb-8">
                <span className="relative text-2xl text-black font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-purple-800"></span>
                  02
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  COLLABORATION
                </span>
              </div>
              <p className="font-roboto text-2xl text-black font-medium tracking-wider">
                Work with other student athletes to increase visibility. When
                you share and like other players' videos it will increase your
                visibility as a player. This is the teamwork aspect of Surface
                1.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-violet-700 py-16">
          <div className="flex justify-end">
            <div className="w-5/12">
              <div className="flex items-end mb-8">
                <span className="relative text-2xl text-black font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-white"></span>
                  03
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  GROWTH
                </span>
              </div>
              <p className="font-roboto text-2xl text-white font-medium tracking-wider">
                Resources and tools for you to get better as a student athlete.
                Access to training classes, tutor sessions, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-6/12 relative">
            <img
              className="absolute top-14 -left-24 z-50"
              src="/images/graphic-player-desktop.png"
              alt="player-bg"
            />
          </div>
        </div>
        <div className="bg-white pt-32 px-96">
          <div className="flex justify-start">
            <div className="w-7/12">
              <h1 className="font-roboto text-8xl font-normal text-gray-200 leading-tight ">
                PLAYERS
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 px-96">
          <div className=" flex justify-start">
            <div className="w-7/12">
              <span className="flex items-end mb-8">
                <span className="relative text-2xl text-black font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-purple-800"></span>
                  01
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  CONNECTION
                </span>
              </span>
              <p className="font-roboto text-2xl text-black font-medium tracking-wider">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-16 px-96">
          <div className="flex justify-start">
            <div className="w-7/12">
              <div className="flex items-end mb-8">
                <span className="relative text-2xl text-black font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-purple-800"></span>
                  02
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  COLLABORATION
                </span>
              </div>
              <p className="font-roboto text-2xl text-black font-medium tracking-wider">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 py-16 px-96">
          <div className="flex justify-start">
            <div className="w-7/12">
              <div className="flex items-end mb-8">
                <span className="relative text-2xl text-violet-600 font-medium">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-white"></span>
                  03
                </span>
                <span className="font-roboto text-4xl font-normal leading-7 tracking-widest ml-3 text-gray-300">
                  GROWTH
                </span>
              </div>
              <p className="font-roboto text-2xl text-white font-medium tracking-wider">
                Save your time, recruit proper athlets for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
