import React from "react";
import { Col, Divider, Row, Button } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";

import ReactImg from "src/assets/images/react.jpg";
const jobs = () => {
  const jobsdetails = [
    {
      jobTitle: "Software Development Intern",
      location: "Mumbai, Maharashtra",
      postedOn: "19-5-2023 08:10",
      deadline: "21-5-2023 11:00",
      qualifications: "Btech: 0, Mtech: 0, MBA: 0, MSc: 0",
      stipend: 15000,
    },
    {
      jobTitle: "Data Science Intern",
      location: "Bangalore, Karnataka",
      postedOn: "19-5-2023 08:10",
      deadline: "21-5-2023 11:00",
      qualifications: "Btech: 0, Mtech: 0, MBA: 0, MSc: 0",
      stipend: 15000,
    },
    {
      jobTitle: "Marketing Intern",
      location: "New Delhi, Delhi",
      postedOn: "19-5-2023 08:10",
      deadline: "21-5-2023 11:00",
      qualifications: "Btech: 0, Mtech: 0, MBA: 0, MSc: 0",
      stipend: 15000,
    },
  ];

  return (
    <div>
      <Row gutter={16}>
        {jobsdetails.map((item, index) => (
          <Col className="gutter-row" span={12}>
            <CCard className="mb-4">
              <CCardHeader>{item.jobTitle}</CCardHeader>
              <CCardBody>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Posted On:</strong> {item.postedOn}</p>
                <p><strong>Deadline:</strong> {item.deadline}</p>
                <p><strong>Qualifications:</strong> {item.qualifications}</p>
                <Button>Know More</Button>

              </CCardBody>
            </CCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default jobs;
