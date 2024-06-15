const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OF_BIRTH = 1997;
const START_YEAR = 2020;

const PROJECTS = {
  VSC: {
    name: "Vehicle Safety Center",
    client: "SASO",
    description:
      "The Vehicle Safety Center is part of the Saudi Standards, Metrology and Quality Organization, and is specialized in raising technical safety standards related to vehicles. The center aims to protect lives and property, reduce injuries, and reduce economic costs resulting from traffic accidents.",
    responsibilities:
      "Contributed to the front-end development of SASO's Vehicle Safety Center system, utilizing React and Redux to create a responsive web app. Collaborated with a Java back end to implement features such as booking and managing appointments for periodic technical inspection of vehicles with all entities licensed by Saudi standards to provide the service.",

    image: "img/projects/SASO.png",
    year: "y24",
    Technical_Stack: ["React", "Typescript", "MUI", "SASS", "Java"],
  },
  CIS: {
    name: "CIS",
    description:
      "The Centralized Inspection System, A project implemented by the Roads and Transport Authority in Dubai. The project aims at creating a central system that captures all details related to vehicle testing and audit and compliance activities in Dubai. The system is a key application for the RTA for managing from first to end vehicle inspection process in Dubai.",
    responsibilities:
      "Played a key role in front-end development for a comprehensive inspection system for RTA Dubai, utilizing React and Redux to create a responsive web app. Collaborated with a Java back end to implement features like user registration, vehicle details, inspection results, payments, and reporting, contributing to the streamlined efficiency of RTA's vehicle testing and audit activities.",
    image: "img/projects/RTA.jpg",
    year: "y23",
    Technical_Stack: ["React", "Typescript", "MUI", "SASS", "Java"],
  },
  EMS: {
    name: "EMS",
    description:
      "The Electronic Messaging System, An internal messaging system used by the Roads and Transport Authority in Dubai. It is used to communicate with employees and departments within the RTA.",
    responsibilities:
      "Contributed to the front-end development of an electronic messaging system for RTA Dubai, utilizing React and Redux to create a responsive web app. Collaborated with a Java back end to implement features such as user registration and messaging, enhancing communication efficiency.",
    image: "img/projects/RTA.jpg",
    year: "y23",
    Technical_Stack: ["React", "Typescript", "MUI", "SASS", "Java"],
  },
  COMPASS: {
    name: "Compass",
    description:
      "Compass is a global initiative, in partnership with 14 countries, designed to protect people on the move, combat human trafficking and smuggling, and support dignified return while promoting sustainable reintegration.",
    responsibilities:
      "Played a vital role in crafting the front-end of a web app for the initiative. Used React and Redux to create a fast, user-friendly interface. Collaborated with Laravel back end to implement features like user authentication, service provision, referral, and reporting, advancing the initiative's global objectives.",
    image: "img/projects/compass.jpg",
    year: "y21",
    Technical_Stack: ["React", "SASS", "Prime", "BT", "Laravel"],
  },
  APA: {
    name: "APA",
    description:
      "The Africa Prosecutors Association, Is A Regional Organization Composed Of 35 African Prosecution Authorities, And Was Established In 2004. The Main Purpose Of The Association Is To Create A Regional Forum To Facilitate Judicial Cooperation Between African Public Prosecutors And To Confront Transnational Organized Crime And Its Serious Risks Against The Security And Safety Of African Countries.",
    responsibilities:
      "Key contributor to the extensive web app development for APA. Used React and Context API to create a fast, user-friendly interface. Collaborated with a Laravel back end to Implement features like news, events, resources, and chat, greatly enhancing the APA platform.",
    image: "img/projects/apa.jpg",
    year: "y22",
    Technical_Stack: ["React", "SASS", "Prime", "BT", "Laravel"],
  },
  UELDP_LMS: {
    name: "UELDP LMS",
    description:
      "A powerful tool to support training professional to create imaginative and compelling courses that students enjoying working and learning with.",
    responsibilities: "",
    image: "img/projects/UELDP-logo.jpg",
    year: "y21",
    Technical_Stack: ["React", "SASS", "Prime", "BT", "Laravel"],
  },
  UELDP: {
    name: "UELDP",
    description:
      "A government program partially supported by the World Bank. The program aims to advance development in the governorates of Sohag and Qena as a model that can be generalized to the rest of Upper Egypt.",
    responsibilities:
      "Contributed to front-end development for UELDP's web app in Upper Egypt. Used React and Redux to create a fast, user-friendly interface. Collaborated with Laravel for features like user registration, project details, and progress tracking, ensuring program success.",
    image: "img/projects/UELDP-logo.jpg",
    year: "y21",
    Technical_Stack: ["React", "SASS", "Prime", "BT", "Laravel"],
  },
  PLATO: {
    name: "Plato Campus",
    description:
      "Plato-campus is a powerful tool to support training professional to create imaginative and compelling courses that students enjoying working and learning with.",
    responsibilities:
      "Instrumental in developing a web app for Plato Campus, a learning management system. Used React and Redux to create a fast, user-friendly interface. Collaborated with a Laravel back end to implement features like course creation, video streaming, quizzes, feedback, and certificates, enhancing the online learning experience.",
    image: "img/projects/plato.jpg",
    year: "y21",
    Technical_Stack: ["React", "SASS", "Prime", "BT", "Laravel"],
  },
  PLAN: {
    name: "Scorecards",
    description:
      "Scorecards is a powerful application designed to revolutionize your feedback experience with organizations. This app empowers users to rate and provide valuable feedback on the service quality they receive. Enhance transparency and accountability as you contribute to a community-driven assessment of organizational performance. With Scorecards, your opinions shape a collective voice, fostering improvement and excellence in the services provided by Plan International Agency.",
    image: "img/projects/Plan.jpg",
    responsibilities:
      "Collaborated with a team of developers to design and implement a user-friendly feedback system using React and Context API. Contributed to the development of a Laravel back end to support features like user authentication, reporting, and service provision. Worked closely with the team to ensure that the application was scalable, reliable, and secure.",
    year: "y22",
    Technical_Stack: ["React", "SASS", "BT", "Laravel"],
  },
  Chat: {
    name: "Chat",
    description:
      "A Real-Time Chat Application that facilitates dynamic group communication. With customizable chat rooms, instant messaging, and a user-friendly interface, this application ensures seamless interactions among multiple users. Emphasizing quick response times and security.",
    image: "img/projects/Chat.jpg",
    responsibilities:
      "Led the development of a React app, building an efficient Express.js Node.js backend. Innovatively utilized Socket.io for real-time communication, bypassing traditional APIs. Streamlined deployment on the Render cloud platform for optimized performance.",
    year: "y24",
    demo: "chat-app",
    Technical_Stack: ["React", "Express.js", "Socket.io"],
  },
  VIRTUE: {
    name: "Virtue",
    description:
      "Fully responsive website about Virtue application, consist of five pages",
    image: "img/projects/Virtue.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "Jquery", "SASS", "Pus", "Bt 4"],
    demo: "Virtue",
  },
  TRAVELY: {
    name: "Tavely",
    description:
      "Find everything you need for a trip, travel bags and accessories",
    image: "img/projects/Travely.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "Jquery", "SASS", "Pus", "Bt 4"],
    demo: "Travely",
  },
  KALLYAS: {
    name: "Kallyas",
    description: "Helping Business And Companies Innovate Transform And Lead",
    image: "img/projects/Kallyas.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "Jquery", "SASS", "Pus", "Bt 4"],
    demo: "Kallyas",
  },
  AXIT: {
    name: "Axit",
    description:
      "AXURE Modern Beautiful Portfolio Template, Portfolio Agency Website",
    image: "img/projects/Axit.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "CSS", "Jquery", "Bt 3"],
    demo: "AXIT",
  },
  ELITE: {
    name: "Elite",
    description: "An Independent Design And Development Agency website",
    image: "img/projects/Elite.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "CSS", "Jquery", "Bt 4"],
    demo: "Elite",
  },
  OVERSEEK: {
    name: "Overseek",
    description:
      "Fully responsive website without any framework or javascript libraries, only vanilla javascript.",
    image: "img/projects/Overseek.jpg",
    responsibilities: "",
    year: "y20",
    Technical_Stack: ["HTML", "CSS", "Javascript"],
    demo: "Overseek",
  },
  SOFTPOWER: {
    name: "Soft Power",
    description:
      "Last updates and news about soft power all around the world, designed&amp;coded by me.",
    image: "img/projects/softpower.jpg",
    responsibilities: "",
    year: "y19",
    Technical_Stack: ["HTML", "CSS", "Jquery"],
    demo: "softpower",
  },
  BEATS: {
    name: "Beats",
    description:
      "Beats company website, it is all about music production and singing",
    image: "img/projects/Beats.jpg",
    responsibilities: "",
    year: "y19",
    Technical_Stack: ["HTML", "CSS", "Jquery"],
  },
  TANATOS: {
    name: "Tanatos",
    description:
      "Designing company website, its name is TanatosStudio, general designs",
    image: "img/projects/Tanatos.jpg",
    responsibilities: "",
    year: "y19",
    Technical_Stack: ["HTML", "CSS", "Jquery"],
    // demo: "Tanatos",
  },
  KAORN: {
    name: "Kaorn",
    description:
      "Tourist company, simple website for booking and informations for tourists",
    image: "img/projects/Kaorn.jpg",
    responsibilities: "",
    year: "y18",
    Technical_Stack: ["HTML", "CSS"],
    demo: "Kaorn",
  },
};

