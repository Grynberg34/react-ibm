import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.scss";

export default function Home() {

  return (
    <div className='home'>

        <Container>
            <Row>
                <Col md={4}>                
                    <div className='home__left'>
                        <h1 className='home__left__heading'>Welcome to Paradise Nursery!</h1>
                        <h2 className='home__left__subtitle'>Plants from the Garden of Eden</h2>

                        <Link className='home__left__link' to="landing">Get started</Link>

                    </div>
                </Col>

                <Col md={2}></Col>

                <Col md={6}>
                    <div className='home__right'>
                        <p className='home__right__text'>Welcome to Paradise Nursery, where nature thrives and greenery flourishes. We offer a diverse selection of vibrant, handpicked plants to bring life to any space—whether indoors or outdoors. From aromatic herbs and medicinal wonders to elegant ornamental plants, our collection is curated with care to suit every need. Let us help you cultivate beauty, serenity, and a touch of nature in your home or garden. Visit us in-store or shop online for fresh, healthy plants delivered to your door. Paradise Nursery—where every plant finds its perfect place.</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
  );
}
