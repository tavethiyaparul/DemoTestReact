import React, { useEffect, useState } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch } from "react-redux";
import { getData, deleteData, updateData } from "../api/empApi"
import LaunchIcon from "@material-ui/icons/Launch";
import Beenhere from "@material-ui/icons/Beenhere";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import "./EmpDetails.js"


const EmpDetails = () => {
  const dispatch = useDispatch();
  const [arr, setarr] = useState([])
  const [state, setState] = useState()

  const userTableStyles = {
    height: '200px',
  }

  const getDetails = async () => {
    dispatch({ type: 'EMP_REQUEST' })
    let res = await getData();
    dispatch({ type: 'EMP_SUCCESS' });
    setarr(res.data.data)
  }

  const deleted = async (e, id) => {
    e.stopPropagation();
    console.log("id", id);
    const res = await deleteData(id)
    console.log("deleted", res);
    getDetails()
  }

  // const Updatedata = (e:GridCellEditCommitParams) => {
  //   const array= state.map(r=>{
  //     if(r.id === e.id){
  //       return {...r,[e.field]:e.value}
  //     }
  //   })
  // }

  useEffect(() => {
    getDetails();
  }, []);

  const columns = [
    { field: "id", headerName: "Emp ID", minWidth: 120, flex: 1 },
    { field: "empName", headerName: "Emp Name", minWidth: 80, flex: 1, editable: true },
    { field: "address", headerName: "Address", minWidth: 120, flex: 1, editable: true },
    { field: "post", headerName: "Post", minWidth: 100, flex: 1, editable: true },
    { field: "phoneNo", headerName: "Phone No", minWidth: 80, flex: 1, editable: true },
    { field: "gender", headerName: "Gender", minWidth: 80, flex: 1, editable: true },
    {
      field: "actions",
      flex: 1,
      headerName: "Actions",
      minWidth: 30,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`emp/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },

    {
      field: "delete",
      flex: 1,
      headerName: "Delete",
      minWidth: 30,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <DeleteIcon onClick={(e) => deleted(e, params.id)} />
        );
      },
    },
  ];
  const rows = [];

  arr && arr.length > 0 && arr.map((item) => rows.push({
    id: item._id,
    empName: item.empName,
    address: item.address,
    post: item.post,
    phoneNo: item.phoneNo,
    gender: item.gender,
  })
  );
  // arr &&
  //   arr.forEach((item, index) => {
  //     rows.push({
  //       id: item._id,
  //       empName: item.empName,
  //       address: item.address,
  //       post: item.post,
  //       phoneNo: item.phoneNo,
  //       gender: item.gender,
  //     });
  //   });
  return (
    <>
      <div className="myOrdersPage">
        <DataGrid
          checkboxSelection={true}
          rows={rows}
          columns={columns}
          pageSize={10}
          autoHeight
          rowsPerPageOptions={[2, 5, 10]}
          sx={userTableStyles}
        />
      </div>

    </>
  )
}
export default EmpDetails