import { Card, Col, Row } from 'antd';

const Cards = ({ cardTitle, cardContent }) => (
  <Row gutter={50}>
    <Col span={12}>
      <Card title={cardTitle} bordered={false}>
        {cardContent}
      </Card>
    </Col>
 
  </Row>
);

export default Cards;