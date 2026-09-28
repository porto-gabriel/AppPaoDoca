import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

import { useEstoque } from '../contexts/EstoqueContext';
import styles from '../styles/adicionarItemStyles';

export default function AdicionarItemScreen() {
  const router = useRouter();

  const { adicionarProduto } = useEstoque();

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [estoqueMinimo, setEstoqueMinimo] = useState('');
  const [categoria, setCategoria] = useState('');

  function salvarProduto() {
    if (
      !nome.trim() ||
      !quantidade.trim() ||
      !unidade.trim() ||
      !estoqueMinimo.trim()
    ) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha nome, quantidade, unidade e estoque mínimo.'
      );

      return;
    }

    const quantidadeNumero = Number(quantidade);
    const estoqueMinimoNumero = Number(estoqueMinimo);

    if (
      Number.isNaN(quantidadeNumero) ||
      Number.isNaN(estoqueMinimoNumero)
    ) {
      Alert.alert(
        'Valor inválido',
        'Quantidade e estoque mínimo precisam ser números.'
      );

      return;
    }

    const novoProduto = {
      nome: nome.trim(),
      quantidade: quantidadeNumero,
      unidade: unidade.trim(),
      estoqueMinimo: estoqueMinimoNumero,
      categoria: categoria.trim() || 'Outros',
    };

    adicionarProduto(novoProduto);

    router.back();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Adicionar item
      </Text>

      <Text style={styles.subtitle}>
        Cadastre um novo produto no estoque
      </Text>

      <Text style={styles.label}>
        Nome do produto
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Farinha de trigo"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Quantidade
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 10"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Text style={styles.label}>
        Unidade
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: kg, un, L"
        value={unidade}
        onChangeText={setUnidade}
      />

      <Text style={styles.label}>
        Estoque mínimo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 5"
        keyboardType="numeric"
        value={estoqueMinimo}
        onChangeText={setEstoqueMinimo}
      />

      <Text style={styles.label}>
        Categoria
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Insumo"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Pressable
        style={styles.saveButton}
        onPress={salvarProduto}
      >
        <Text style={styles.saveButtonText}>
          Salvar item
        </Text>
      </Pressable>

      <Pressable
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelButtonText}>
          Cancelar
        </Text>
      </Pressable>

    </View>
  );
}