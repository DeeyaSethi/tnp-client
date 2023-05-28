import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Job Post",
    dataIndex: "jobPost",
    width: "30%",
  },
  {
    title: "Company",
    dataIndex: "company",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Applied",
        value: "Applied",
      },
      {
        text: "Rejected",
        value: "Rejected",
      },
      {
        text: "Selected",
        value: "Selected",
      },
    ],
    onFilter: (value, record) => record.status.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];

const data = [
  {
    jobPost: "Publicis Sapient Intern 2024",
    company: "Publicis Sapient",
    status: "Applied",
  },
  {
    jobPost: "Google Software Engineering Intern",
    company: "Google",
    status: "Pending",
  },
  {
    jobPost: "Microsoft Data Science Intern",
    company: "Microsoft",
    status: "Rejected",
  },
  {
    jobPost: "Amazon Product Management Intern",
    company: "Amazon",
    status: "Offered",
  },
];

const Applications = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Applications;
