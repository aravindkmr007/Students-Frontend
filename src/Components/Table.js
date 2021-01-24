import MaterialTable from "material-table";
import React from "react";
import "./Table.css";

function Table({Data}) {
  const Columns = [
    {
      title: "Student ID",
      field: "stu_id",
      cellStyle: {
        textAlign: "center",
      },
      filtering : true
    },
    {
      title: "First Name",
      field: "firstname",
      cellStyle: {
        textAlign: "center",
      },
      filtering : false
    },
    {
      title: "Last Name",
      field: "lastname",
      cellStyle: {
        textAlign: "center",
      },
      filtering : false
    },
    {
        title: "E mail",
        field: "email",
        cellStyle: {
          textAlign: "center",
        },
        filtering : false
      },
    {
      title: "Date of Birth",
      field: "dob",
      type: "Date",
      cellStyle: {
        textAlign: "center",
      },
      filtering : false
    },
  ];
  return (
    <div className="Table">
      <MaterialTable
        title={"Students Details"}
        data={Data.map((e) => e)}
        columns={Columns.map((e) => e)}
        options={{
          headerStyle: {
            backgroundColor: "#3d4977",
            textAlign: "center",
            color: "white",
            fontWeight: "600",
          },
          filtering : true,
          exportButton :true
        }}
      />
    </div>
  );
}

export default Table;
