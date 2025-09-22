import { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { api } from "../../lib/api";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/listings").then((res) => setItems(res.data.items ?? []));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 12 }}>2neuf</Text>
        <FlatList
          data={items}
          keyExtractor={(i) => i.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
