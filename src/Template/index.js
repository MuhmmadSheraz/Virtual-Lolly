import { useQuery, gql } from "@apollo/client"
import React, { useState } from "react"
import CustomLolly from "../Components/CustomLolly"
export const query = gql`
  query getCustomLolly($Id: String) {
    getCustomLolly(Id: $Id) {
      color1
      color2
      color3
      to
      from
      messageBody
      Id
    }
  }
`

const RecieveLolly = props => {
  const { pageContext } = props
  console.log(pageContext)
  const { data, loading, err } = useQuery(query, {
    variables: { Id: pageContext.Id },
  })
  if (loading) {
    return <h4>Loading</h4>
  }
  if (err) {
    return <h4>{err.message}</h4>
  }
  console.log("data== => Agaya===>", data)
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
            color1={pageContext.color1}
            color2={pageContext.color2}
            color3={pageContext.color3}
          />
        </div>
        {/* Right Part */}
        <div className="flex flex-col h-full p-5  sm:w-3/5 w-full mx-5 items-center">
          <div className="bg-pink-400 p-5 text-lg md:w-3/4 my-3">
            <a
              href={`http://localhost:8000/lolly/${pageContext.Id}`}
              target="blank"
            >
              http://localhost:8000/lolly/{pageContext.Id}
            </a>
          </div>
          {/* Content  */}
          <div className="border-2 border-pink-700 sm:w-full m-0  sm:mx-0 sm:px-8 py-4 font-semibold text-white text-xl">
            <div className="my-5">{pageContext.to}</div>
            <div className="my-5">{pageContext.messageBody}</div>
            <div className="float-right mr-5">{pageContext.from}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecieveLolly
