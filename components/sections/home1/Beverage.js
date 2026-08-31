'use client'
import Link from "next/link"
export default function Beverage() {
    return (
        <>

            {/* Beverage Section */}
            <section className="beverage-section">
                {/* <div className="icon-layer" style={{ backgroundImage: 'url(assets/images/resource/beverage.png)' }} ></div> */}
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Best for You</div>
                        <h2>Our Products</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/1.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Aloo Bhujia</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/2.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Crunchy Party Mix</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/3.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Garlic Bhujia</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/4.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Khatta Meetha Mixture</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/5.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Moong Dal</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/6.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Onion Bhujia</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/7.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Navrathan Tadka Mix</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/8.png" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Peanuts Party Mix</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* Button Box */}
                    {/* <div className="button-box text-center">
                        <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>View All Products</Link>
                    </div> */}
                    
                </div>
            </section>
            {/* End Beverage Section */}

        </>
    )
}
