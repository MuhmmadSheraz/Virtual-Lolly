import React from "react"

const index = ({ children }: any) => {
  return (
    <div className="flex  flex-col font-bold bg-gray-900 min-h-screen min-w-full">
      <div className="text-center py-8">
        <p className="md:text-6xl sm:py-6 text-red-300">Virtual LollyPop</p>
        <p className="text-red-300 text-xl w-2/3  mx-auto">
          because we all know someone who deserves some sugar.
        </p>
      </div>
      {children}
    </div>
  )
}

export default index
