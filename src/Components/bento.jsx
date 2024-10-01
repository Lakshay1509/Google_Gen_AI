import React from "react";
import { first, second } from "../assets/index.js";

const MyComponent = () => {
  return (
    <div class="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 ">
      <div class="flex h-1/3 flex-col items-center justify-center gap-4 text-center">
        <h1 class="text-2xl font-bold sm:text-6xl">Lorem Ipsum Dolor</h1>
        <h3 class="text-md font-semibold sm:text-3xl">
          Vivamus Consequat Quis Nunc Quis Malesuada
        </h3>
        <p class="text-sm text-slate-500 sm:text-base dark:text-slate-300">
          Nulla facilisi praesent egestas facilisis felis ac euismod sed
          fringilla ligula tristique ut amet suscipit.
        </p>
      </div>
      <div class="grid h-2/3 w-3/4 grid-cols-6 grid-rows-3 gap-4">
        <div class="col-span-2 row-span-1 rounded-3xl bg-orange-400 flex justify-center items-center">
          <div className="rounded-3xl">
            <img
              src={first}
              className="rounded-3xl  object-cover"
            />
          </div>
        </div>
        <div class="col-span-1 row-span-2 rounded-3xl bg-orange-400"></div>
        <div class="col-span-1 row-span-1 rounded-3xl bg-orange-400"></div>
        <div class="col-span-2 row-span-2 rounded-3xl bg-orange-400">
          <div className="rounded-3xl">
            <img src={first} className="rounded-3xl" />
          </div>
        </div>
        <div class="col-span-2 row-span-1 rounded-3xl bg-orange-400"></div>
        <div class="col-span-1 row-span-1 rounded-3xl bg-orange-400"></div>
      </div>
    </div>
  );
};

export default MyComponent;
