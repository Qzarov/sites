import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap'

import faculty from '../Assets/About/faculty.png'
import gamesHack from '../Assets/About/games_hack.png'
import itConf from '../Assets/About/it_conf.png'
import lectures from '../Assets/About/lectures.png'
import web3conf from '../Assets/About/web3conf.png'


export default class About extends Component {
    render() {
        return (
            <Container>
                <div>
                    Page 'bout ur destiny 😈
                </div>
                <Tab.Container id="left-tabs-example" defaltActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" > Лекции </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" > Web3 Conf </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Факультатив </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" > Web3 Games Hack </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" > IT Conf 2.0 </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img
                                        className="d-block w-100"
                                        src={lectures} 
                                        alt="lectures"
                                    />
                                    <p>
                                    Важное направление нашей деятельности - приближение mass adoption. 
                                    И начали мы с 4-х открытых лекций, посвященным основам блокчейна.
                                    Три из них провели наши ребята, последнюю - приглашенный спикер Артем Марков 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        className="d-block w-100"
                                        src={web3conf} 
                                        alt="web3conf"
                                    />
                                    <p>
                                    Декабрьская конференция стала для нас настоящим испытанием, однако принесла нашей команды 
                                    новых участников, важные контакты, зоны роста и, конечно же, коллосальный  опыт.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        className="d-block w-100"
                                        src={faculty} 
                                        alt="faculty"
                                    />
                                    <p>
                                    А еще мы успели провести  факультатив, где рассказали ребятам об удивительном мире WEB3.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        className="d-block w-100"
                                        src={gamesHack} 
                                        alt="gamesHack"
                                    />
                                    <p>
                                    Весной в рамках конференции IT Conf мы провели хакатон совместно с компанией TON PLAY. 
                                    Участники разработали классные демо игр, которые продемонстрировали жюри из TON PLAY на питч-сессии.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img
                                        className="d-block w-100"
                                        src={itConf}
                                        alt="itConf" 
                                    />
                                    <p>
                                     А вот и сам IT CONF 2.0. На нем мы отвечали за трек GameFi, а также представили 4 интерактивных WEB3-зоны/
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            
        )
    }
}