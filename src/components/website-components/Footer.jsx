import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgStyle: { backgroundColor: "#f5f5f5" }
    };
  }

  render() {
    return (
      <footer
        style={this.state.bgStyle}
        className="mt-auto py-3 text-center mt-5"
      >
        {/* <strong> &copy; 2019 </strong>*/}
        <FontAwesomeIcon icon={faCode} /> with{" "}
        <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        and{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/khizarkhizar"
          aria-label="My GitHub"
        >
          Khizer Hayyat
        </a>{" "}
        using <FontAwesomeIcon icon={faReact} />
        <p>
          <small className="text-muted">
            {" "}
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </footer>
    );
  }
}

export default Footer;
