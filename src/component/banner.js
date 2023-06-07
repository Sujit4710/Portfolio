import { Row, Col, Container } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'
import { useState, useEffect } from "react"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopnum, setLoopnum] = useState(0);
    const [isdeleting, setIsdeleting] = useState(false);
    const toRotate = ['Coder', 'Developer', 'Engineer'];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return ()=>{
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isdeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
        setText(updatedText);
        if (isdeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isdeleting && updatedText === fullText) {
            setIsdeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isdeleting && updatedText === '') {
            setIsdeleting(false);
            setLoopnum(loopnum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hii, I'm Sujit `}<br/>
                        <span className="wrap"><img src=""/>{text}</span></h1>
                        <p>As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.</p>
                        <button onClick={()=>console.log("connect")}>Let’s Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Header image"></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}