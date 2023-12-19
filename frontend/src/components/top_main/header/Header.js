import TopHeader from "./top_header/TopHeader"
import Menu from "./Menu"
import Line from "./Line";


function Header() {
    return(
        <div id="header">
            <TopHeader />
            <Line />
            <Menu />
        </div>
    );
}

export default Header;