import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          isSelected={selected === item.id}
          onPress={() => onSelect(item.id)}
        />
      )}
      contentContainerStyle={styles.content}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
