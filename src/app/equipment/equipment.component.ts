import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  items: object[] = [
    { name: "Habitat dome" },
    { name: "Drones" },
    { name: "Food containers" },
    { name: "Oxygen tanks" },
  ];

  add(name: string) {
    for (let item of this.items) {
      if (item["name"] === name) {
        alert(`"${name}" is already packed on the rocket.`);
        return false;
      }
    }

    this.items.push({ name: name });
    return true;
  }

  constructor() {}

  ngOnInit() {}
}
