import Home_Img_1 from "../../assets/img/Home-img-1.png";
import Service_1 from "../../assets/img/our_service_1.png";
import Service_2 from "../../assets/img/our_service_2.png";
import Service_3 from "../../assets/img/our_service_3.png";
import Service_4 from "../../assets/img/our_service_4.png";
import Logo from '../../repohub_logo.png';
import Img from '../../assets/img/img.png';
import {Link, NavLink} from "react-router-dom";
import {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import {Helmet} from "react-helmet";


const Home = (props) => {


    const Works = [
        {id: 1, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 2, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 3, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 4, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 5, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 6, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
    ]

    const Services = [
        {id: 1, src: Service_1, title: "Research Analysis",},
        {id: 2, src: Service_2, title: "Research Analysis",},
        {id: 3, src: Service_3, title: "Research Analysis",},
        {id: 4, src: Service_4, title: "Research Analysis",},
    ]

    useEffect(() => {
        ScrollReveal().reveal('.headline', {
            origin: 'bottom',
            distance: '40px',
            duration: 1200,
            // reset: true,
            interval: 200,
            scale: 0.9,
            viewFactor: 0.1,
        });
    }, [])

    return (
        <div>

            <Helmet>
                <title>RepoHub</title>
                <meta name="title" content="RepoHub" />
                <meta name="description" content="ကျောင်းသား/သူ များအတွက် Project" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="repohub.co" />
                <meta property="og:title" content="RepoHub" />
                <meta property="og:description" content="ကျောင်းသား/သူ များအတွက် Project" />
                <meta property="og:image" content={Img} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="repohub.co" />
                <meta property="twitter:title" content="RepoHub" />
                <meta property="twitter:description" content="ကျောင်းသား/သူ များအတွက် Project" />
                <meta property="twitter:image" content={Img} />
            </Helmet>

            {/*Home Section*/}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <section className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="my-5 py-5">
                                        <h3 className="fw-light headline">Digital Agency</h3>
                                        <h3 className="mb-5 Walone-Bold headline">
                                            We developer complex interface systems for Web, Mobile & Ar
                                        </h3>
                                        <img src={Home_Img_1} className="img-fluid headline pdf-rounded-xl"
                                             alt="Home img"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


            {/*Work Section*/}

            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="my-5 py-5">
                                            <h3 className="text-center mb-5 headline">Our Work Select Projects</h3>

                                            <div className="row row-cols-1 row-cols-md-2 g-5">
                                                {Works.map((work) => {
                                                    return (
                                                        <div key={work.id} className="col headline">
                                                            <div
                                                                className="card rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-blue-50">
                                                                <img src={work.src} className="img-fluid"
                                                                     alt="Home img"/>
                                                                <div className="card-body">
                                                                    <h5 className="card-title Walone-Bold">{work.subtitle}</h5>
                                                                    <p className="card-text text-secondary">{work.desc}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/*Service Section*/}

            <div className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className="Walone-Bold headline">Our Services</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="text-secondary headline">
                                            As a strategic partner, we create a working product with a thoughtful and
                                            large-scale architecture. We launch, support and development.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-4 g-4">
                                    {Services.map(service => {
                                        return (
                                            <div key={service.id} className="col headline">
                                                <div
                                                    className="card text-center py-3 py-lg-5 border-0 shadow-xl shadow-blue-50">
                                                    <div className="mb-1 mb-lg-3">
                                                        <img src={service.src} className="w-50" alt="Home img"/>
                                                    </div>
                                                    <div className="card-body">
                                                        <h6 className="card-title">{service.title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="col-12 headline">
                                        <div className="float-end my-5">
                                            <div className="d-flex justify-content-center align-content-center">
                                                <span className="me-3">Explore More</span>
                                                <div>
                                                    <i className="fa-solid fa-angle-right fa-1x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


            {/*Story*/}
            <div className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="my-lg-5 py-lg-5">
                                            <Link to="/story" className="text-decoration-none text-secondary">
                                                <div className="text-center py-5 my-5 headline">
                                                    <p className="text-uppercase">next</p>
                                                    <h4 className="text-black">Our Story</h4>
                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-top py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <section className="container">
                                <div className="row">
                                    <div className="col col-lg-auto col-md-10 headline">
                                        <div className="small mb-4 mb-lg-0">
                                            <NavLink to="/"
                                                     className="text-decoration-none text-secondary me-4">Home</NavLink>
                                            <NavLink to="/story"
                                                     className="text-decoration-none text-secondary me-4">Story</NavLink>
                                            <NavLink to="/services"
                                                     className="text-decoration-none text-secondary me-4">Works</NavLink>

                                            <NavLink to="/services"
                                                     className="text-decoration-none text-secondary d-lg-none">Careers</NavLink>
                                            <NavLink to="/contact"
                                                     className="text-decoration-none text-secondary d-lg-none ms-4">Contact
                                                Us</NavLink>
                                        </div>
                                    </div>
                                    <div className="col headline">
                                        <div className="text-center text-md-end">
                                            <h5 className="fw-bold">RrpoHub</h5>
                                        </div>
                                    </div>
                                    <div className="col d-none d-lg-block headline">
                                        <div className="text-end small">
                                            <NavLink to="/services"
                                                     className="text-decoration-none text-secondary">Careers</NavLink>
                                            <NavLink to="/contact" className="text-decoration-none text-secondary ms-4">Contact
                                                Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
)
}

export default Home;