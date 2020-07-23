import { PessoasService } from './../service/pessoas.service';
import { Pessoas } from './../modelo/pessoas';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoas[] = [];
  total: number;
  ascedente: Pessoas[] = [];
  descendente: Pessoas[] = [];

  pessoas$: Observable<Pessoas[]>;
  total$: Observable<number>;
  total2: number;
  pessoas2: Pessoas[] = [];
  ordenacao2: Pessoas[] = [];

  constructor(private service: PessoasService) { }

  ngOnInit(): void {

    //this.getGalera();
    this.getPessoas();

  }

  getGalera(){
    this.service.findAll().subscribe(res => {

      this.pessoas = res;
      console.log(this.pessoas);

      this.total = this.pessoas.reduce((a, g) => a + g.valor,0);
      console.log('total = '+this.total);

      this.ascedente = this.pessoas.sort((a,b) => a.nome.localeCompare(b.nome));
      console.log(this.ascedente);

      //this.descendente = this.pessoas.sort((a,b) => b.nome.localeCompare(a.nome));
      //console.log(this.descendente);
    });
  }

  getPessoas(){
    console.log('observable');
    this.pessoas$ = this.service.findAll();

    this.total$ = this.pessoas$.pipe(
      map(t => t.reduce((a,b) => a + b.valor, 0)),
      );

      this.total$.subscribe(s => {
        this.total2 = s
        console.log(this.total2);
      });

      this.pessoas$.subscribe(
        e => {
          this.pessoas2 = e;
          console.log(this.pessoas2);

          this.ordenacao2 = this.pessoas2.sort((a,b) => a.nome.localeCompare(b.nome));

          // ordenacao2 desc
          // this.ordenacao2 = this.pessoas2.sort((a,b) => b.nome.localeCompare(a.nome));
          
          console.log(this.ordenacao2);
        }
      );
    //console.log(this.total$.subscribe(t => console.log(t)));
  }
}
