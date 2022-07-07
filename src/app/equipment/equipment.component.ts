import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  focusedItem: object = null;
  equipmentItems: object[] = [
    { name: "Duct Tape", mass: 0.5 },
    { name: "Space Camera", mass: 20 },
    { name: "Food", mass: 150 },
    { name: "Oxygen Tanks", mass: 400 },
    { name: "AE-35 Unit", mass: 5 },
    { name: "ISS Supplies", mass: 800 },
    { name: "Water", mass: 250 },
    { name: "Satellite", mass: 1200 },
    { name: "R2 Unit", mass: 32 },
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() {}

  ngOnInit() {}

  // Code your addItem function here:
  addItem(item: object): boolean {
    this.cargoHold.push(item);
    this.cargoMass += item["mass"];

    return this.getMassRemaining() <= 200;
  }

  canAdd(item): boolean {
    let quantity = 0;

    for (let equip of this.cargoHold) {
      if (equip === item) {
        quantity += 1;
      }
    }

    if (quantity >= 2) {
      return false;
    }

    if (this.cargoHold.length >= this.maxItems) {
      return false;
    }

    return item["mass"] <= this.getMassRemaining();
  }

  getMassRemaining(): number {
    this.cargoMass = 0;

    for (let item of this.cargoHold) {
      this.cargoMass += item["mass"];
    }

    return this.maximumAllowedMass - this.cargoMass;
  }

  nearingMaxMass() : boolean {
    return this.getMassRemaining() <= 200;
  }

  removeItem(item: object) {
    this.cargoHold.splice(this.cargoHold.indexOf(item), 1);
  }

  emptyHold() {
    this.cargoHold = [];
    this.getMassRemaining();
  }
}
