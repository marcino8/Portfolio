import { Component, OnInit } from '@angular/core';
import {PrimeIcons, PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  events1: any[] = [];
  visibleSidebar2: boolean;
  visibleSidebar5: boolean;
  display: any;
  responsiveOptions: any;
  projects: any;

  constructor(private primengConfig: PrimeNGConfig) {
    this.visibleSidebar2 = true;
    this.visibleSidebar5 = true;
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.visibleSidebar2 = true;
    this.events1 = [
      {
        company: 'Danish Crown GBS',
        date: '08/2021 - 01/2022',
        icon: PrimeIcons.CHECK,
        color: '#673AB7',
        image: 'https://raw.githubusercontent.com/marcino8/Portfolio/master/img/dc.jfif',
        name: 'Danish Crown Logo',
        position: 'Intern in Master Data',
        description: 'Supporting Master Data team in confirming data procedure',
        mainTechnologies: 'SAP, Excel',
        otherTechnologies: 'VBA, Email Ticket Manager (HEAT)'
      },
      {
        company: 'Comarch SA',
        date: '02/2021 - Currently',
        icon: PrimeIcons.COG,
        color: '#673AB7',
        image: 'https://raw.githubusercontent.com/marcino8/Portfolio/master/img/com.png',
        name: 'Comarch Logo',
        position: 'Junior Software Developer',
        description: 'Developing both front-end and back-end for web application.',
        mainTechnologies: 'Java, Springboot, TypeScript, Angular, PSQL.',
        otherTechnologies: 'Git, Docker, Tomcat, Jira, Prometheus API'
      }
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.projects = [
      {
        name: "Comparative analysis",
        description: "Comparative analysis, ordering, grouping for workloads and team members",
        href: "/project1",
        source: "https://github.com/marcino8/DataAnalysis/blob/master/SAD.Rmd",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/r.png"
      },
      {
        name: "Classification methods",
        description: "Usage of known machine learning algorithms in order to predict certain features",
        href: "/project2",
        source: "https://github.com/marcino8/DataAnalysis/blob/master/SAD2.Rmd",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/r.png"
      },
      {
        name: "Dashboard for data cleaning",
        description: "Shiny R application to clean, filter and visualize data",
        href: "/project3",
        source: "https://github.com/marcino8/ShinyDashboard",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/shiny-logo.png"
      },
      {
        name: "Market Risk Analysiss - basics",
        description: "Market risk analysis for one asset portfolio using various methods",
        href: "/project4",
        source: "https://github.com/marcino8/MarketRisk/blob/master/rmd/Project4.Rmd",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/r.png"
      },
      {
        name: "Market Risk Analysiss - advanced",
        description: "Risk analysis for joined portfolio of assets, using correlation monitoring",
        href: "/project5",
        source: "https://github.com/marcino8/MarketRisk/blob/master/rmd/Project5.Rmd",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/r.png"
      },
      {
        name: "Linear Regression Modeling",
        description: "Project describing real data handling, and fitting in linear model in order to make predictions",
        href: "/project6",
      },
      {
        name: "Website project",
        description: "Angular website made with primeng",
        href: "https://marcino8.github.io/DentalApp",
        source: "https://github.com/marcino8/DentalApp",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/angular.png"
      },
      {
        name: "Flow-shop/TSP problem",
        description: "Resolving above problems using known heuristics as genetic algorithms, simulated annealing, tabu search and hill climbing",
        source: "https://github.com/marcino8/Flow-shop",
        image: "https://raw.githubusercontent.com/marcino8/Portfolio/master/img/py.png"
      },
    ]

  }

  navToUrl(source: string) {
    document.location.href = source;
  }

  navToUrlDental(name: string) {
    if(name === 'Website project'){
      document.location.href = 'https://marcino8.github.io/DentalApp';
    }
  }
}
