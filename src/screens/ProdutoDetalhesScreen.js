import {
  View,
  Text,
  Pressable,
} from 'react-native';

import {
  useLocalSearchParams,
  useRouter,
} from 'expo-router';

import { useEstoque } from '../contexts/EstoqueContext';
import styles from '../styles/produtoDetalhesStyles';

export default function ProdutoDetalhesScreen() {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const { buscarProdutoPorId } = useEstoque();

  const produto = buscarProdutoPorId(id);

  function obterStatus() {
    if (!produto) {
      return '';
    }

    if (produto.quantidade === 0) {
      return 'Em falta';
    }

    if (produto.quantidade <= produto.estoqueMinimo) {
      return 'Estoque baixo';
    }

    return 'Estoque normal';
  }

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Produto não encontrado
        </Text>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>
            Voltar
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {produto.nome}
      </Text>

      <Text style={styles.subtitle}>
        Detalhes do produto
      </Text>

      <View style={styles.infoBox}>

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Categoria
          </Text>

          <Text style={styles.value}>
            {produto.categoria}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Quantidade atual
          </Text>

          <Text style={styles.value}>
            {produto.quantidade} {produto.unidade}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Estoque mínimo
          </Text>

          <Text style={styles.value}>
            {produto.estoqueMinimo} {produto.unidade}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Status
          </Text>

          <Text style={styles.value}>
            {obterStatus()}
          </Text>
        </View>

      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>
          Alterar quantidade
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>
          Editar item
        </Text>
      </Pressable>

      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>
          Excluir item
        </Text>
      </Pressable>

      <Pressable
        style={styles.backButton}
        onPress={() => router.replace('/estoque')}
      >
        <Text style={styles.backButtonText}>
          Voltar
        </Text>
      </Pressable>

    </View>
  );
}