import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = { fristName: 'Eduard'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title= "Welcome"
                        user= {loggedIn?.fristName || "Gest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts = {[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
            Homes
        </section>
    )
}

export default Home