import Discount from 'src/components/Discount';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Instagram from 'src/components/Instagram';
import Services from 'src/components/Services';
import Trending from 'src/components/Trending';

interface Props {
  children?: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Trending />
      <Discount />
      <Services />
      <Instagram />
      <Footer />
    </div>
  );
}

export default MainLayout;
