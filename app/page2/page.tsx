import { Anchor } from '@/components/anchor/Anchor';
import { PageTransition } from '@/components/page-transition/PageTransition';

const Page2 = () => {
  return (
    <>
      <PageTransition pageTitle="Page 2" />
      <main className="page-center">
        Page 2<Anchor href="/">To Home</Anchor>
      </main>
    </>
  );
};

export default Page2;
