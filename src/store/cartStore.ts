import { create } from "zustand";
import type { Bag } from "../types/bag";
import { persist } from "zustand/middleware";

type BagStore = {
  items: Bag[];
  clearCart: () => void;
  addItem: (item: Bag) => void;
  addQuantityToItem: (itemData: Bag) => void;
  reduceItemQuantity: (itemData: Bag) => void;
  removeItem: (itemData: Bag) => void;
};

export const useBag = create<BagStore>()(
  persist(
    (set) => ({
      items: [],
      clearCart: () => set({ items: [] }),
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      addQuantityToItem: (data) => {
        console.log(`add quantity for ${data}`);

        set((state) => ({
          items: state.items.map((item) =>
            item.id === data.id &&
            item.color === data.color &&
            item.size === data.size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      },

      reduceItemQuantity: (data) => {
        console.log(`reduce quantity for ${data}`);
        set((state) => ({
          items: state.items.map((item) =>
            item.id === data.id &&
            item.color === data.color &&
            item.size === data.size
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        }));
      },

      removeItem: (data) => {
        console.log(data.color);
        console.log(
          `remove item ${"color:" + data.color + "id:" + data.id + "size:" + data.size + "quantity:" + data.quantity}`,
        );
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === data.id &&
                item.color === data.color &&
                item.size === data.size
              ),
          ),
        }));
      },
    }),
    {
      name: "bag-items",
      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
