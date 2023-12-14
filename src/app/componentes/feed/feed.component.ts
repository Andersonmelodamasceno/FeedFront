import { Component } from '@angular/core';
import { FeedService } from 'Services/FeedService';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  nome: string = 'Anderson';
  sobrenome: string = 'damasceno';
  email: string = 'dinhomelo_17@hotmail.com';




  constructor(private feedService: FeedService) { }

  pesquisarPorEmail() {
    if (this.email) {
      this.feedService.getDadosPorEmail(this.email).subscribe(
        (response) => {
          console.log('Resposta da solicitação:', response);

          this.nome = response.nome;
          this.sobrenome = response.sobrenome;
        },
        (error) => {
          console.error('Erro na solicitação:', error);
        }
      );
    } else {
      console.warn('Por favor, insira um email válido.');
    }
  }
  funcaoDeClique(event: Event) {

    this.pesquisarPorEmail();
  }
}
