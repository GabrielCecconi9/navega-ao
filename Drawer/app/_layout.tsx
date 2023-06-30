import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Vermelho",
          title: "Pagina Vermelho",
        }}
      />
      <Drawer.Screen
        name="telaA" 
        options={{
          drawerLabel: "Azul",
          title: "Pagina Azul",
        }}
      />
      <Drawer.Screen
        name="telaB" 
        options={{
          drawerLabel: "Prata",
          title: "Pagina Prata",
        }}
      />
    </Drawer>
  );

}