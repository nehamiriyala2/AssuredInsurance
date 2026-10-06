import type { FAQGroup } from "@/data/faqs";
import { Tabs } from "@/components/ui/Tabs";
import { FAQAccordion } from "./FAQAccordion";

/** FAQ categories as accessible tabs. */
export function FAQTabs({ groups }: { groups: FAQGroup[] }) {
  return <Tabs label="FAQ categories" items={groups.map((g) => ({ id: g.id, label: g.label, content: <FAQAccordion items={g.items} /> }))} />;
}
