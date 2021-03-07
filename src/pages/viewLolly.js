import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import LollyTemplate from "../Components/LollyTemplate"
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
const ViewLolly = props => {
  const refId = props.location.search
  console.log(refId.slice(4, 25))
  const { data, loading, err } = useQuery(query, {
    variables: { Id: refId.slice(4, 25) },
  })
  if (loading) {
    return <h4>Loading</h4>
  }
  if (err) {
    return <h4>{err.message}</h4>
  }
  console.log("data== => Agaya===>", data)
  return (
    <div>
      <LollyTemplate data={data} />
    </div>
  )
}

export default ViewLolly
