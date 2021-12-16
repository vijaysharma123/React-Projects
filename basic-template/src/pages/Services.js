import React from 'react'

const Services = () => {
    return (
        <>
            <div class="container my-5 mt-5">
                <h1 className="text-primary fs-3 mb-4 pt-3 text-uppercase text-center">Services</h1>

                {/* <!-- grid layout courses container --> */}
                <div class="row gx-4 gy-5">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((el) => (
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <img src="https://www.esearchlogix.com/images/web-dev/web-left-banner.jpg" alt="" class="img-fluid rounded-top" />
                                    <div class="card-body">

                                        {/* <!-- course title --> */}
                                        <h6 class="fs-5">Web Development</h6>

                                        <button type="submit" class="btn btn-warning shadow-sm w-100 mt-2">Get Qoute</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Services
