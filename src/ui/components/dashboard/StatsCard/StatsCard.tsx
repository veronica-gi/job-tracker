import "./StatsCard.css";

interface StatsCardProps {
  title: string;
  value: number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <article className="stats-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </article>
  );
}