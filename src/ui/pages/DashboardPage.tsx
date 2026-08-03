import Header from "../components/common/Header/Header";
import DashboardIntro from "../components/dashboard/DashboardIntro/DashboardIntro";
import StatsSection from "../components/dashboard/StatsSection/StatsSection";
import ApplicationForm from "../components/dashboard/ApplicationForm/ApplicationForm";
import useApplications from "../hooks/useApplications";
import ApplicationsList from "../components/dashboard/ApplicationsList/ApplicationsList";

export default function DashboardPage() {
  const { applications, addApplication } = useApplications();
  
  return (
     <>
      <Header />

    <main>
      <DashboardIntro />
      <StatsSection />
      <ApplicationForm addApplication={addApplication} />
      <ApplicationsList
  applications={applications}
/>
    </main>
    </>
  );
}