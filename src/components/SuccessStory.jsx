import React from "react";
import { motion } from "framer-motion";

const SuccessStory = () => {
  return (
    <div className="border-t-2 border-dashed">
      <section className="md:flex md:flex-row flex-col py-10 mx-4 md:ml-6">
        <div className=" md:w-2/4 my-auto md:pr-8 ">
          <div className="space-y-4">
            <h1 className="text-4xl text-center md:text-start font-bold ">
              Happiness Stories
            </h1>
            <p className="text-center md:text-start text-sm md:text-lg">
              Heartwarming stories of lost items finding their way back home,
              thanks to kindness and community. Every reunion inspires hope,
              gratitude, and the belief that good things still happen. These
              moments remind us that humanity shines brightest in times of need.
            </p>
          </div>
        </div>
        <div className="md:w-2/4 grid grid-cols-2 place-items-center md:pt-0 pt-6 ">
          <div className="col-span-2 lg:col-span-1 ">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-60 "
            >
              <div className="w-full h-36 border">
                <img
                  class="rounded-t-lg h-full w-full object-cover"
                  src="https://media.gettyimages.com/id/1473771646/photo/a-young-man-buys-a-new-car.jpg?s=612x612&w=gi&k=20&c=KQVBSxr4oZa_c3r1-qOIRerGdWp5fWfi7oDMAp-9tDE="
                  alt=""
                />
              </div>
              <div class="p-3">
                <a href="#">
                  <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Keys Returned by a Stranger
                  </h5>
                </a>
                <p class="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                  A stranger returned my lost keys through the website.
                  Gratitude for the honesty and quick help!
                </p>
              </div>
            </motion.div>
          </div>
          <div className="lg:flex flex-col gap-4 hidden ">
            {/* cart 01 */}
            <motion.div animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-64 w-60 ">
              <div className="w-full h-36 border">
                <img
                  class="rounded-t-lg h-full w-full object-cover"
                  src="https://people.com/thmb/28pMKtXElNMzA3owMFoXRevu_iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/heartwarming-dog-reunion-tout-120424-58cdc4ff003b4c84927a4fbf102e984c.jpg"
                  alt=""
                />
              </div>
              <div class="p-3">
                <a href="#">
                  <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pet Reunited Through Website
                  </h5>
                </a>
              </div>
            </motion.div>
            {/* cart 02 */}
            <motion.div animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-64 w-60 ">
              <div className="w-full h-36 border">
                <img
                  class="rounded-t-lg h-full w-full object-cover"
                  src="https://www.shutterstock.com/image-photo/like-it-cheerful-businessman-using-260nw-2159656581.jpg"
                  alt=""
                />
              </div>
              <div class="p-3">
                <a href="#">
                  <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Laptop Returned by Honest Finder
                  </h5>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStory;
