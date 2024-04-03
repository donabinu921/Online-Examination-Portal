import { Card, Col, Row } from 'antd';

const Cards = ({ card1Title, card1Content, card2Title, card2Content }) => (
  <Row gutter={50}>
    <Col span={12}>
      <Card title={card1Title} bordered={false}>
        {card1Content}
      </Card>
    </Col>
    {card2Title && card2Content && (
      <Col span={12}>
        <Card title={card2Title} bordered={false}>
          {card2Content}
        </Card>
      </Col>
    )}
  </Row>
);

export default Cards;