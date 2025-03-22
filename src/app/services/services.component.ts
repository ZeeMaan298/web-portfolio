import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { icon: 'ri-layout-4-line', title: 'Web Design' }, // Layout-related icon for web design
    { icon: 'ri-code-line', title: 'Web Developer' }, // Coding-related icon for web development
    { icon: 'ri-smartphone-line', title: 'Mobile App Developer' }, // Smartphone icon for mobile apps
    { icon: 'ri-database-2-line', title: 'Database Management' }, // Database-related icon
    { icon: 'ri-bug-line', title: 'Software Testing' }, // Bug icon for testing/debugging
    { icon: 'ri-refresh-line', title: 'Website Updates' } // Refresh icon for website updates
    
  ];
  
  
  
}
