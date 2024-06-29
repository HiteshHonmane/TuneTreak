import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="xl:w-[95%] h-[50px] justify-between items-center flex ">
      <div className=" ">
        <div className="text-stone-950 text-2xl font-bold font-['SF Pro Display'] leading-[28.80px] tracking-tight">
          Discover
        </div>
        <div className="flex gap-4"></div>
      </div>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 ">
            <img
              className="w-[50px] h-[50px] rounded-xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />

            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-stone-950 text-base font-medium font-['SF Pro Display']">
                Wade Warren
              </div>
              <div className="text-stone-400 text-xs font-normal font-['SF Pro Display']">
                Premium
              </div>
            </div>
            <div className="  flex items-center justify-center ">
            <ChevronDownIcon
              className=" mt-4 h-5 w-5 ml-2 "
              aria-hidden="true"
            />

            </div>
           

          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account Settings
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                 License
                </a>
              )}
            </MenuItem>
          </div>
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Sign out
                </a>
              )}
            </MenuItem>
          </div>
          <div className="py-1">
            
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Delete account
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
