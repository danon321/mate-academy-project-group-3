import { Calculator } from '../components/Calculator/Calculator';
import { Services } from '../components/Services/Services';
import Members from './Members/Members';

export function MainPage() {
  return (
    <div className="main_page">
      <Calculator />
      <Services />
      <Members />
    </div>
  );
}
