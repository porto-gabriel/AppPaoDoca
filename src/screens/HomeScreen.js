import {
  View,
  Text,
  Pressable,
} from 'react-native';

import styles from '../styles/homeStyles';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Gestão PãoDoca
      </Text>

      <View style={styles.menu}>

        <Pressable
          style={styles.card}
          onPress={() => router.push('/estoque')}
      >
          <Text style={styles.cardTitle}>
            Estoque
          </Text>

          <Text style={styles.cardDescription}>
            Consultar e gerenciar produtos
          </Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.cardTitle}>
            Pedidos
          </Text>

          <Text style={styles.cardDescription}>
            Acompanhar pedidos realizados
          </Text>
        </Pressable>

        <Pressable 
          style={styles.card}
          onPress={() => router.push('/entrega')}
        >
          <Text style={styles.cardTitle}>
            Entregas
          </Text>

          <Text style={styles.cardDescription}>
            Visualizar entregas previstas
          </Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.cardTitle}>
            Cronômetro
          </Text>

          <Text style={styles.cardDescription}>
            Controle de tempo de preparo
          </Text>
        </Pressable>

      </View>

    </View>
  );
}