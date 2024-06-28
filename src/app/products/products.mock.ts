export const productsList: Product[] =[
{id: 1, name: 'Lavandina', price: 10, description: "Botella de 1L."},
{id: 2, name: 'Detergente', price: 5, description: "Dura 120 lavadas."},
{id: 3, name: 'Limpia Vidrios', price: 7, description: "Vidrios TRansparentes."},
{id: 4, name: 'Quira Grasa', price: 8},
{id: 5, name: 'Perfumina', price: 2, description: "olor a campo."}
]

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}
