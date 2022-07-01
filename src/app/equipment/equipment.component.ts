import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  items: string[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ];

  add(name: string) {
    if (this.items.includes(name)) {
      alert(`"${name}" is already packed on the rocket.`);
      return false;
    }

    this.items.push(name);
    return true;
  }

  constructor() {}

  ngOnInit() {}
}
