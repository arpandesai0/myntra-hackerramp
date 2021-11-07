import React from "react";
import logo from "../assets/myntra_logo.png";
import event from "../assets/event.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="flex justify-between py-6 px-12 shadow-lg items-center">
        <div className="">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 " />
          </Link>
        </div>
        <div className="flex space-x-6 ml-16 text-base font-semibold">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
          <p>HOMES & LIVING</p>
          <p>BEAUTY</p>
        </div>
        <div className="text-sm ml-12">
          <div class="relative text-gray-400 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <Link
                to="/products"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </Link>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search"
              autocomplete="off"
            />
          </div>
        </div>
        <div className="flex text-xs space-x-6">
          <div className="flex flex-col items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p>Profile</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p>Bag</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <Link to="/events">
              <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1">
                <title>event</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Two-Tone"
                    transform="translate(-613.000000, -244.000000)"
                  >
                    <g
                      id="Action"
                      transform="translate(100.000000, 100.000000)"
                    >
                      <g
                        id="Two-Tone-/-Action-/-event"
                        transform="translate(510.000000, 142.000000)"
                      >
                        <g>
                          <polygon
                            id="Path"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <polygon
                            id="🔹-Secondary-Color"
                            fill="#D0D0D0"
                            points="5 8 19 8 19 6 5 6"
                          ></polygon>
                          <path
                            d="M19,4 L18,4 L18,2 L16,2 L16,4 L8,4 L8,2 L6,2 L6,4 L5,4 C3.89,4 3.01,4.9 3.01,6 L3,20 C3,21.1 3.89,22 5,22 L19,22 C20.1,22 21,21.1 21,20 L21,6 C21,4.9 20.1,4 19,4 Z M19,20 L5,20 L5,10 L19,10 L19,20 Z M19,8 L5,8 L5,6 L19,6 L19,8 Z M12,13 L17,13 L17,18 L12,18 L12,13 Z"
                            id="🔹-Primary-Color"
                            fill="#1D1D1D"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <p>Event</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
