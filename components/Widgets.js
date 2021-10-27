import { DotsHorizontalIcon } from "@heroicons/react/solid";

function Widgets() {
  return (
    <div className="hidden xl:inline-block w-60 pt-2">
      <div className="flex items-center p-2 bg-[#1a1c20] rounded-tl-lg rounded-bl-lg">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h3 className="font-semibold ml-3">Anas Abbasi</h3>
      </div>
      {/* messenger */}
      <div className="mt-3 bg-[#1a1c20] p-3">
        <div className="flex items-center justify-between">
          <h3>Messenger</h3>
          <button className="font-semibold text-blue-500">All</button>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h4 className="ml-2 text-sm flex-1">Devon Lane</h4>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h4 className="ml-2 text-sm flex-1">Devon Lane</h4>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>

          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h4 className="ml-2 text-sm flex-1">Devon Lane</h4>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>

          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h4 className="ml-2 text-sm flex-1">Devon Lane</h4>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mt-4 bg-[#1a1c20] p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">Recently Events</h3>
          <DotsHorizontalIcon className="h-6" />
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex ">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-11 w-11 rounded-lg"
            />
            <div className="ml-3">
              <h4 className="text-sm">Apple Events</h4>
              <p className="text-xs text-gray-400">Mon 25-10-2021</p>
            </div>
          </div>

          <div className="flex ">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-11 w-11 rounded-lg"
            />
            <div className="ml-3">
              <h4 className="text-sm">Apple Events</h4>
              <p className="text-xs text-gray-400">Mon 25-10-2021</p>
            </div>
          </div>

          <div className="flex ">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-11 w-11 rounded-lg"
            />
            <div className="ml-3">
              <h4 className="text-sm">Apple Events</h4>
              <p className="text-xs text-gray-400">Mon 25-10-2021</p>
            </div>
          </div>

          <div className="flex ">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-11 w-11 rounded-lg"
            />
            <div className="ml-3">
              <h4 className="text-sm">Apple Events</h4>
              <p className="text-xs text-gray-400">Mon 25-10-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
