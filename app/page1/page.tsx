import { Anchor } from '@/components/anchor/Anchor';
import { PageTransition } from '@/components/page-transition/PageTransition';

const Page1 = () => {
  return (
    <>
      <PageTransition pageTitle="Page 1" />
      <main className="page-center">
        Page 1<Anchor href="/">To Home</Anchor>
      </main>
    </>
  );
};

export default Page1;
