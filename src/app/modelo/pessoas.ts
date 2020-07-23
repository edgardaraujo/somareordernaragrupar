export class Pessoas{
    id: number;
    nome: string;
    valor: number;
    uf: string;
    cidade: string;

    constructor(id?:number,nome?:string,valor?:number,uf?:string,cidade?:string){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.uf = uf;
        this.cidade = cidade;
    }
}