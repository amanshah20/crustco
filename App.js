const Header =() =>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"/>
                
            </div>
            <div className="nav-iteam">
                <ul>
                    <li>Home</li>
                    <li> About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
        
        
    );
};
const AppLayout =() =>{
    return (
        <div className="app">
            <Header />
        </div>
    );
};
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);