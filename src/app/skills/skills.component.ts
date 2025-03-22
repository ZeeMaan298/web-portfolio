import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'ASP.Net Core', percentage: 85 },
    { name: 'HTML', percentage: 95 },
    { name: 'SQL Server', percentage: 80 },
    { name: 'C++', percentage: 85 },
    { name: 'CSS3', percentage: 90 },
    { name: 'Java Script', percentage: 80 }
  ];
}
