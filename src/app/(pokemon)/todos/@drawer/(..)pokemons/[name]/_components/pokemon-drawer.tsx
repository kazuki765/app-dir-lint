"use client";
import { Drawer } from "@/components/drawer";

export function PokemonDrawer({ children }: { children: React.ReactNode }) {
  return <Drawer title="pokemon">{children}</Drawer>;
}
