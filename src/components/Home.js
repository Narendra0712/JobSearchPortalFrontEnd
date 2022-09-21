import React from 'react'

const Home = () => {
  return (
    <>
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-dark">Welcome to Jobs Adda</h1>
            <p className="text-dark">Let's Work Together</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-dark">Your Dream Job is Waiting Here</h2>
            <p>Trending Jobs and Daily Update on Vacancies</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-warning">Secure Your Future With Us</h2>
            <p>All Types of Jobs</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>

    <div className="container my-4">
      <div className="row mb-2">
      </div>
      <div className="card w-80s">
        <div className="card-body">
          <h3 className="card-title">Full Stack Developer</h3>
          <h4>Swarajya IT Solutions, Pune </h4>
          <h5>Required Skills :</h5>
          <p className="card-text">
            Strong organizational and project management skills. Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript. Familiarity with JavaScript frameworks such as Angular JS, React, and Amber.</p>
          <a href="Login" className="btn btn-primary">Apply Now</a>
        </div>
      </div>
    </div>

    <div className="container my-4">
      <div className="row mb-2">
      </div>
      <div className="card w-80s">
        <div className="card-body">
          <h3 className="card-title">Java Developer</h3>
          <h4>Vector IT Solutions, Mumbai </h4>
          <h5>Required Skills :</h5>
          <p className="card-text">
            Excellent problem solving, analytical skills and technical troubleshooting skills
            Ability to learn new skills quickly as needed
            Ability to work with no/minimal supervision.
            Understanding of software quality assurance principles
            communication and presentation abilities</p>
          <a href="Login" className="btn btn-info">Apply Now</a>
        </div>
      </div>
    </div>

    <div className="container my-4">
      <div className="row mb-2">
      </div>
      <div className="card w-80s">
        <div className="card-body">
          <h3 className="card-title">Data Scientist</h3>
          <h4>Vijya Multi Solutions, Delhi NCR </h4>
          <h5>Required Skills :</h5>
          <p className="card-text">
            Skills-Statistics, ML, AI, Deep Learning, Advanced Python/R Programming</p>
          <a href="Login" className="btn btn-success">Apply Now</a>
        </div>
      </div>
    </div>
    <footer className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>
              © 2022 Jobs Adda, Inc. · <a href="#">Privacy</a> ·
              <a href="#">Terms</a>
            </p>
          </footer>
    </>
  )
}

export default Home
