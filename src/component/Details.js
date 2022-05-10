import React, { useEffect, useState } from 'react'
import { getDataId } from '../api/empApi'
import { useDispatch } from "react-redux";

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState([])

  const getdata = async () => {
    const res = await getDataId(match.params.id)
    dispatch({ type: 'EMP_ID_SUCCESS' });
    setInput(res.data.data)
    console.log("responessss12233", res.data.data);
  }

  useEffect(() => {
    getdata()
  }, []);

  return (
    <>
      <div>
        <h3>
          {
            input && input.length > 0 && input.map((item) => (
              <>
                <h2>{item.id}</h2>
                <h2>{item.empName}</h2>
                <h2>{item.address}</h2>
                <h2>{item.post}</h2>
                <h2>{item.phoneNo}</h2>
                <h2>{item.gender}</h2>

              </>
            )
            )
          }
        </h3>
      </div>
    </>
  )
}

export default Details