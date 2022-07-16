import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
        </h1>
        <img src={LogoTitle} alt="developer" />
        lobodan
        <br />
        web developer
        <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
