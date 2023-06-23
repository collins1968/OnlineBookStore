import { Overview } from "./Overview";
import { Sidebar } from "./sidebar";
import './BooksOverview.css'
import Footer from "../Footer";
import Header from "../Header";

const BooksOverview = () => {
    return (
        <div className="Overview">
            <Header />
            <Sidebar />
            <Overview />
            <Footer />
            
        </div>
    )
}

export default BooksOverview;