import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "Date",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "Total",
    dataIndex: "age",
  },
  {
    title: "Division",
    dataIndex: "Division",
  },
  {
    title: "Team",
    dataIndex: "Team",
  },
  {
    title: "Teacher",
    dataIndex: "Teacher",
  },
  {
    title: "Time",
    dataIndex: "Time",
  },
  {
    title: "Item(In Charge)",
    dataIndex: "Item(In Charge)",
  },
  {
    title: "Detail",
    dataIndex: "detail",
  },
  {
    title: "Score",
    dataIndex: "Score",
  },
  {
    title: "Comment",
    dataIndex: "address",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 9,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 10,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
                detail: "asdasdasdasdas",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
const Spreadheet = () => {
  return (
    <Table
      columns={columns}
      // rowSelection={{
      //   ...rowSelection,
      // }}
      dataSource={data}
    />
  );
};
export default Spreadheet;
