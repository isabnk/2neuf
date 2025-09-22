// frontend/components/ProductCard.js
import { View, Text, Image, Pressable } from "react-native";

export default function ProductCard({ item }) {
  return (
    <Pressable style={{ backgroundColor: "white", borderRadius: 16, padding: 8, marginBottom: 12, flex: 1 }}>
      <Image source={{ uri: item.cover }} style={{ height: 150, borderRadius: 12 }} />
      <Text style={{ marginTop: 6, fontWeight: "600" }} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={{ color: "#059669", fontWeight: "700" }}>{item.price} {item.currency}</Text>
      <Text style={{ fontSize: 12, opacity: 0.6 }}>{item.city}</Text>
    </Pressable>
  );
}
