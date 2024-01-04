import React, { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    const [close, setClose] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setClose(true);
            } else {
                setClose(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="main">
            <Header setClose={setClose} />
            <Sidebar close={close} />
            <div className={close ? 'section close' : 'section'}>
                <div>{<Outlet />}</div>
            </div>
        </div>
    );
};
