import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeolpleService } from 'src/app/services/peolple.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  public person = { name: '', birthDate: ""};
  public isSave = false;

  constructor(private peopleService: PeolpleService) {}

  ngOnInit(): void {
    this.initializeData();

  }

  public savePerson(personForm: NgForm): void {
    this.person.name = personForm.value.personName;
    this.person.birthDate = personForm.value.personDate;
    this.addPerson(this.person);
  }

  private initializeData(): void {
    this.peopleService.getPeople().subscribe((res) => {
    });
  }

  private addPerson(person : any): void {

    this.peopleService.addPeople(person).subscribe((res) => {

      if (res.age>=0) {
        alert('Persona guardada - Edad: ' + res.age);
      }
    });
  }
}
