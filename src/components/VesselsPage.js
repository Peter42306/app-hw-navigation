import { Card } from "react-bootstrap";

const VesselsPage = ({ vessel }) => (
    <Card style={{ width: '22rem', padding: '5px' }}>
        <Card.Img variant="top" src={vessel.image} alt="image" className="img-fluid card-img-custom"/>
        <Card.Body className="card-body-custom">
            <Card.Title>{vessel.name}</Card.Title>
            <Card.Text>IMO No.: {vessel.imo}</Card.Text>
            <Card.Text>GRT: {vessel.grt}</Card.Text>
            <Card.Text> SDWT: {vessel.sdwt} mt</Card.Text>
            <Card.Text>LOA: {vessel.loa} m</Card.Text>
            <Card.Text>BM: {vessel.bm} m</Card.Text>
            <Card.Text>Year of Built: {vessel.built}</Card.Text>
        </Card.Body>
    </Card>
);

export default VesselsPage;