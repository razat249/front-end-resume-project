
var bio = {
	"name" : "RAJAT PATWA",
	"role" : "DEVELOPER",
	"contacts" : {
		"mobile" : "+917597305718",
		"email" : "razat249@gmail.com",
		"linkedin" : "linkedin.com/in/rajatpatkar ",
		"github" : "github.com/razat249",
		"location" : "India"
	},
	"welcomeMessage" : "Thanks for your intrest",
	"biopic" : 'images/fry.jpg',
	"skills" : ["Python", "JAVA", "Front end developer", "Full stack developer"]
}

var education = {
	"schools":  [
	{
			"name" : "Govt Engineering College",
			"city" : "Bikaner",
			"degree" : "BTech",
			"branch" : "CS",
			"dates" : "August 2013 - April 2017"
		},
	],
	"onlineCourses" : [
		{
			"title" : "Intro to computer science",
			"school" : "Udacity",
			"dates" : "May 2015 to July 2015",
			"url" : "http://udacity.com"
		},

		{
			"title" : "Programming Foundation with Python",
			"school" : "Udacity",
			"dates" : "July 2015 to August 2015",
			"url" : "http://udacity.com"
		},

		{
			"title" : "Web Development",
			"school" : "Udacity",
			"dates" : "August 2015 to Septamber 2015",
			"url" : "http://udacity.com"
		},

		{
			"title" : "Front-End Developer",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://udacity.com"
		},
		{
			"title" : "full stack Developer",
			"school" : "Udacity",
			"dates" : "Septamber 2015 to December 2015",
			"url" : "http://udacity.com"
		}
		
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Web Developer",
			"title" : "Development Leader",
			"dates" : "2014-2015",
			"location" : "Banglore",
			"description" : "Some text here to update.Some text here to updateSome text here to updateSome text here to updateSome text here to updateSome text here ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text to updateSome text here to update"
		},
		{
			"employer" : "Programmer",
			"title" : "Software Engineer",
			"dates" : "2015-2017",
			"location" : "Mumbai",
			"description" : "Some text here to updateSome text here to ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text ere to updateSome text here to updateSome text here to updateSome text here to updateSome text here to updateSome text updateSome text here to updateblah blahSome text here to updateSome text here to updateSome text here to updateSome text here to update blah"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Search Engine",
			"dates" : 2016,
			"description" : "Create a student search engine for help in find anything for a student online",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "The Blog",
			"dates" : 2016,
			"description" : "Create a blog using google app engine",
			"images" : "images/197x148.gif"
		}
	]
}

var formatted_role = HTMLheaderRole.replace("%data%",bio.role);
$('#header').prepend(formatted_role);

var formatted_name = HTMLheaderName.replace("%data%",bio.name);
$('#header').prepend(formatted_name);

var mobile_no = HTMLmobile.replace("%data%",bio.contacts.mobile);
$('#topContacts').append(mobile_no);

var e = HTMLemail.replace("%data%",bio.contacts.email);
$('#topContacts').append(e);

var git = HTMLgithub.replace("%data%",bio.contacts.github);
$('#topContacts').append(git);


var linked_in = HTMLlinkedIn.replace("%data%",bio.contacts.linkedin);
$('#topContacts').append(linked_in);

var loc = HTMLlocation.replace("%data%",bio.contacts.location);
$('#topContacts').append(loc);

var msg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$('#header').append(msg);

var pic = HTMLbioPic.replace("%data%",bio.biopic);
$('#header').append(pic);



//missing if statement

$('#header').append(HTMLskillsStart);

var skill_1 = HTMLskills.replace("%data%",bio.skills[0]);
$('#skills').append(skill_1);

var skill_2 = HTMLskills.replace("%data%",bio.skills[1]);
$('#skills').append(skill_2);

var skill_3 = HTMLskills.replace("%data%",bio.skills[2]);
$('#skills').append(skill_3);

var skill_4 = HTMLskills.replace("%data%",bio.skills[3]);
$('#skills').append(skill_4);



function displayWork(){
	for (i in work.jobs) {
		$('#workExperience').append(HTMLworkStart);


		var emp = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var t = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var empt = emp + t;
		$('.work-entry:last').append(empt);


		var date = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		$('.work-entry:last').append(date);

		var des = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$('.work-entry:last').append(des);
	}
}

displayWork();
displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

projects.display = function(){
	for (var i in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var project_title = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$('.project-entry:last').append(project_title);

		var project_dates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$('.project-entry:last').append(project_dates);

		var project_description = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$('.project-entry:last').append(project_description);

		var project_images = HTMLprojectImage.replace("%data%",projects.projects[i].images);
		$('.project-entry:last').append(project_images);
	}
}

projects.display();


$('#mapDiv').append(googleMap);