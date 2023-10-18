import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProjetDetail {
  id: number;
  name: string;
  mainPict: string;
  langageOne: string;
  langageTwo: string;
  langageThree: string;
  hrefGithub: string;
  hrefSite: string;
}

@Component({
  selector: 'app-show-projet',
  templateUrl: './show-projet.component.html',
  styleUrls: ['./show-projet.component.css'],
})
export class ShowProjetComponent implements OnInit {
  projetId!: number;
  projetData: ProjetDetail | undefined;

  projetDetails: ProjetDetail[] = [
    {
      id: 1,
      name: 'HEAL GAMER',
      mainPict: '/assets/pict/projets/healGamerSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/Heal-Gamer-2.0',
      hrefSite: 'https://heal-gamer-2-0.vercel.app/main-page',
    },
    {
      id: 2,
      name: 'BACK WORLD',
      mainPict: '/assets/pict/projets/backWorldSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/Back-World-2.0',
      hrefSite: 'https://back-world-2-0.vercel.app/main-page',
    },
    {
      id: 3,
      name: 'ANIMUS',
      mainPict: '/assets/pict/projets/animusSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/Animus-2.0',
      hrefSite: 'https://animus-2-0.vercel.app/main-page',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.projetId = +params['id'];
      try {
        this.projetData = this.projetDetails.find(
          (projet) => projet.id === this.projetId
        );
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données du projet :',
          error
        );
      }
    });
  }
}
