import Header from "../components/common/Header/Header";
import DashboardIntro from "../components/dashboard/DashboardIntro/DashboardIntro";
import StatsSection from "../components/dashboard/StatsSection/StatsSection";
import ApplicationForm from "../components/dashboard/ApplicationForm/ApplicationForm";

export default function DashboardPage() {
  return (
     <>
      <Header />

    <main>
      <DashboardIntro />
      <StatsSection />
      <ApplicationForm />
    </main>
    </>
  );
}