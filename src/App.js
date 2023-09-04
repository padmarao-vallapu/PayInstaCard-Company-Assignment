import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-items-container">
          <p className="nav-item">Home</p>
          <p className="nav-item">About</p>
          <p className="nav-item">Schedules</p>
          <p className="nav-item">MemberShip</p>
          <p className="nav-item">Pricing</p>
        </div>
        <div className="btn-container">
          <p className="offer">Offers</p>
          <button className="course-btn" type="button">
            Courses
          </button>
        </div>
      </header>
      <div className="sign-up-container">
        <div className="description-container">
          <p className="nave-item1">Discover the beauty of tropics</p>
          <p className="main-heading">
            Tropical <br></br>Destinations<br></br>For Student
          </p>
          <p className="offer">
            Lorem ipsum dolor sit amet consectetur. <br />
            Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae
          </p>
          <button className="course-btn " type="button">
            Sign Up
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693745321/Group_171_urpgl4.png"
            alt="png"
            className="student-png"
          />
        </div>
      </div>
      <div className="second-page">
        <div className="adventure-container">
          <div className="students-container">
            <div className="student-card">
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693747437/avatar_fkirap.png"
                alt="png"
                className="student-logo"
              />
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
            <div className="student-card">
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693747437/avatar_fkirap.png"
                alt="png"
                className="student-logo"
              />
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
            <div className="student-card">
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693747437/avatar_fkirap.png"
                alt="png"
                className="student-logo"
              />
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
          <div className="content-container">
            <h1 className="heading">
              Tropical Adventure
              <br />
              for Students.
            </h1>
            <p className="heading">
              Student Tropical Vacation: Relax and Recharge
              <ul>
                <li className="offer">Lorem ipsum dolor sit amet </li>
                <li className="offer">Massa quis natoque sit quam Sed </li>
                <li className="offer">Eros nonpellentesque elit</li>
                <li className="offer"> tortor id euismod habitant</li>
                <li className="offer">suspendisse id in ultrices</li>
              </ul>
              <button className="course-btn" type="button">
                Explore More
              </button>
            </p>
          </div>
        </div>
        <h1 className="heading2">Our Destinations</h1>
        <div className="colleges-container">
          <div className="college-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693749672/card-image_qkynvs.png"
              alt="png"
              className=" college-png"
            />
            <div className="card-body">
              <h1 className>Harvard University</h1>
            </div>
            <div className="card-footer">
              <p className="offer">Cambridge, Massachusetts, UK</p>
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693751530/Icons_ps4gqx.png"
                alt="png"
                className="icon"
              />
            </div>
          </div>
          <div className="college-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693749693/card-image-1_fqmayh.png"
              alt="png"
              className=" college-png"
            />
            <div className="card-body">
              <h1 className>Oxford University</h1>
            </div>
            <div className="card-footer">
              <p className="offer">Oxfordd,England</p>
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693751530/Icons_ps4gqx.png"
                alt="png"
                className="icon"
              />
            </div>
          </div>
          <div className="college-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693749675/card-image-2_qi4eev.png"
              alt="png"
              className=" college-png"
            />
            <div className="card-body">
              <h1 className>Standford University</h1>
            </div>
            <div className="card-footer">
              <p className="offer">Standford,California</p>
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693751530/Icons_ps4gqx.png"
                alt="png"
                className="icon"
              />
            </div>
          </div>
          <div className="college-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693749676/card-image-3_zp89qn.png"
              alt="png"
              className=" college-png"
            />
            <div className="card-body">
              <h1 className>Nayang Technologies</h1>
            </div>
            <div className="card-footer">
              <p className="offer">Nanyang Ave, Singapura</p>
              <img
                src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693751530/Icons_ps4gqx.png"
                alt="png"
                className="icon"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693756874/Frame_28_yoq39h.png"
            alt="png"
            className="arrow-icon"
          />
        </div>
        <div className="discount-container">
          <div className="discount-content-container">
            <p className="offer">Get 20% off for students</p>
            <h1 className="heading">
              Student discounts available.
              <br /> Get ready for some fun in the sun!
            </h1>
            <p className="heading">
              <ul>
                <li className="offer">Lorem ipsum dolor sit amet </li>
                <li className="offer">Massa quis natoque sit quam Sed </li>
                <li className="offer">Eros nonpellentesque elit</li>
                <li className="offer"> tortor id euismod habitant</li>
                <li className="offer">suspendisse id in ultrices</li>
              </ul>
              <button className="course-btn" type="button">
                Explore More
              </button>
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693758014/Mask_group_xznpmg.png"
            alt="png"
            className="girl-png"
          />
        </div>
        <div className="booking-container">
          <img
            src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693758865/Group_167_ugeeyj.png"
            alt="png"
            className="girl-png"
          />
          <div className="book-now-card">
            <div className="book-head">
              <h1 className="heading">Book Now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="book-body">
              <div>
                <h3>City</h3>
                <input type="text" placeholder="Placeholder" />
                <img
                  src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693760216/row_lxal8i.png"
                  alt="png"
                  className="inp"
                />
                <img
                  src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693760214/row_1_boynso.png"
                  alt="png"
                  className="inp"
                />
                <button className="book-btn" type="button">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <h1 className="heading">Testimonials</h1>
        <div className="testimonials">
          <div className="testimonial-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693761248/Avatar_1_mj9lco.png"
              alt="avatar"
              className="avathar"
            />
            <p className="offer">Corey Korsgaard</p>
            <hr className="" vector />
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693761861/Avatar_2_ug3uh3.png"
              alt="avatar"
              className="avathar"
            />
            <p className="offer">Jokab Aminov</p>
            <hr className="" vector />
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="testimonial-card">
            <img
              src="https://res.cloudinary.com/dfzmswuic/image/upload/v1693761863/Avatar_3_ynl2lj.png"
              alt="avatar"
              className="avathar"
            />
            <p className="offer">Carle Press</p>
            <hr className="" vector />
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gateway-container">
        <h1 className="heading">
          Student Special: Discounted rates on tropical getaways!
        </h1>
        <p>
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
        <div className="ftr">
          <div className="footer">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Sales and Refunds</p>
            <p>Legal</p>
          </div>
          <div className="footer">
            <p className="headig">About</p>
            <p className="headig">Pricing</p>
            <p className="headig">Scheduls</p>
            <p className="headig">MemberShip</p>
            <p className="headig">Joins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
