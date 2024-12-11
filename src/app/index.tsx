import { Step } from "@/components/step";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
      }}
    >
      <Welcome />
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  );
}
