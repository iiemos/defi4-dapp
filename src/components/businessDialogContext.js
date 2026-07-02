import { createContext, useContext } from "react";

export const BusinessDialogContext = createContext(null);

export function useBusinessDialog() {
  const context = useContext(BusinessDialogContext);

  if (!context) {
    throw new Error("useBusinessDialog must be used within BusinessDialogProvider");
  }

  return context;
}
