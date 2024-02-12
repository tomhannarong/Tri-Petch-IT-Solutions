import SimpleSlider from "../ui/SimpleSlider";

export default function MobileResponsiveDesign() {
  return (
    <>
      <div className="desktop:hidden tablet:hidden mobile:block">
        <div className="py-8 px-8">
          <h1 className="font-roboto text-6xl font-normal mb-8 text-gray-200 leading-tight ">
            ATHLETES
          </h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center h-[180px]">
          <img
            className="absolute top-28 z-50"
            src="/images/graphic-athletes-mobile.png"
            alt="athletes-bg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <SimpleSlider>
            <div className="px-8 bg-white py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-violet-700"></span>
                  01
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-3 text-gray-400">
                  CONNECTION
                </span>
              </div>
              <h2 className="font-roboto text-lg text-black font-medium">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </h2>
            </div>
            <div className="px-8 bg-gray-100 py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-violet-700"></span>
                  02
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-3 text-gray-400">
                  COLLABORATION
                </span>
              </div>
              <p className="font-roboto text-lg text-black font-medium">
                Work with other student athletes to increase visibility. When
                you share and like other players' videos it will increase your
                visibility as a player. This is the teamwork aspect of Surface
                1.
              </p>
            </div>
            <div className="px-8 bg-violet-700 py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-white"></span>
                  03
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-2 text-gray-400">
                  GROWTH
                </span>
              </div>
              <p className="font-roboto text-lg text-white font-medium">
                Resources and tools for you to get better as a student athlete.
                Access to training classes, tutor sessions, etc.
              </p>
            </div>
          </SimpleSlider>
        </div>

        <div className="py-5 px-8">
          <h1 className="font-roboto text-6xl font-normal text-gray-200 leading-tight">
            PLAYERS
          </h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center h-[180px]">
          <img
            className="absolute z-50"
            src="/images/graphic-player-mobile.png"
            alt="players-bg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <SimpleSlider>
            <div className="px-8 bg-gray-100 py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-violet-700"></span>
                  01
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-3 text-gray-400">
                  CONNECTION
                </span>
              </div>
              <h2 className="font-roboto text-lg text-black font-medium">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </h2>
            </div>
            <div className="px-8 bg-gray-100 py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-violet-700"></span>
                  02
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-3 text-gray-400">
                  COLLABORATION
                </span>
              </div>
              <p className="font-roboto text-lg text-black font-medium">
                Work with other student athletes to increase visibility. When
                you share and like other players' videos it will increase your
                visibility as a player. This is the teamwork aspect of Surface
                1.
              </p>
            </div>
            <div className="px-8 bg-indigo-950 py-20 h-[400px]">
              <div className="flex items-start mb-5">
                <span className="relative text-xl text-violet-600">
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-2xl bg-white"></span>
                  03
                </span>
                <span className="font-roboto text-3xl font-normal leading-10 tracking-widest ml-2 text-gray-400">
                  GROWTH
                </span>
              </div>
              <p className="font-roboto text-lg text-white font-medium">
                Resources and tools for you to get better as a student athlete.
                Access to training classes, tutor sessions, etc.
              </p>
            </div>
          </SimpleSlider>
        </div>
      </div>
    </>
  );
}
