import { ReactElement } from "react";

interface SkillsProps {
    isToApplyBlur: boolean
}

export const SkillsPage = (props: SkillsProps): ReactElement => {
    return (
        <div id="skills-page" className={props.isToApplyBlur ? 'page-blur' : ''}>
            <div className="top-container">
                <div className="title-container">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="card-list">
                <div className="card">
                    <h1>Angular</h1>
                    <ul>
                        <li>RxJs</li>
                        <li>NgRx</li>
                        <li>Forms Control</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>React</h1>
                    <ul>
                        <li>Hooks</li>
                        <li>Redux</li>
                        <li>ROuter</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>JavaScript</h1>
                    <ul>
                        <li>TypeScript</li>
                        <li>NodeJS</li>
                        <li>Lodash</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>Software Testing</h1>
                    <ul>
                        <li>E2E Tests with Cypress</li>
                        <li>Unit tests with Karma & Jasmine</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>Programming Paradigms</h1>
                    <ul>
                        <li>Functional programming</li>
                        <li>Objected oriented programming</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>Styling</h1>
                    <ul>
                        <li>CSS and SCSS</li>
                        <li>CSS animations</li>
                        <li>Angular Material & Bootstrap</li>
                    </ul>
                </div>
                <div className="card">
                    <h1>Others</h1>
                    <ul>
                        <li>Agile scrum</li>
                        <li>Clean code</li>
                        <li>Git control</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}