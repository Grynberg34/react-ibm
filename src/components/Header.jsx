import { Container, Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/header.scss";


export default function Header() {

  const cart = useSelector((state) => state.cart);

  return (
    <div className='header'>
        
        <Container>
            <Row>
                <Col md={4}>
                    <Link className="header__link" to="/">
                        <h1 className="header__link__title">Paradise Nursery</h1>
                        <h2 className="header__link__subtitle">Plants from the Garden of Eden</h2>
                    </Link>
                </Col>

                <Col md={6}>
                    <h1 className="header__page">Plants</h1>
                </Col>

                <Col md={2}>
                    <Link className="header__cart" to="/cart">
                        <img className="header__cart__img" src="/cart.png" alt="" />
                        <span className="header__cart__number">{cart.length}</span>
                    </Link>
                </Col>
            </Row>

        </Container>


    </div>
  );
}
