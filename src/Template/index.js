import React, { useState } from "react"
import CustomLolly from "../Components/CustomLolly"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useFormik } from "formik"
const ReceiveLolly = () => {
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
        <div className="flex flex-col border-2 border-pink-700 h-full p-5  sm:w-3/5 w-3/4 mx-5">
          <div>
            {/* Form Here */}
            <form onSubmit={formik.handleSubmit}>
              <label className="text-white" htmlFor="to">
                To{" "}
              </label>
              <input
                id="to"
                name="to"
                type="text"
                className="my-2 p-4 w-full"
                placeholder="To"
                onChange={formik.handleChange}
                value={formik.values.to}
              />
              {formik.errors.to ? (
                <div className="text-red-600">{formik.errors.to}</div>
              ) : null}
              <label className="text-white" htmlFor="messageBody">
                Your Message
              </label>
              <input
                id="messageBody"
                name="messageBody"
                type="text"
                className="my-2 p-4 w-full h-40"
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.messageBody}
              />
              {formik.errors.messageBody ? (
                <div className="text-red-600">{formik.errors.messageBody}</div>
              ) : null}
              <label className="text-white" htmlFor="from">
                From
              </label>
              <input
                id="from"
                name="from"
                type="from"
                placeholder="From"
                className="my-2 p-4 w-full "
                onChange={formik.handleChange}
                value={formik.values.from}
              />
              {formik.errors.from ? (
                <div className="text-red-600">{formik.errors.from}</div>
              ) : null}
              <div className="mt-6">
                <button
                  // onClick={handleSubmit}
                  type="submit"
                  className="inline-block sm:px-6 px-2 bg-transparent hover:bg-pink-700 shadow-lg hover:text-white hover:border-white border-pink-700 focus:outline-none  border-2 sm:border-4 text-pink-700 md:text-lg py-2 text-sm sm:py-4 rounded-full"
                >
                  Freeze This Lolly To Get This a Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLolly
