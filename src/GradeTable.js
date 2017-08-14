import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class GradeTable extends Component {
  render() {
    const {dataList} = this.props;
    return (
      <ReactTable
        data={dataList}
        defaultPageSize={25}
        className="-striped -highlight"
        columns={[
          {
            Header: "Studie",
            columns: [
              {
                Header: "Studiekode",
                accessor: "id"
              },
              {
                Header: "Studienavn",
                accessor: "name"
              }
            ]
          },
          {
            Header: "Suppleringsopptak",
            columns: [
              {
                Header: "ORD",
                accessor: "grades.SUPP.ORD[0]"
              },
              {
                Header: "FOR",
                accessor: "grades.SUPP.FOR[0]"
              },
              {
                Header: "INTK",
                accessor: "grades.SUPP.INTK[0]"
              },
              {
                Header: "JNTNUK",
                accessor: "grades.SUPP.JNTNUK[0]"
              },
              {
                Header: "ORDF",
                accessor: "grades.SUPP.ORDF[0]"
              }
            ]
          },
          {
            Header: "Hovedopptak",
            columns: [
              {
                Header: "ORD",
                accessor: "grades.HOVED.ORD[0]"
              },
              {
                Header: "FOR",
                accessor: "grades.HOVED.FOR[0]"
              },
              {
                Header: "INTK",
                accessor: "grades.HOVED.INTK[0]"
              },
              {
                Header: "JNTNUK",
                accessor: "grades.HOVED.JNTNUK[0]"
              },
              {
                Header: "ORDF",
                accessor: "grades.HOVED.ORDF[0]"
              }
            ]
          }
        ]}
      />
    )
  }
}
