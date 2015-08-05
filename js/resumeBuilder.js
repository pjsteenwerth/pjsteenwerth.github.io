var bio = {
    "name" : "Peter Steenwerth",
	"role" : "Student",
	"contacts" : {
    	"mobile" : "917-524-5260",
		"email" : "pjsteenwerth@gmail.com",
		"github" : "https://github.com/pjsteenwerth",
		"twitter" : "@molochmachinery",
		"location" : "18 Bass st. Staten Island,NY 10314"
	},
	"skills" : [" awesomeness ", "programming ", "musician ", "artist ", "alarm technician "],
	"welcomeMessage" : "Greetings",
	"bioPic":"http://i.imgur.com/2ORwD6y.jpg"
};

bio.display = function() {
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedContacts= formattedLocation + formattedTwitter + formattedEmail + formattedGithub;
    
    $("#header").append(formattedName);
    $("#header:last").append(formattedRole);
    $("#topContacts").prepend(formattedContacts);
    $("#footerContacts").append(formattedContacts)
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg); 	
    

    $("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#header").append(formattedSkill);
	
};

bio.display();

var education = { 
    
    "schools":
	{
	"name" : "Port Richmond Highschool",
	"dates" : "2001-2005",
	"degree" : "GED diploma",
	"location" : "85 Saint Josephs Avenue, Staten Island, NY 10302"
    }
  ,
 "onlineCourses":
    {
     "title": "Intro to HTML and CSS",
     "school": "Udacity",
     "date": 2014,
     "url": "https://www.udacity.com/"
    }

};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
	$(".education-entry:last").append(formattedSchoolName);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	$(".education-entry:last").append(formattedSchoolDegree);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
	$(".education-entry:last").append(formattedSchoolLocation);
	var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
	$(".education-entry:last").append(HTMLonlineClasses);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.date);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
	$(".education-entry:last").append(formattedOnlineTitle);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
	$(".education-entry:last").append(formattedOnlineSchool);
	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
	$(".education-entry:last").append(formattedOnlineURL);
}
education.display();


var work = {
	"jobs":[
    {
    "employer" : "MPG Security",
	"title" : "alarm technician",
	"dates" :"2005-2015",
	"location" :"100 Robinson Avenue, Staten Island, NY 10312",
    "description" :"Working with MPG I install alarms, CCTV, home theatre, and central vacuum systems."
	},
	{
    "employer" : "Department of Education",
	"title" : "cleaner",
	"dates" :"2010-2015",
	"location" :"161 Park avenue Staten Island NY 10302",
    "description" :"I work as a cleaner in 2 public schools on Staten Island. This involves groundskeeping, sweeping, mopping, buffing and waxing floors, taking out trash, snow removal, etc. "
	},
    {
    "employer" : "Domino sugar factory",
	"title" : "cooper",
	"dates" :"2012-2013",
	"location" :"1 Federal Street, Yonkers, NY 10705",
    "description" :"I was a dock worker in a sugar factory. My responsibility as a cooper was to shovel sugar on to a conveyor belt.  "
	},
	 {
    "employer" : "JCpenney",
	"title" : "sales associate",
	"dates" :"2007-2009",
	"location" :"Staten Island Mall, 140 Marsh Ave, Staten Island, NY 10314",
    "description" :"As a sales associate my responsibilities included working the register, assisting customers, and tidying up the store for daily and coporate inspections.  "
	},
	 {
    "employer" : "BabiesRUs",
	"title" : "morning stock person",
	"dates" :"2005-2007",
	"location" :"Staten Island Mall, 2655 Richmond Ave, Staten Island, NY 10314",
    "description" :"I worked in the shipping and receiving part of a retail environment. My job included unloading a truck at 6am, stocking shelves, reading planograms, assisting customers, attending daily meetings, and yearly inventory.  "
	}
	]
}

work.display = function () {
  for(job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
	
    $(".work-entry:last").append(formattedWork);
	}

};
work.display();

var projects = {
	
	"projects":[
     {
     "title" : "About me page",
     "description" : "I constructed an about me page as part of the application process to General Assembly. I validated the code, went over it during an interview, and was accepted.",
     "dates" : "2014",
     },  
	 {
     "title" : "Portfolio project",
     "description" : "I constructed web page according to a mockup and added my own pictures and modals to the design.",	
     "dates" : "2014",
     }
    ]

};

projects.display = function() {
	
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

 }
};
projects.display();

$("#mapDiv").append(googleMap);

