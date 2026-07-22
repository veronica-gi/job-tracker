import Header from "../components/common/Header/Header";
import DashboardIntro from "../components/dashboard/DashboardIntro/DashboardIntro";
import StatsSection from "../components/dashboard/StatsSection/StatsSection";


export default function DashboardPage() {
  return (
     <>
      <Header />

    <main>
      <DashboardIntro />
      <StatsSection />
      
    </main>
    </>
  );
}