$(function () {
  "use strict";
  new WOW({ mobile: !1 }).init();

  // Render Projects
  var cardContainer = $(".portfolio #container .row");
  $.each(PROJECTS, function (name, projectData) {
    var cardHtml = `
        <div class="col-lg-4 col-md-6 ${projectData.year} mix">
            <div class="site">
                <div class="card w-100 shadow-sm pointer" data-toggle="modal" data-target="#myModal" data-project="${name}">
                    <div class="pic">
                        <div class="overlay"></div>
                        <img class="card-img-top" src="${
                          projectData.image
                        }" alt="${name}" />
                    </div>
                    <div class="card-body">
                        <div class="card-title">${projectData.name}</div>
                        <div class="card-text p-style mb-3">${
                          projectData.description
                        }</div>
                        <div class="techs">
                        ${
                          projectData.demo
                            ? `<a class="btn btn-ligh open-link" href="https://ahmedsamir01.github.io/${projectData.demo}" target="_blank">open</a>`
                            : ""
                        }
                        ${projectData.Technical_Stack.map(
                          (tech) => `<span class="badge">${tech}</span>`
                        ).join("")}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    cardContainer.append(cardHtml);
  });

  // Initialize MixItUp
  $(".container").mixItUp();

  // Stop Propagation when clicking on open link
  $(".card .open-link").click(function (e) {
    e.stopPropagation();
  });

  // Open modal functionality
  $(document).on("click", ".card", function () {
    $("body").css("overflow", "hidden");
    $(".modal-image img").attr("src", "img/projects/placeholder.jpg");

    // Get the project name from the data-project attribute
    var projectName = $(this).data("project");
    var dataForCard = PROJECTS[projectName];

    // Clear existing content in the modal
    $(".modal-body .techs").empty();

    // Populate modal content with dynamic data
    $(".modal-image img").attr("src", dataForCard.image);
    $("#projectName").text(dataForCard.name);
    $("#projectDescription").text(dataForCard.description);

    // Check if responsibilities exist before adding the header
    if (dataForCard.responsibilities) {
      $(".highlights-header").text("Contributions");
      $("#projectResponsibilities").text(dataForCard.responsibilities);
    } else {
      // Clear the responsibilities header and content if it doesn't exist
      $(".highlights-header").text("");
      $("#projectResponsibilities").text("");
    }

    var technologiesHtml = dataForCard.Technical_Stack.map(
      (tech) => `<span class="badge mt-1">${tech}</span>`
    );
    $(".modal-body .techs").append(technologiesHtml);

    // Add link to demo if it exists
    if (dataForCard.demo) {
      var demoLink = `<a class="btn btn-light ms-2 mt-1" href="https://ahmedsamir01.github.io/${dataForCard.demo}" target="_blank">Open</a>`;
      $(".modal-body .techs").append(demoLink);
    }

    $(".modal .modal-body").scrollTop(0);

    // Show the modal
    $("#myModal").modal("show");
  });

  // Close modal functionality
  $(".modal").on("hidden.bs.modal", function () {
    $("body").css("overflow", "auto");
    $(".modal .modal-body").scrollTop(0);
  });

  window.matchMedia("(max-width: 767px)");
  let a = window.matchMedia("(min-width: 768px)");
  function o() {
    if ($(window).scrollTop() > $(this).offset().top - 350) {
      let a = $(this).attr("id");
      $(".navbar li").removeClass("active"),
        $(`.navbar li a[data-scroll='${a}']`).parent().addClass("active");
    }
  }
  function s() {
    a.matches
      ? $(window).scrollTop() > 30 &&
        ($("nav").addClass("sticky-nav"), $("nav").addClass("border-bottom"))
      : ($("nav").removeClass("sticky-nav"),
        $("nav").addClass("border-bottom"));
  }
  $(window).on("load", function () {
    $(".block").each(o);
  }),
    s(),
    $(window).scroll((s) => {
      a.matches
        ? $(window).scrollTop() > 30
          ? ($("nav").addClass("sticky-nav"),
            $("nav").addClass("border-bottom"))
          : ($("nav").removeClass("sticky-nav"),
            $("nav").removeClass("border-bottom"))
        : $("nav").addClass("border-bottom"),
        $(window).scrollTop() >= $(".skills").offset().top - 400 &&
          $(".progress-bar").each(function () {
            this.style.width = `${this.getAttribute("aria-valuenow")}%`;
          }),
        $(".block").each(o);
    }),
    $(window).resize((o) => {
      s(),
        a.matches &&
          $(window).scrollTop() < 30 &&
          $("nav").removeClass("border-bottom");
    }),
    $(".shuffle li").on("click", (a) => {
      $(this).addClass("active").siblings().removeClass("active");
    }),
    $("nav li a").on("click", function (a) {
      a.preventDefault(), $(".navbar-collapse").removeClass("show");
      $("html, body").animate(
        { scrollTop: $("#" + $(this).data("scroll")).offset().top - 50 },
        1e3
      ),
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
});

$(window).on("load", function () {
  $(".answer .age").text(CURRENT_YEAR - YEAR_OF_BIRTH);
  $(".experience-years").text(`+${CURRENT_YEAR - START_YEAR}`);
  $(".view-more").on("click", function () {
    $(".portfolio").toggleClass("closed");
    $(this).text() === "view more"
      ? $(this).text("view less")
      : $(this).text("view more");
  });
  $(".navbar-collapse").on("click", (e) => {
    e.stopPropagation();
  });
  $(document).bind("click", function (e) {
    if (
      $(".navbar-collapse").hasClass("show") &&
      e.target !== document.querySelector(".show") &&
      e.target !== document.querySelector(".navbar-toggler") &&
      e.target !== document.querySelector(".navbar")
    ) {
      $(".navbar-toggler").click();
    }
  });
  $(".loading span").fadeOut(100, function () {
    $(this)
      .parent()
      .fadeOut(1000, function () {
        $(this).remove();
        $("body").css("overflow", "auto");
      });
  });
});
