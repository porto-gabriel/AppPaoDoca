import {
  createContext,
  useContext,
  useState,
} from 'react';

const EstoqueContext = createContext();

const produtosIniciais = [
  {
    id: '1',
    nome: 'Pão Francês',
    quantidade: 12,
    unidade: 'kg',
    estoqueMinimo: 15,
    categoria: 'Produto',
  },
  {
    id: '2',
    nome: 'Farinha de Trigo',
    quantidade: 48,
    unidade: 'kg',
    estoqueMinimo: 10,
    categoria: 'Insumo',
  },
  {
    id: '3',
    nome: 'Fermento',
    quantidade: 6,
    unidade: 'un',
    estoqueMinimo: 10,
    categoria: 'Insumo',
  },
  {
    id: '4',
    nome: 'Leite',
    quantidade: 0,
    unidade: 'un',
    estoqueMinimo: 5,
    categoria: 'Insumo',
  },
  {
    id: '5',
    nome: 'Açúcar',
    quantidade: 30,
    unidade: 'kg',
    estoqueMinimo: 10,
    categoria: 'Insumo',
  },
];

export function EstoqueProvider({ children }) {
  const [produtos, setProdutos] = useState(produtosIniciais);

  function adicionarProduto(novoProduto) {
    const produto = {
      ...novoProduto,
      id: Date.now().toString(),
    };

  setProdutos((produtosAtuais) => [
    ...produtosAtuais,
    produto,
  ]);
  }

  function buscarProdutoPorId(id) {
  return produtos.find((produto) => produto.id === id);
  }
  
  return (
    <EstoqueContext.Provider
      value={{
        produtos,
        adicionarProduto,
        buscarProdutoPorId,
      }}
    >
      {children}
    </EstoqueContext.Provider>
  );
}

export function useEstoque() {
  return useContext(EstoqueContext);
}