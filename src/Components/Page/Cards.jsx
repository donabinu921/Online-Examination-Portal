import React from 'react';
import { Card, Col, Row } from 'antd';
const Cards = () => (
  <Row gutter={50}>
    <Col span={12}>
      <Card title="Upcoming Tests" bordered={false} >
        2
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Requests Pending" bordered={false}>
        1
      </Card>
    </Col>
  </Row>
);
export default Cards;