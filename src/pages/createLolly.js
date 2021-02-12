import React, { useState } from "react"
import CustomLolly from "../Components/CustomLolly"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useFormik } from "formik"
const CreateLolly = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Heading */}
      <div className="text-center pt-4">
        <p className="md:text-6xl sm:py-6 text-red-300">Virtual LollyPop</p>
        <p className="text-red-300 text-xl w-2/3  mx-auto">
          because we all know someone who deserves some sugar.
        </p>
      </div>
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-around mt-10 pb-10">
        {/* Left Part */}
        <div className="flex items-center mb-5">
          <CustomLolly
            color1={"#428df5"}
            color2={"#27b5cf"}
            color3={"#cf2794"}
          />
        </div>
        {/* Right Part */}
        <div className="flex flex-col h-full p-5  sm:w-3/5 w-full mx-5 items-center">
          <div className="bg-pink-400 p-5 text-lg md:w-3/4 my-3">
            <a href="https://serverless-virlolly.netlify.app/lollies/6lEmlTivK "target="blank">
              https://serverless-virlolly.netlify.app/lollies/6lEmlTivK
            </a>
          </div>
          {/* Content  */}
          <div className="border-2 border-pink-700 sm:w-full m-0  sm:mx-0 sm:px-8 py-4 font-semibold text-white text-xl">
            <div className="my-5">TO</div>
            <div className="my-5">
              lorem20jkhkjhcvkjd jksbfbajbkbkjbjkdbkdxja ckj djbajkd akdakj
              kdkjakjf akjb{" "}
            </div>
            <div className="float-right mr-5">From</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLolly
