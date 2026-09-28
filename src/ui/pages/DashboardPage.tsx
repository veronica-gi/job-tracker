import Header from "../components/common/Header/Header";
import DashboardIntro from "../components/dashboard/DashboardIntro/DashboardIntro";
import StatsSection from "../components/dashboard/StatsSection/StatsSection";
import ApplicationForm from "../components/dashboard/ApplicationForm/ApplicationForm";
import useApplications from "../hooks/useApplications";
import ApplicationsList from "../components/dashboard/ApplicationsList/ApplicationsList";

export default function DashboardPage() {
  const { applications, addApplication, deleteApplication, updateApplication, } = useApplications();
  
  return (
     <>
      <Header />

    <main>
      <DashboardIntro />
      <StatsSection applications={applications} />
      <ApplicationForm addApplication={addApplication} />
      <ApplicationsList
  applications={applications}
  deleteApplication={deleteApplication}
  updateApplication={updateApplication}
/>
    </main>
    </>
  );
}