import type { Product } from "../types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockData } from "../fakeData/data";

type SavedStore = {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemData: Product) => void;
};

export const useSaved = create<SavedStore>()(
  persist(
    (set) => ({
      items: mockData.filter((item) => item.isFavorite),

      addItem: (item) =>
        set((state) => ({
          items: state.items.some((saved) => saved.id === item.id)
            ? state.items
            : [...state.items, item],
        })),

      removeItem: (data) => {
        set((state) => ({
          items: state.items.filter((item) => !(item.id === data.id)),
        }));
      },
    }),
    {
      name: "saved-items",
      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
