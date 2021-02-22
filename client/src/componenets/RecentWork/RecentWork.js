import React from 'react';

import './RecentWork.css';

function RecentWork() {

    return (
        <div id="wrapper">
            <section id="rework">
                <h2>Recent Work</h2>
                <hr />
                <div className="row">
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="https://floating-journey-44508.herokuapp.com/"><img className="image" src="images/studymate.png" alt="" /></a>
                        <h3>StudyMate</h3>
                        <a href="https://github.com/collinlanie12/StudyMate"><p>Github Repository</p></a>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="https://oksimone.github.io/cocktellme/"><img className="image" src="images/cocktellme.png" alt="" /></a>
                        <h3>CockTellMe</h3>
                        <a href="https://oksimone.github.io/cocktellme/"><p>Github Repository</p></a>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="http://project-2-agrc.herokuapp.com/"><img className="image" src="images/musiquery.png" alt="" /></a>
                        <h3>MusiQuery</h3>
                        <a href="https://github.com/collinlanie12/Project_2"><p>Github Repository</p></a>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="https://collinlanie12.github.io/NYT_Search/"><img className="image" src="images/nyt-api-scrape.png" alt="" /></a>
                        <h3>New York Times Scraper</h3>
                        <a href="https://github.com/collinlanie12/NYT_Search"><p>Github Repository</p></a>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="https://collinlanie12.github.io/weather-dashboard/"><img className="image" src="images/weather-dashboard.png" alt="" /></a>
                        <h3>Weather Dashboard</h3>
                        <a href="https://github.com/collinlanie12/weather-dashboard"><p>Github Repository</p></a>
                    </article>
                    <article className="col-6 col-12-xsmall work-item">
                        <a href="https://collinlanie12.github.io/work-day-scheduler/"><img className="image" src="images/work-day-schedular.png" alt="" /></a>
                        <h3>Work Day Schedular</h3>
                        <a href="https://github.com/collinlanie12/work-day-scheduler"><p>Github Repository</p></a>
                    </article>
                </div>
            </section>

        </div>
    );
}

export default RecentWork;