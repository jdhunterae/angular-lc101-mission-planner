import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  itemBeingEdited: string = "";

  items: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density",
  ];

  constructor() {}

  add(name: string) {
    if (this.items.includes(name)) {
      alert(`"${name}" is already someone's experiment.`);
      return false;
    }

    this.items.push(name);
    return true;
  }

  remove(item: string) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name: string, item: string) {
    let index = this.items.indexOf(item);
    this.items[index] = name;
  }

  ngOnInit() {}
}
