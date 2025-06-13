export interface Sale {
  mes: string;
  quantidade: number;
}

export interface ProductSales {
  produto: string;
  vendas: Sale[];
}
