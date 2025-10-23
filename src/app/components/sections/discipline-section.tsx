import React from "react";
import * as LucideIcons from "lucide-react"; // Import all icons
import { DISCIPLINE_ITEMS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const DisciplineSection = () => {
  const IconComponent = ({ name }: { name: string | undefined }) => {
    if (!name || !(name in LucideIcons)) {
      return <LucideIcons.CheckSquare className="w-8 h-8 text-primary" />; // Default icon
    }
    const Icon = (LucideIcons as any)[name];
    return <Icon className="w-8 h-8 text-primary" />;
  };
  return (
    <section
      id="discipline"
      className="container max-w-5xl mx-auto px-4 py-20 md:py-28 bg-muted/30 dark:bg-card/50 rounded-lg my-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Discipline and Inner Strength
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          The foundation for sustainable development and long-term vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DISCIPLINE_ITEMS.map((item) => (
          <Card
            key={item.id}
            className="text-center bg-background/50 dark:bg-background/80"
          >
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <IconComponent name={item.icon} />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DisciplineSection;
