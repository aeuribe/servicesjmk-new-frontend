import { DirectorCard } from "./DirectorCard";

interface DirectorItem {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}



export const DirectorsGrid = ({
  directors,
  currentIndex,
}: {
  directors: DirectorItem[];
  currentIndex: number;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-12 lg:pl-16">
    {directors.map((director, index) => (
      <DirectorCard
        key={director.id}
        director={director}
        active={index === currentIndex}
      />
    ))}
  </div>
);
