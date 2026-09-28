import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

import { useEstoque } from '../contexts/EstoqueContext';
import styles from '../styles/estoqueStyles';

export default function EstoqueScreen() {
  const router = useRouter();

  const { produtos } = useEstoque();

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('todos');

  function obterStatus(produto) {
    if (produto.quantidade === 0) {
      return 'falta';
    }

    if (produto.quantidade <= produto.estoqueMinimo) {
      return 'baixo';
    }

    return 'normal';
  }

  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeBusca = produto.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    const status = obterStatus(produto);

    const correspondeFiltro =
      filtro === 'todos' || status === filtro;

    return correspondeBusca && correspondeFiltro;
  });

  function renderProduto({ item }) {
    const status = obterStatus(item);

    let statusTexto = 'Estoque normal';
    let statusStyle = styles.statusNormal;

    if (status === 'baixo') {
      statusTexto = 'Estoque baixo';
      statusStyle = styles.statusBaixo;
    }

    if (status === 'falta') {
      statusTexto = 'Em falta';
      statusStyle = styles.statusFalta;
    }

    return (
      <Pressable
        style={styles.productRow}
        onPress={() =>
          router.push({
            pathname: '/produto/[id]',
            params: { id: item.id },
          })
        }
      >
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            {item.nome}
          </Text>

          <Text style={statusStyle}>
            {statusTexto}
          </Text>
        </View>

        <Text style={styles.quantity}>
          {item.quantidade} {item.unidade}
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Estoque
      </Text>

      <Text style={styles.subtitle}>
        Controle de produtos
      </Text>

      <TextInput
        style={styles.search}
        placeholder="Buscar produto..."
        value={busca}
        onChangeText={setBusca}
      />

      <View style={styles.filters}>

        <Pressable
          style={
            filtro === 'todos'
              ? styles.filterActive
              : styles.filterButton
          }
          onPress={() => setFiltro('todos')}
        >
          <Text
            style={
              filtro === 'todos'
                ? styles.filterActiveText
                : styles.filterText
            }
          >
            Todos
          </Text>
        </Pressable>

        <Pressable
          style={
            filtro === 'baixo'
              ? styles.filterActive
              : styles.filterButton
          }
          onPress={() => setFiltro('baixo')}
        >
          <Text
            style={
              filtro === 'baixo'
                ? styles.filterActiveText
                : styles.filterText
            }
          >
            Baixo estoque
          </Text>
        </Pressable>

        <Pressable
          style={
            filtro === 'falta'
              ? styles.filterActive
              : styles.filterButton
          }
          onPress={() => setFiltro('falta')}
        >
          <Text
            style={
              filtro === 'falta'
                ? styles.filterActiveText
                : styles.filterText
            }
          >
            Em falta
          </Text>
        </Pressable>

      </View>

      <View style={styles.listHeader}>

        <Text style={styles.listTitle}>
          Produtos
        </Text>

        <View style={styles.quantityHeader}>

          <Pressable
            onPress={() => router.push('/adicionar-item')}
          >
            <Text style={styles.addText}>
              + Adicionar Produto
            </Text>
          </Pressable>

          <Text style={styles.quantityTitle}>
            Quantidade
          </Text>

        </View>

      </View>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum produto encontrado.
          </Text>
        }
      />

    </View>
  );
}