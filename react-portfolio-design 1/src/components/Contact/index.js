import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup, L } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const position = [-42.898313203433226, 147.3143257579791]

  const L = require('leaflet')
  const myIcon = L.icon({
    iconUrl: require('../../assets/images/marker-icon.png'),
    shadowUrl: null,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [1, -36],
    shadowSize: [42, 42],
    shadowAnchor: [16, -28],
  })

  // TODO: learn emailjs
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bzb8utv',
        'template_oydhrvq',
        refForm.current,
        'IDWuz5kZvdOBaWwMU'
      )
      .then(
        () => {
          alert('Message successfully send!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  })

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact Me'}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            praesentium quia suscipit, blanditiis pariatur illo voluptatibus!
            Enim labore, quas mollitia autem vitae quo. Iusto doloribus unde
            repudiandae incidunt maiores reiciendis!
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Slobodan Gajic,
          <br />
          Serbia,
          <br />
          Branka RadiCevica 19, 22000
          <br />
          <span>example@example.com.au</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={position} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
              <Popup>I lives here, come over for a cup of coffee.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
