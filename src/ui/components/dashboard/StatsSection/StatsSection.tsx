import StatsCard from "../StatsCard/StatsCard";
import "./StatsSection.css";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <StatsCard title="Applications" value={0} />
      <StatsCard title="Interviews" value={0} />
      <StatsCard title="Offers" value={0} />
      <StatsCard title="Rejected" value={0} />
    </section>
  );
}