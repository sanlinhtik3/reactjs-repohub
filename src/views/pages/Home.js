import Home_Img_1 from "../../assets/img/Home-img-1.png"

const Home = (props) => {

    const Works = [
        {id: 1, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 2, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 3, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 4, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 5, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
        {id: 6, src: Home_Img_1, subtitle: "Sportbooks", desc: "Rewind"},
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




        </div>
    )
}

export default Home;