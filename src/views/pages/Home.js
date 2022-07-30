import Home_Img_1 from "../../assets/img/Home-img-1.png";
import Service_1 from "../../assets/img/our_service_1.png";
import Service_2 from "../../assets/img/our_service_2.png";
import Service_3 from "../../assets/img/our_service_3.png";
import Service_4 from "../../assets/img/our_service_4.png";

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

    return (
        <div>

            {/*Home Section*/}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <section className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="my-5 py-5">
                                        <h3 className="fw-light">Digital Agency</h3>
                                        <h3 className="mb-5">
                                            We developer complex interface systems for Web, Mobile & Ar
                                        </h3>
                                        <img src={Home_Img_1} className="img-fluid" alt="Home img"/>
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
                                            <h3 className="text-center mb-5">Our Work Select Projects</h3>

                                            <div className="row row-cols-2 g-5">
                                                {Works.map( (work) => {
                                                    return (
                                                        <div key={work.id} className="col">
                                                            <div className="card">
                                                                <img src={work.src} className="img-fluid" alt="Home img"/>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{work.subtitle}</h5>
                                                                    <p className="card-text">{work.desc}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                } )}

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
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>
                                            As a strategic partner, we create a working product with a thoughtful and large-scale architecture. We launch, support and development.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {Services.map(service => {
                                        return (
                                            <div className="col">
                                                <div className="card text-center py-5">
                                                    <div className="mb-3">
                                                        <img src={service.src} className="w-50" alt="Home img"/>
                                                    </div>
                                                    <div className="card-body">
                                                        <h6 className="card-title">{service.title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="col-12">
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




        </div>
    )
}

export default Home;