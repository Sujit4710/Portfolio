import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./card";
import projImg1 from "../assets/img/P1.png";
import projImg2 from "../assets/img/P2.jpg";
import projImg3 from "../assets/img/P3.webp";
import projImg4 from "../assets/img/P4.jpg";
import projImg5 from "../assets/img/P5.jpg";
import projImg6 from "../assets/img/P6.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Project = () => {
    const projects1 = [
        {
            title: "BlogSphere",
            description: `It is a Blog website developed using MERN
            Stack, which allows user to read, create, edit
            and delete their blogs`,
            imgUrl: projImg1,
        },
        {
            title: "Employee Payroll Management System",
            description: `It is Flask(web Framework) based Application,
            which is used to manage the profile of
            employees`,
            imgUrl: projImg2,
        },
        {
            title: "Flutter Weather Application",
            description: `It is Flutter application for weather Info, used API to fetch Data`,
            imgUrl: projImg3,
        }
    ];

    const projects2 = [
        {
            title: "Movie Recommendation Model",
            description: `It is a ML Model used to suggest similar kind of movies based on user input`,
            imgUrl: projImg4,
        },
        {
            title: "NewsNation",
            description: `It is a news application application created using react,
            used news api to fetch news`,
            imgUrl: projImg5,
        },
        {
            title: "Sports Ecommerce Site",
            description: `It is basic HTML, CSS project to represent a Ecommerce site dedicated for
            sports, heavily focused on animation`,
            imgUrl: projImg6,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}