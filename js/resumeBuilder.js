var bio = {
  "name": "JY Jin",
  "role": "Web based 3D Application Developer",
  "contacts": {
    "email": "returnfirst@gmail.com",
    "github": "returnfirst",
    "location": "Seoul"
  },
  "welcomeMessage": "Hi, everyone. My name is JY Jin. Nice meet you.",
  "skills": ["awesomeness", "programming", "learning", "JS", "WebGL"],
  "bioPic": "images/fry.jpg"
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedName).append(formattedRole);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLocation);
  $("#footerContacts").append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLocation);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedWelcomeMsg).append(formattedBioPic);

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $('#skills').append(formattedSkill);
    }
  }
};

var education = {
  "schools": [{
    "name": "KS univ.",
    "location": "Busan",
    "majors": "Computer Engineering",
    "date": 1999,
    "url": "http://www.google.com"
  }, {
    "name": "DD mid.",
    "location": "Busan",
    "majors": "Liberal arts track",
    "date": 1991,
    "url": "http://www.google.com"
  }],
  "onlineCourses": [{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://www.udacity.com/course/ud804"
  }]
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
    $(".education-entry:last").append(formattedSchoolDates);
  }

  if (education.onlineCourses.length > 0) {
    $(".education-entry:last").append('<br><br><br>');
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace('#', education.onlineCourses[course].url);;
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last")
        .append(formattedOnlineTitle + formattedOnlineSchool)
        .append(formattedOnlineDates)
        .append('<br>');
    }
  }
};

var work = {
  "jobs": [{
    "employer": "Intelli Korea Inc.",
    "title": "Senior Researcher",
    "location": "Seoul",
    "dates": "2014 ~ future",
    "description": "3D Printing R&D Project Team, Software R&D"
  }, {
    "employer": "Real D Square co., Ltd.",
    "title": "Senior Researcher",
    "location": "Seoul",
    "dates": "2012 ~ 2014",
    "description": "Government R&D Project Team Manager, Software R&D"
  }, {
    "employer": "CoDiC communications Inc.",
    "title": "Researcher",
    "location": "Seoul",
    "dates": "2003 ~ 2011",
    "description": "Software research and develop"
  }]
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {
  "projects": [{
    "title": "DDD Project",
    "dates": "2012 ~ 2014",
    "description": "Good job",
    "images": "images/fry.jpg"
  }, {
    "title": "CCC Project",
    "dates": "2009 ~ 2012",
    "description": "Good job",
    "images": "images/fry.jpg"
  }, {
    "title": "BBB Project",
    "dates": "2005 ~ 2008",
    "description": "Good job",
    "images": "images/fry.jpg"
  }, {
    "title": "AAA Project",
    "dates": "2003 ~ 2005",
    "description": "Good job",
    "images": "images/fry.jpg"
  }, ]
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImages);
  }
};

function inName() {
  var name = $("#name").html();
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

bio.display();
education.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
