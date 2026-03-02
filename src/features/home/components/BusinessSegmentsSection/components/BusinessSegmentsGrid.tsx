import BusinessCard from "./BusinessCard";

interface SegmentItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SegmentsGridProps {
  segments: SegmentItem[];
}

export const BusinessSegmentsGrid: React.FC<SegmentsGridProps> = ({ segments }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pl-4 md:pl-12 lg:pl-16">
    {segments.map((segment, index) => (
      // Pasamos el index para calcular el retraso de la cascada
      <BusinessCard key={segment.id} segment={segment} index={index} />
    ))}
  </div>
);