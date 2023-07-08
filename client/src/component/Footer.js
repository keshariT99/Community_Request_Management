
import React from 'react'
import '../CSS/App.css'

const Footer = () => {

    return(
       
        <footer className="footer">
            <div className="containeR">
                <br/>
            <div className='ROW'>
            <div className="row">
                <div className="footer-col">
                    <h4>INFO</h4>
                    <ul>
                        <li><a href="#">About Cake Fantasy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Return/Exchange Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payement Option</a></li>
                    </ul>
                </div>
            
                <div className="footer-col">
                    <h4>HEAD OFFICE</h4>
                    <ul>
                        <li><a href="#">Cake Fantasy (Pvt) Ltd</a></li>
                        <li><a href="#">No 374, Highlevel Road,Gangodawila,Nugegoda.</a></li>
                        <li><a href="#">Email: <u>info@fantacy.com</u></a></li>
                        <li><a href="#">Hotline: +94 71 212 8888</a></li>
                        <li><a href="#">Landlineline: +94 71 212 8888</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>CONTACT US</h4>
                    <div className="social-links">
                    <ul>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </ul>
                    </div>
                </div>
            </div></div></div>
        </footer>

    )
}



export default Footer;