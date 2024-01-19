import { Calculator } from "./Calculator/Calculator";
import { Services } from "./Services/Services";

export function MainPage() {
    return (
        <div className="main_page">
            <Calculator />
            <Services />
        </div>
    );
}