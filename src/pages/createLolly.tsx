import React, { useState } from "react"
import CustomLolly from "../Components/CustomLolly"
import { gql, useMutation, useQuery } from "@apollo/client"


const CreateLolly = () => {
  const [color1, setColor1] = useState("#DFD70F")
  const [color2, setColor2] = useState("#D71588")
  const [color3, setColor3] = useState("#11A3D9")
  const [formData, setFormData] = useState<any>({
    to: "lol",
    from: "pop",
    messageBody: "lol is pop or vice versa",
  })

  const CREATE_LOLLY_CARD_MUTATION = gql`
    mutation createLollyCard(
      $color1: String!
      $color2: String!
      $color3: String!
      $to: String!
      $from: String!
      $messageBody: String!
    ) {
      createLollyCard(
        color1: $color1
        color2: $color2
        color3: $color3
        to: $to
        from: $from
        messageBody: $messageBody
      ) {
        from
      }
    }
  `

  const [createLollyCard] = useMutation(CREATE_LOLLY_CARD_MUTATION)

  const dataHandler = e => {
    const { name, value } = e.target
    console.log(e.target.value)
    setFormData(preval => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }
  const handleSubmit = () => {
    console.log("Hello I am Clicked")
    createLollyCard({
      variables: {
        color1,
        color2,
        color3,
        from: "formData.from",
        to: "formData.to",
        messageBody: "formData.messageBody",
      },
    })
    // setFormData({
    //   to: "",
    //   from: "",
    //   messageBody: "",
    // })
    // console.log(data)
  }
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
          <CustomLolly color1={color1} color2={color2} color3={color3} />
          <div className="flex flex-col ml-10">
            <input
              type="color"
              className="mt-5"
              onChange={e => setColor1(e.target.value)}
              value={color1}
            />
            <input
              type="color"
              className="mt-5"
              onChange={e => setColor2(e.target.value)}
              value={color2}
            />
            <input
              type="color"
              className="mt-5"
              onChange={e => setColor3(e.target.value)}
              value={color3}
            />
          </div>
        </div>
        {/* Right Part */}
        <div className="flex flex-col border-2 border-pink-700 h-full p-5  sm:w-3/5 w-3/4 mx-5">
          <div>
            <div>
              <input
                name="to"
                onChange={e => dataHandler(e)}
                placeholder="To"
                className="my-2 p-4 w-full"
                value={formData.to}
              />
            </div>
            <div>
              <textarea
                name="messageBody"
                onChange={e => dataHandler(e)}
                placeholder="Your Message"
                className="my-2 p-4 w-full h-40"
                value={formData.messageBody}
              />
            </div>
            <div>
              <input
                name="from"
                onChange={e => dataHandler(e)}
                placeholder="From"
                className="my-2 p-4 w-full "
                value={formData.from}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="inline-block sm:px-6 px-2 bg-transparent hover:bg-pink-700 shadow-lg hover:text-white hover:border-white border-pink-700 focus:outline-none  border-2 sm:border-4 text-pink-700 md:text-lg py-2 text-sm sm:py-4 rounded-full"
            >
              Freeze This Lolly To Get This a Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLolly
