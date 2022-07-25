import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray="About me"
            idx={15}
          />
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laudantium ab ea delectus aliquam quae voluptates animi maxime
          exercitationem repellendus?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea corrupti
          quod et neque impedit hic repudiandae quibusdam, id quidem aut
          expedita voluptate ex quia maxime iste quas nobis placeat amet?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde saepe
          doloribus totam cumque repellendus excepturi!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D2A" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
