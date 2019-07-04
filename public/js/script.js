ext = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


particlesJS('particles', ext, function() {
  console.log('callback - particles.js config loaded');
});



function navbar_font() {
  if (!$('#navbarTogglerDemo02').is(":hidden")) {
    $('.nav-link').removeClass('nav-link-mobile')
    $('.navbar-brand').removeClass('navbar-brand-mobile')
  } else {
    $('.nav-link').addClass('nav-link-mobile')
    $('.navbar-brand').addClass('navbar-brand-mobile')
  }
}



function aboutme() {
  $('#name-row').removeClass('name-row-scroll');
  // $('#name-row').css('top', '50%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'>    <p>        <h2 id='about-title-h2'>Hi, I'm Netra. </h2>I am a second year BSc Mathematics and Statistics student     at Fergusson College, Pune. I'm interested in mathematical research and data science, and I'm currently     working towards achieving both my career goals. In regocnition of my high academic achievements, I was awarded     the Inspire Scholarship, to pursue a career in reasarch In addition to this, I'm also a professional     Kathak dancer, with over 10+ years of experience and have performed at numerous cultural events.  </p></div><div class='col'></div>"
  // $('#navbarTogglerDemo02').toggle();
}

function mihir() {
  $('#name-row').removeClass('name-row-scroll');
  // $('#name-row').css('top', '50%');

  document.getElementById('name-row').innerHTML = "<div class='col'></div>   <div class='col-10 col-sm-10 col-md-8 col-lg-3'>    <div class='container' id='name-box'>      <img src='public/img/Avatar.png' id='avatar' class='mx-auto d-block'>      <h2 id='name'>Netra Joshi</h2>      <h6 id='name-des'>BSc Mathematics and Statistics @ Fegusson College, Pune, Professional Kathak Dancer and Aspiring Data Scientist and Researcher</h6>            <h2 class='row' id='icon-row'>        <div class='col'></div>        <div class='col-3'>          <a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/netra-joshi-93282718a/'></a>         </div>                      <div class='col-3'>                          <a class='fa fa-github' aria-hidden='true' href='https://github.com/netra2204'></a>                      </div>                                    <div class='col'></div>                  </h2>        </div>            </div>   <div class='col'></div>          </div>"
  // $('#navbarTogglerDemo02').toggle();
}

function cv() { 
  // $('#name-row').css('top', '40%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'>    <h2 id='cv-title'><b> Netra Joshi </b></h2>    <h6 id='cv-email'> <i> netrajoshi22apr [at] gmail [dot] com </i></h6>    <hr>  <div class='row' style='text-align:left'>        <div class='col-12 col-md-12 col-sm-12 col-lg-6'>               <h4 id='cv-subtitle'><b>Research Experience</b></h4>            <ul>                <li>                    <h5 id='cv-h5'><b>Inspire Research</b></h5>                    <p id='cv-p'>Researching in Mathematics under Fergusson College through the Inspire Scholarship which aims to help high acaademic achieving students to get real world research experience </p>                </li>            </ul>            <hr>            <h4 id='cv-subtitle'><b>Project Experience</b></h4>            <ul>                <li>                    <h5 id='cv-h5'><b>Sample Project (2019 - present)</b></h5>                    <p id='cv-p'>Sample Description</p>                </li>               </ul>            <hr>      <h4 id='cv-subtitle'><b>Education</b></h4>            <ul>                <li>                    <h5 id='cv-h5'><b>PES Modern High School,Pune (2004 - 2016)</b></h5>                    <p id='cv-p'>Elementary school through 10th grade</p>                </li>                <li>                    <h5 id='cv-h5'><b>Laxmanrao Apte Jr. Clg, Pune (2016 - 2018)</b></h5>                    <p id='cv-p'>11th and 12th grade</p>                </li>                <li>                    <h5 id='cv-h5'><b>Fergusson College (2018 - present)</b></h5>                    <p id='cv-p'>BSc, Mathematics and Statistics </p>                </li>            </ul>            <hr>       </div>        <div class='col-12 col-md-12 col-sm-12 col-lg-6'>            <h4 id='cv-subtitle'><b>Skills</b></h4>            <ul>                <li id='cv-h6'><h6 class='skill-title'><b>Programming Languages:</b></h6> C++, Python, R</li>               <li id='cv-h6'><h6 class='skill-title'><b>OS:</b></h6> Windows</li>                <li id='cv-h6'><h6 class='skill-title'><b>Tools:</b></h6> Jupyter Notebooks, Git</li>            </ul>            <hr>                <h4 id='cv-subtitle'><b>Awards and Other Achievements</b></h4>            <ul>                <li id='cv-h6'><h6 class='skill-title'><b>CGPA:</b></h6> 9.41</li>         <li id='cv-h6'><h6 class='skill-title'><b>Inspire Scholarship</b></h6> 2018-2022</li>                     <li id='cv-h6'><h6 class='skill-title'><b>MHTCET Score:</b></h6> 107</li>                <li id='cv-h6'><h6 class='skill-title'><b>SSC board examination:</b></h6> 98%</li>                <li id='cv-h6'><h6 class='skill-title'><b>HSC board examination:</b></h6> 89%</li>            </ul>            <hr>            <h4 id='cv-subtitle'><b>Languages</b></h4>              <h6 class='skill-title'>English, Hindi, Marathi</h6>          </ul>          <hr>      </div>  </div></div><div class='col'></div>"
  $('#name-row').addClass('name-row-scroll');
  // $('#navbarTogglerDemo02').toggle();
}


function startup() {
  navbar_font();
  mihir();
}

window.onload = startup();

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $(".navbar-brand").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
})