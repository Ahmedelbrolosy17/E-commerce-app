import ".././styles/landing.css"


export default function Landing(){
    return(
        <>
        <div className="containerL d-flex align-items-center">
            <h1 className="intro">here you will find what makes you happy</h1>
        </div>
            <div id="carouselExampleIndicators" className="carousel slide w-50 mx-auto my-5">
                <div className="carousel-indicators " >
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg" className="d-block w-100 " style={{height:"400px"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.thenews.com.pk/assets/uploads/akhbar/2023-10-27/1123100_2862463_ecommerce_akhbar.jpg" className="d-block w-100" style={{height:"400px"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://media.licdn.com/dms/image/D4D12AQG_ouCNoeut8Q/article-cover_image-shrink_720_1280/0/1679638788377?e=2147483647&v=beta&t=FmOcgD4kkGcHtM5xdEiGlgWyobjF4IWtUONNK3qRfxw" className="d-block w-100" style={{height:"400px"}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}