import React from 'react';

import './RecentWork.css';

function RecentWork() {

    return (
        <div id="wrapper">
            <section id="rework">
                <h2>Recent Work</h2>
                <div className="row">
                    <article className="col-6 col-12-xsmall">
                        <img src="images/me.jpg" alt="" />
                        <h3>Hello Hello Hello</h3>
                        <p>bye bye bye</p>
                    </article>
                    <article className="col-6 col-12-xsmall">
                        <img src="images/me.jpg" alt="" />
                        <h3>Hello Hello Hello</h3>
                        <p>bye bye bye</p>
                    </article>
                    <article className="col-6 col-12-xsmall">
                        <img src="images/me.jpg" alt="" />
                        <h3>Hello Hello Hello</h3>
                        <p>bye bye bye</p>
                    </article>
                </div>
            </section>

        </div>
    );
}

export default RecentWork;