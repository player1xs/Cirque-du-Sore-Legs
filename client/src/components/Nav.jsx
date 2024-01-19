import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setToken, getToken, removeToken } from '../utils/helpers/common'
import { registerUser, loginUser } from '../utils/actions/auth'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaRebel } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Nav() {
  
  const toggleModal = () => {
    setModalShow((prevShow) => !prevShow)
  }

  // const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registerData, setRegisterData] = useState(
    {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  )
  const [loginData, setLoginData] = useState(
    {
      username: '',
      password: ''
    }
  )

  function handleChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  async function submitRegistration(e) {
    e.preventDefault()
    const res = await registerUser(registerData)
    console.log(res)
    if (res.status === 201) {
      console.log('reg successful')
      setModalShow(false)
      setLoginModalShow(true)
    }
  }

  async function submitLogin(e) {
    e.preventDefault()
    const res = await loginUser(loginData)
    console.log(res)
    if (res.status === 200) {
      console.log('login successful')
      setLoginModalShow(false)
      setToken(res.data.access)
    }
  }

  const navigate = useNavigate()
  function handleClick() {
    removeToken()
    navigate('/')
  }



  return (
    <>
      <header>
        <div className="top">
          <h1>Cirque du Sore-Legs</h1>
          <div className="navigation">
            {!getToken() && <Button className="navitem" onClick={toggleModal}>Login/Register</Button>}
            {getToken() && <Button className="navitem" onClick={handleClick}>Logout</Button>}
            <Link to={'/'}className="navitem">Home</Link>
            <Link to={'/eventIndex'}className="navitem">Event List</Link>
            <Link to={'/profile'}className="navitem">Profile</Link>
            <Link to={'/blog'}className="navitem">Blog</Link>
          </div>
        </div>
        <div className="footer">
          <div className="social">
              <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaRebel /></a>
              <a href="https://twitter.com" className="social-icon"><FaXTwitter /></a>
          </div>
          
          <a href="https://github.com/player1xs" className="gitgud"><FaGithub />Chimera Studios</a>
          <Link to={'/cookies'} className="gitgud">cookies</Link>
        </div>
      </header>

      <Modal show={modalShow} fullscreen={true} onHide={() => setModalShow(false)} className='centered-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form className="create-account">
            <h2 className="text-center">Sign Up</h2>
            <input type="text" name="username" placeholder="Username..." onChange={handleChange} />
            <input type="email" name="email" placeholder="Email..." onChange={handleChange} />
            <input type="password" name="password" placeholder="Password..." onChange={handleChange} />
            <input type="password" name="password_confirmation" placeholder="Password Confirmation" onChange={handleChange} />
            <Button className="regBtn" type="submit" onClick={submitRegistration}>Register</Button>
            <div className="sign-in">
              Returning Runner...? &nbsp;
              <Button className="changeBtn" type="button" onClick={() => {
                setModalShow(false)
                setLoginModalShow(true)
              }}>Login</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={loginModalShow} fullscreen={true} onHide={() => setLoginModalShow(false)} className="centered-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form className="login-form">
            <h2 className="text-center">Login</h2>
            <input type="text" name="username" placeholder="Username..." onChange={handleLoginChange} />
            <input type="password" name="password" placeholder="Password..." onChange={handleLoginChange} />
            <Button type="submit" className="loginBtn" onClick={submitLogin}>Login</Button>
            <Button className="changeBtn" onClick={() => {
              setModalShow(true)
              setLoginModalShow(false)
            }}>Register</Button>
          </form>
        </Modal.Body>
      </Modal>

    </>
  )
}