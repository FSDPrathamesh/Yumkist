"use client";
import Link from "next/link";
export default function Juice() {
  return (
    <>
      {/* Juice Section */}
      <section className="juice-section">
        {/* <div className="section-text">yummy</div> */}
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/background/1.png)" }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(assets/images/resource/right-bg.png)",
          }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="assets/images/resource/ingrediants.png" alt="" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="content-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Small Bite, Big Flavour</div>
                  <h2>
                    Delicious Snacks, Made to <span className="theme_color">Love</span>
                  </h2>
                  <div className="separate"></div>
                  <div className="text">
                    From crunchy classics to irresistible flavours, Yumkiist brings you snacks made for every craving. Carefully crafted with quality ingredients and packed with deliciousness, every bite is made to add a little joy to your day.
                  </div>
                </div>
                {/* <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Buy Now</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Juice Section */}
    </>
  );
}
