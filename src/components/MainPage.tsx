import { Calculator } from '../components/Calculator/Calculator';
import { Services } from '../components/Services/Services';

export function MainPage() {
  return (
    <div className="main_page">
      <Calculator />
      <Services />
    </div>
  );
}
