import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div
      id="Main"
      className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col "
    >
      <div className="block mx-auto">
        <div className="hidden xl:flex justify-center p-6 items-center space-x-3">
          <img
            className="w-40 h-40"
            src="../../../public/assets/authorization_management_system_logo.png"
          ></img>
        </div>
      </div>
      {/* <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
        <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
          <svg
            className="fill-stroke "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <p className="text-base leading-4 ">Dashboard</p>
        </button>
      </div> */}

      {/* <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
        <button className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
          <p className="text-lg tracking-widest font-medium leading-5  uppercase">
            Rol
          </p>
          <ChevronUpIcon width={24} height={48} />
        </button>
        <div
          id="menu1"
          className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
        >
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              className="fill-stroke"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Rol Oluştur</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Rol Ata</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Rol Kaldır</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Notifications</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Passwords</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Goals</p>
          </button>
        </div>
      </div> */}

      <div className="w-full px-6 border-b border-gray-600">
        <Disclosure
          as="div"
          className="flex flex-col justify-start items-center"
        >
          {({ open }) => (
            <>
              <DisclosureButton className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full py-2">
                <span className="text-lg tracking-widest font-medium leading-5 uppercase">
                  Rol
                </span>
                {open ? (
                  <ChevronUpIcon width={24} height={48} />
                  ) : (
                  <ChevronDownIcon width={24} height={48} />
                )}
              </DisclosureButton>
              <DisclosurePanel className="flex justify-start flex-col w-full md:w-auto items-start pb-1">
              <Link to={"/roles"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    className="fill-stroke"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Roller</p>
                </Link>

                <Link to={"/roles/create"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    className="fill-stroke"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Rol Oluştur</p>
                </Link>

                <Link to={"/roles/assign-permission"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4  ">Rol' e Yetki Ata</p>
                </Link>
                <Link to={"/roles/delete"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4  ">Rolü Sil</p>
                </Link>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="w-full px-6 border-b border-gray-600">
        <Disclosure
          as="div"
          className="flex flex-col justify-start items-center"
        >
          {({ open }) => (
            <>
              <DisclosureButton className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full py-2 space-x-14">
                <span className="text-lg tracking-widest font-medium leading-5 uppercase">
                  Yetki
                </span>
                {open ? (
                  <ChevronUpIcon width={24} height={48} />
                ) : (
                  <ChevronDownIcon width={24} height={48} />
                )}
              </DisclosureButton>
              <DisclosurePanel className="flex justify-start flex-col w-full md:w-auto items-start pb-1">
                {/* Your menu items here */}
                <Link to={"/permissions"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Yetkiler</p>
                </Link>

                <Link to={"/permissions/create"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Yetki Oluştur</p>
                </Link>

                <Link to={"/permissions/list-roles"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4  ">Yetkili Roller</p>
                </Link>
                <Link to={"/permissions/delete"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4  ">Yetki Sil</p>
                </Link>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>


      <div className="w-full px-6 border-b border-gray-600">
        <Disclosure
          as="div"
          className="flex flex-col justify-start items-center"
        >
          {({ open }) => (
            <>
              <DisclosureButton className=" focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full py-2 space-x-9">
                <span className="text-lg tracking-widest font-medium leading-5 uppercase ">
                  Kullanıcılar
                </span>
                {open ? (
                  <ChevronUpIcon width={24} height={48} />
                ) : (
                  <ChevronDownIcon width={24} height={48} />
                )}
              </DisclosureButton>
              <DisclosurePanel className="flex justify-start flex-col w-full md:w-auto items-start pb-1">
                {/* Your menu items here */}
                <Link to={"/users"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Kullanıcılar</p>
                </Link>

                <Link to={"/users/create"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Kullanıcı Oluştur</p>
                </Link>

                <Link to={"/users/assign-role"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4">Kullanıcıya Rol Ata</p>
                </Link>

                <Link to={"/users/list-roles"} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="text-base leading-4  ">Kullanıcı Rolü Sil</p>
                </Link>
                
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>

      {/* <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
        <button className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
          <p className="text-lg tracking-widest font-medium leading-5  uppercase">
            Yetki
          </p>
          <ChevronUpIcon width={24} height={48} />
        </button>
        <div
          id="menu1"
          className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
        >
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              className="fill-stroke"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Yetki Oluştur</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Yetki Ata</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Yetki Kaldır</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Notifications</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Passwords</p>
          </button>
          <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <p className="text-base leading-4  ">Goals</p>
          </button>
        </div>
      </div> */}

      {/* <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
          <button className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5  uppercase">SERVICES</p>
            <svg
              id="icon3"
              className="rotate-180 transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </button>

          <div className=" flex justify-between items-center w-full">
            <div className="flex justify-center items-center  space-x-2">
              <div>
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex justify-start flex-col items-start">
                <p className="cursor-pointer text-sm leading-5 text-white">
                  Alexis Enache
                </p>
                <p className="cursor-pointer text-xs leading-3 text-gray-300">
                  alexis81@gmail.com
                </p>
              </div>
            </div>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </div>
        </div> */}
    </div>
  );
};

export default Sidebar;
