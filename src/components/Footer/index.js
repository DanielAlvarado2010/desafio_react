import "./Footer.css";

import React from "react";

function Footer() {
    return (
    <footer className="container-footer">
        <div className="container-fluid c-footer">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <p className="footer-description">
                        <a href="#" className="link-footer">
                            DEV Community{" "}
                        </a>
                        – A constructive and inclusive social network for
                        software developers. With you every step of your
                        journey.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 col-sm-11">
                        <p id="p_footer">
                            Built on{" "}
                            <a href="#" className="link-footer">Forem</a>
                            {" "}— the{" "}
                            <a href="#" className="link-footer">open source</a>
                            {" "}software that powers{" "}
                            <a href="#" className="link-footer">DEV</a>
                            {" "}and other inclusive communities.
                        </p>
                        <p>Made with love and{" "}
                            <a href="#" className="link-footer">Ruby on Rails</a>
                            . DEV Community
                            <span title="copyright">{" "}©{" "}</span>
                            2016 - 2021
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 col-sm-11">
                        <a href="https://www.forem.com" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" role="img" aria-labelledby="a90ameo99abv4mvu74q8kbippd0v8ehc"
                                className="crayons-icon crayons-icon--default">
                                <title id="a90ameo99abv4mvu74q8kbippd0v8ehc">Forem logo</title>
                                <g clip-path="url(#clip0)" fill="#1AB3A6">
                                    <path
                                        d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z">
                                    </path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;