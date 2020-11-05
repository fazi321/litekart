<template>
   <section class="developer-main">
        <div class="developer-container">
            <div class="dev-head">
                <h2>For <span>Developers</span></h2>
            </div>
            <div class="dev-cards">
                <div class="card">
                    <div class="card-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 feather feather-code" style="color: rgb(0, 0, 0);"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <h3>API Reference</h3>
                    <p>Discover our RESTful API in detail, with example payloads, responses</p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 feather feather-watch" style="color: rgb(36, 180, 126);"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                    </div>
                    <h3>Getting Started</h3>
                    <p>Installation instructions to get started with Litekart under 2 minutes</p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 feather feather-book" style="color: rgb(50, 151, 211);"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <h3>Guide</h3>
                    <p>This guide describes concepts of Litekart to get you familiar</p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 feather feather-settings" style="color: rgb(143, 110, 213);"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </div>
                    <h3>Settings</h3>
                    <p>Settings that you can twick to suit your personal customization need</p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 feather feather-activity" style="color: rgb(227, 159, 72);"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <h3>Development History</h3>
                    <p>A small walkthrough - evolution of Litekart from 2014 to 2020</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'ForDeveloper',
    }
</script>

<style scoped>
.developer-main {
    width: 100%;
}

.developer-main .developer-container {
    display: flex;
    flex-direction: column;
    width: 1266px;
    margin: 0 auto;
}

.developer-main .developer-container .dev-head {
    margin-top: 32px;
    margin-bottom: 64px
}

.developer-main .developer-container .dev-head h2 {
    text-align: center;
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
}

.developer-main .developer-container .dev-head h2 span {
    background-image: linear-gradient(90deg, #fa709a 0, #fee140);
    background-repeat: no-repeat;
    background-size: 100% .2em;
    background-position: 0 100%;
    transition: background-size .25s ease-in;
    padding-bottom: 2px;
}

.developer-main .developer-container .dev-cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.developer-main .developer-container .dev-cards .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
    padding: 40px;
    border-radius: .5rem;
    border: 1px solid #e2e8f0;
    width: 24%;
    margin: 15px;
}

.developer-main .developer-container .dev-cards .card h3 {
    font-size: 1.875rem;
    margin: 0;
    letter-spacing: .05em;
    color: #2d3754;
    line-height: 1.8;
    font-weight: 700;
    text-align: center;
}

.developer-main .developer-container .dev-cards .card p {
    margin: 0;
    letter-spacing: .05em;
    margin-top: .75rem;
    font-size: .875rem;
    text-align: center;
    color: #1a202c;
    line-height: 1.5;
}
</style>