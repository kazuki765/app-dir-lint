"use client";
import { Modal } from "@/components/modal";

export function PokemonModal({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}
