import React, { useEffect, useState } from "react";

function Events({ current, setCurrent, start, setStart, fail }) {
  const hints = [
    {
      hint: "From childhood we have been told that TOGETHER WE are STRONGER. If worked together we can be as strong as Virat in RCB.",
      category: ["T-Shirt"],
    },
    {
      hint: "Many of the time we hear that people need some bonus to be motivated, to work overtime but once you start loving what you do there is NO OVERTIME",
      category: ["T-Shirt", ", Puma", ", Nike", ", Off-White"],
    },
    {
      hint: "I am in Physics and I run at faster than you or maybe at 3x100000000",
      category: ["T-Shirt", ", Nike", ", H&M"],
    },
  ];
  return (
    <div className="px-44 py-12">
      {!start ? (
        <div className=" border rounded-3xl flex flex-col gap-y-2  h-auto p-4 content-center w-auto">
          <div className="flex gap-x-12 items-center">
            <p className="text-pink-500 font-semibold  text-2xl">
              The Myntra Hunt
            </p>
            <button
              onClick={() => setStart(true)}
              className="bg-pink-500 text-white px-6      rounded-2xl h-12"
            >
              Join The Event
            </button>
          </div>
          <p className="font-semibold">
            <span className="text-pink-500 font-semibold">Prize Pool: </span>
            4999 Myntra Credit
          </p>
          <div>
            <img
              alt=""
              className="h-40 w-3/4 object-cover rounded-3xl my-8 opacity-90"
              src="https://escapetrails.co/wp-content/uploads/2020/03/Treasure-hunt.jpg"
            />
          </div>
        </div>
      ) : current > hints.length ? (
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-green-500 font-semibold text-3xl">
            Congratulations! You have won 4999 Myntra Credit
          </p>
          <p className="text-xl">Use it to shop exclusive products</p>
        </div>
      ) : fail >= 2 ? (
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-red-600 font-semibold text-3xl">
            Sorry! Try next time
          </p>
        </div>
      ) : (
        <div>
          <p className="text-pink-500 font-semibold  text-2xl">
            Let the hunt begin!
          </p>
          {hints.map((item, index) => {
            if (index + 1 <= current) {
              console.log(current > index);
              return (
                <div className="border-2 rounded-xl p-4 h-44 my-4 flex gap-y-1 flex-col content-center ">
                  {current > index + 1 && (
                    <p className="text-green-500 font-semibold">Completed</p>
                  )}
                  <p className="text-pink-500 font-semibold  text-xl">
                    Hint {index + 1}:
                  </p>
                  <p className="text-xl">{item.hint}</p>
                  <p className="text-pink-500 font-semibold">
                    Category:{" "}
                    {item.category.map((temp) => (
                      <span>{temp + " "}</span>
                    ))}
                  </p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Events;
