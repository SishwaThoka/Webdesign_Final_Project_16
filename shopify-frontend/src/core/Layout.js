import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>

        <div className="shopify-jumbotron">

            <div className="row">
                <div className="col-12">
                    <Menu />
                </div>
            </div>
            <div className="p-4 m-2">
                <h2>{title}</h2>
                <p className="lead">{description}</p>

            </div>
           
           
           
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
