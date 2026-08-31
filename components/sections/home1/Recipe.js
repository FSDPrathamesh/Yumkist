'use client'
import Link from "next/link"
export default function Recipe() {
    return (
        <>

        {/* Recipe Section */}
        <section className="recipe-section">
            <div className="section-text">yummy</div>
            {/* <div className="icon-layer-one" style={{ backgroundImage:'url(assets/images/icons/icon-1.png)'}} ></div>
            <div className="icon-layer-two" style={{ backgroundImage:'url(assets/images/icons/icon-2.png)'}} ></div>
            <div className="icon-layer-three" style={{ backgroundImage:'url(assets/images/icons/icon-3.png)'}} ></div> */}
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Best for You</div>
                    <h2>Achari Chatka Makhana</h2>
                    <div className="separate"></div>
                </div>
                <div className="inner-container">
                    <div className="circle-layer" style={{ backgroundImage:'url(assets/images/icons/circles.png)'}} ></div>
                    <div className="row clearfix">
                    
                        {/* Left Column */}
                        <div className="left-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/Foxnut.png" alt=""/></div>
                                        <h6><Link href="menu">Foxnut</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/Mango-powder.png" alt=""/></div>
                                        <h6><Link href="menu">Mango Powder</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-2 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/main-product.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="right-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/Olive-Oil.png" alt=""/></div>
                                        <h6><Link href="menu">Olive Oil</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/Spices.png" alt=""/></div>
                                        <h6><Link href="menu">Spices</Link></h6>
                                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* End Recipe Section */}
            

        </>
    )
}
