
const Hero = () => {
    return (
        <header className="d-flex" style={{minHeight:"90vh"}} id="home">
            <div class="container my-auto">
                <div className="row">
                    <div className="col-lg-6">
                        <p>DISCOVER INVOZA TODAY</p>
                        <h1 className="my-4">Make your Site Amazing & Unique with Invoza</h1>
                        <p className="mb-4">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-warning mx-3">Learn More</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src="http://invoza.react.themesdesign.in/static/media/img-1.f887077e.png" alt="" />
                    </div>
                </div>
            </div>
        </header>


    )
};

export default Hero;
