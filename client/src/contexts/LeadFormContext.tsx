import { createContext, useContext, useState } from "react";
import { LeadFormModal } from "@/components/LeadFormModal";

interface LeadFormContextType {
  openLeadForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => {
    setIsOpen(true);
  };

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      {children}
      <LeadFormModal open={isOpen} onOpenChange={setIsOpen} />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (context === undefined) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
}
