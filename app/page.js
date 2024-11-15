"use client";
import { Spin, Table } from "antd";
import { useEffect, useState } from "react";
import { data } from "./api/data";

const column = [
  {
    title: "Name", // Group Title
    children: [
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName",
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName",
      },
    ],
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, record) => (
      <>
        {record.tags.map((tag, i) => (
          <span className="bg-slate-300 mr-2" key={tag}>
            {tag}
          </span>
        ))}
      </>
    ),
    filters: [...new Set(data.flatMap((item) => item.tags))].map((tag) => ({
      text: tag,
      value: tag,
    })),
    onFilter: (value, record) => record.tags.includes(value),
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true); // Loading state to manage loading spinner

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Spin spinning={loading} tip="Loading..." size="large">
      <Table columns={column} dataSource={data} pagination={{ pageSize: 6 }} />
    </Spin>
  );
};

export default Home;
