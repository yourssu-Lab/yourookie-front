import { createFileRoute } from '@tanstack/react-router';
import FirstSection from '@/routes/-components/FirstSection/FirstSection.tsx';
import SecondSection from '@/routes/-components/SecondSection/SecondSection.tsx';
import ThirdSection from '@/routes/-components/ThirdSection/ThirdSection.tsx';
import LastSection from '@/routes/-components/LastSection/LastSection.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </>
  );
}
