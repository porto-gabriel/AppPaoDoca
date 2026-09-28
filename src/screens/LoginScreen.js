import {
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

import styles from '../styles/loginStyles';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gestão PãoDoca
      </Text>

      <Text style={styles.subtitle}>
        Estoque • Pedidos • Entregas
      </Text>

      <Text style={styles.label}>
        Usuário
      </Text>

      <TextInput
        placeholder="Digite seu usuário"
        style={styles.input}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.passwordInput}
      />

      <Pressable
        style={styles.button}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </Pressable>
    </View>
  );
}