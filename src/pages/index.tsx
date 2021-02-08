import React from "react"
import Lolly from "../Components/Lolly"
import Layout from "../Components/Layout"
import { navigate } from "gatsby"
export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center ">
          <div className="sm:mx-2 mx-1 lg:mx-4">
            <Lolly className="md:h-72 sm:h-52 h-32 lg:w-36 w-14 sm:w-28 lg:h-96" />
          </div>
          <div className="sm:mx-2 mx-1 lg:mx-4">
            <Lolly className="md:h-72 sm:h-52 h-32 lg:w-36 w-14 sm:w-28 lg:h-96" />
          </div>
          <div className="sm:mx-2 mx-1 lg:mx-4">
            <Lolly className="md:h-72 sm:h-52 h-32 lg:w-36 w-14 sm:w-28 lg:h-96" />
          </div>
          <div className="sm:mx-2 mx-1 lg:mx-4">
            <Lolly className="md:h-72 sm:h-52 h-32 lg:w-36 w-14 sm:w-28 lg:h-96" />
          </div>
          <div className="sm:mx-2 mx-1 lg:mx-4">
            <Lolly className="md:h-72 sm:h-52 h-32 lg:w-36 w-14 sm:w-28 lg:h-96" />
          </div>
        </div>
        <div className="mt-6 pb-3">
          <button
            className="inline-block sm:px-6 px-2 bg-transparent hover:bg-pink-700 shadow-lg hover:text-white hover:border-white border-pink-700 focus:outline-none  border-2 sm:border-4 text-pink-700 md:text-lg py-2 text-sm sm:py-4 rounded-full"
            onClick={() => navigate("/createLolly")}
          >
            Make a New Lolly To Send To a Friend
          </button>
        </div>
      </div>
    </Layout>
  )
}
