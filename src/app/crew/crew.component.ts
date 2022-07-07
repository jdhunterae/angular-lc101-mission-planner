import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  inCrew: boolean = false;
  crew: object[] = [];
  selectedMember: object = null;

  candidates: object[] = [
    {
      name: "Sally Ride",
      photo:
        "https://handlers.education.launchcode.org/static/images/sally-ride.jpg",
    },
    {
      name: "Mae Jemison",
      photo:
        "https://handlers.education.launchcode.org/static/images/mae-jemison.jpg",
    },
    {
      name: "Ellen Ochoa",
      photo:
        "https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg",
    },
    {
      name: "Frederick Gregory",
      photo:
        "https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg",
    },
    {
      name: "Guion Bluford",
      photo:
        "https://handlers.education.launchcode.org/static/images/guion-bluford.jpg",
    },
    {
      name: "Kjell Lindgren",
      photo:
        "https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg",
    },
    {
      name: "Jeanette Epps",
      photo:
        "https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg",
    },
  ];

  constructor() {}

  ngOnInit() {}

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object) {
    this.selectedMember = candidate;

    if (this.crew.includes(candidate)) {
      this.crew.splice(this.crew.indexOf(candidate), 1);
      return;
    }

    if (this.crew.length >= 3) {
      return;
    }

    this.crew.push(candidate);
  }
}
