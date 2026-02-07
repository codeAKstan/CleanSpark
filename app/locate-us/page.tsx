import StoreLocator from "@/components/locate-us/StoreLocator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Locator | CleanSpark",
  description: "Find your nearest CleanSpark experience center and service hubs.",
};

export default function LocateUsPage() {
  return (
    <main className="pt-20">
      <StoreLocator />
    </main>
  );
}
