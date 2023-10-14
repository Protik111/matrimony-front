import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer_container py-30">
            <div className="footer container">
                <div className="footer__addr">
                    <img src="biye-korun-logo-with-tagline.png" alt="logo" />
                    <p className="mt-10">Bridging Hearts with Trust. Discover your perfect life partner through our secure and intuitive platform. Celebrate love, commitment, and new beginnings with us.</p>

                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Helpful Links</h2>

                        <ul className="nav__ul">
                            <li>
                                <Link href="/login">Registration</Link>
                            </li>

                            <li>
                                <a href="#">Partner Search</a>
                            </li>

                            <li>
                                <a href="/plans">Premium Membership</a>
                            </li>

                            {/* <li>
                                <a href="#faqs">FAQs</a>
                            </li> */}
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Corporate</h2>

                        <ul className="nav__ul">
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>

                            <li>
                                <Link href="/terms-&-conditions">Terms & Conditions</Link>
                            </li>

                            <li>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </li>

                    <p className="nav__item">
                        <h2 className="nav__title">Contact</h2>

                        {/* <ul className="nav__ul">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Use</a>
                            </li>

                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                        </ul> */}
                        <p className="">USA Office</p>
                        <p>30500 Van Dyke, Ste - 201 <br />
                            Warren, MI 48093 <br />
                            <p>+1 (586) 276-7347</p>
                        </p>
                        <br />
                        <p className="">Bangladesh Office</p>
                        <p>9143, Plot 2, Baunia Bazar <br />
                            Uttara, Dhaka-1230 <br />
                            <p>+880 16-11171308</p>
                        </p>
                    </p>
                </ul>

                <div className="legal">
                    <p className="mt-15">&copy; TS4U Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer