export type Article = {
  id: number,
  data_pubblicazione: string,
  estratto: string,
  link: string,
  testata: {
    nome: string,
    icona: string
  }
}