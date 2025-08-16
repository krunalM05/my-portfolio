import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      company: 'Tata Consultancy Services',
      role: 'Java Developer',
      duration: 'Aug 2023 – Present (2 Years 1 Month)',
      title: 'TTax – Transactional Tax Reporting System',
      description: `A financial reporting application to process and reconcile stock exchange trade data. 
      It automates trade data ingestion, stamp duty calculation, and report generation.`,
      responsibilities: [
        'Built RESTful APIs for trade & transaction data using Java and Spring Boot.',
        'Implemented pagination, sorting, and filtering for large datasets.',
        'Developed microservices to fetch, stream (Kafka), and persist data.',
        'Created unit tests using JUnit & Mockito for high reliability.'
      ],
      techStack: ['Java 8', 'Spring Boot', 'Kafka', 'DB2', 'SQL', 'JUnit', 'Mockito', 'Git/GitHub']
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Java Developer',
      duration: 'Aug 2022 – Aug 2023 (1 Year)',
      title: 'ELrn – eLearning & Skill Management System',
      description: `A microservices-based web app for role-based training assignment and compliance management.`,
      responsibilities: [
        'Developed REST APIs for training dashboard with pagination.',
        'Implemented Swagger for interactive API documentation.',
        'Created unit tests for service and controller layers.'
      ],
      techStack: ['Java 8', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'Oracle DB', 'JUnit', 'Mockito']
    },
    {
      company: 'Wipro Technologies',
      role: 'Java Developer Intern',
      duration: 'Feb 2022 – June 2022 (5 Months)',
      title: 'Pizza Ordering Application',
      description: `Spring Boot based training project for pizza ordering with category and price filtering.`,
      responsibilities: [
        'Developed and tested REST APIs.',
        'Implemented filtering by category and price range.',
        'Practiced controller-service-repository pattern & DB operations.'
      ],
      techStack: ['Java 8', 'Spring Boot', 'SQL', 'Git', 'Agile Practices']
    }
  ];

}
