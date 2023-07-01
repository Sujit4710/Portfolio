import './skill.css'
import cpp from '../assets/img/c-logo-vector.svg'
import html from '../assets/img/html5-logo-vector.svg'
import css from '../assets/img/css3-logo-vector.svg'
import javascript from '../assets/img/javascript-logo-vector.svg'
import bts from '../assets/img/bootstrap-logo-vector.svg'
import rjs from '../assets/img/react-logo-vector.svg'
import aws from '../assets/img/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png'
import docker from '../assets/img/docker-logo-vector.svg'
import kb from '../assets/img/kubernetes.png'
import sql from '../assets/img/mysql-logo-vector-1.svg'
import mgdb from '../assets/img/mongodb-logo-vector.svg'
import git from '../assets/img/git-logo-vector.svg'
import ghub from '../assets/img/github-octocat-logo-vector.svg'
import java from '../assets/img/java-logo-vector-1.svg'
import python from '../assets/img/python-logo-vector.svg'



export const Skill = () => {
    return(
        <div className='logos'>
            <span className="tagline1">Skills</span>
            <div className='slider'>
                <img src={cpp}/>
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <img src={rjs}/>
                <img src={bts}/>
                <img src={aws}/>
                <img src={docker}/>
                <img src={kb}/>
                <img src={sql}/>
                <img src={mgdb}/>
                <img src={git}/>
                <img src={ghub}/>
                <img src={java}/>
                <img src={python}/>
            </div>
        </div>
    )
}