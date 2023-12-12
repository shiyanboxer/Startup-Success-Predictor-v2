import React, { Component } from "react";
import './App.css';

class Footer extends Component {

    render() {
        return (
            <h4 className="footer">
                <a
                    className="highlight"
                    href="http://shiyanboxer.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    By: Shiyan Boxer
                </a>
            </h4>
        );
    }
}

export default Footer;