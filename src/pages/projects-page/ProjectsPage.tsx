import { ReactElement } from "react";
import { Icon, Tooltip } from "../../components";
import LoginSystemImage from '../../assets/images/login-system.png';
import BahiaCruiseImage from '../../assets/images/bahiacruise.png';
import EcommerceImage from '../../assets/images/ecommerce.png';
import TindogImage from '../../assets/images/tindog.png';
import KeeperAppImage from '../../assets/images/keeper.png';
import PortfolioImage from '../../assets/images/portfolio.png';

interface ProjectstProps {
    isToApplyBlur: boolean
}

export const ProjectsPage = (props: ProjectstProps): ReactElement => {
    return (
        <div id="projects-page" className={props.isToApplyBlur ? 'page-blur' : ''}>
            <div className="top-container">
                <div className="title-container">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="card-list">
                <div className="card">
                    <div className="image-container">
                        <a href="https://geraldhamiltonwicks.github.io/login-system/" target="_blank" rel="noreferrer">
                        <img src={LoginSystemImage} alt="project-login-system" />
                        </a>
                    </div>
                    
                    <h4>Project #1</h4>
                    <h2>Login System</h2>
                    <h3>This is a login system, with email verification step to create an account. After login, you can save some notes there.</h3>
                    <div className="bottom-container">
                        <a href="https://geraldhamiltonwicks.github.io/login-system/" target="_blank" rel="noreferrer">
                            View
                        </a>
                        <div className="icons">
                            <Tooltip text="Node">
                                <Icon iconSelector="node" />
                            </Tooltip>
                            <Tooltip text="React">
                                <Icon iconSelector="react" />
                            </Tooltip>
                            <Tooltip text="Saas">
                                <Icon iconSelector="saas" />
                            </Tooltip>
                            <Tooltip text="TypeScript">
                                <Icon iconSelector="typescript" />
                            </Tooltip>  
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <a href="https://www.bahiacruise.com.br/" target="_blank" rel="noreferrer">
                        <img src={BahiaCruiseImage} alt="bahia-cruise" />
                        </a>
                    </div>
                    
                    <h4>Project #2</h4>
                    <h2>Freelancer website</h2>
                    <h3>TThis freelancer was made for a boat company with the help of CMS and some basics HTML, CSS and JavaScript.</h3>
                    <div className="bottom-container">
                        {/* TODO: create a helper to navigate to some page */}
                        <a href="https://www.bahiacruise.com.br/" target="_blank" rel="noreferrer">
                            View
                        </a>
                        <div className="icons">
                            <Tooltip text="HTML">
                                <Icon iconSelector="html" />
                            </Tooltip>
                            <Tooltip text="CSS">
                                <Icon iconSelector="css" />
                            </Tooltip>
                            <Tooltip text="JavaScript">
                                <Icon iconSelector="javascript" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <a href="https://kyn8b.csb.app/" target="_blank" rel="noreferrer">
                        <img src={EcommerceImage} alt="e-commerce" />
                        </a>
                    </div>
                    
                    <h4>Project #3</h4>
                    <h2>E-commerce</h2>
                    <h3>I worked with Angular to do this e-commerce. The cart items is integrated with whatsapp (mobile app).</h3>
                    <div className="bottom-container">
                        {/* TODO: create a helper to navigate to some page */}
                        <a href="https://kyn8b.csb.app/" target="_blank" rel="noreferrer">
                            View
                        </a>
                        <div className="icons">
                            <Tooltip text="Angular">
                                <Icon iconSelector="angular" />
                            </Tooltip>
                            <Tooltip text="Saas">
                                <Icon iconSelector="saas" />
                            </Tooltip>
                            <Tooltip text="TypeScript">
                                <Icon iconSelector="typescript" />
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-container">
                        <a href="https://geraldhamiltonwicks.github.io/portfolio_web_development/TinDog/index.html" target="_blank" rel="noreferrer">
                        <img src={TindogImage} alt="tindog" />
                        </a>
                    </div>
                    
                    <h4>Project #4</h4>
                    <h2>Single page website</h2>
                    <h3>This is a single page application, that’s a copy of the tinder, but for dogs.</h3>
                    <div className="bottom-container">
                        {/* TODO: create a helper to navigate to some page */}
                        <a href="https://geraldhamiltonwicks.github.io/portfolio_web_development/TinDog/index.html" target="_blank" rel="noreferrer">
                            View
                        </a>
                        <div className="icons">
                            <Tooltip text="HTML">
                                <Icon iconSelector="html" />
                            </Tooltip>
                            <Tooltip text="CSS">
                                <Icon iconSelector="css" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <a href="https://4zrnb.csb.app/" target="_blank" rel="noreferrer">
                        <img src={KeeperAppImage} alt="keeper" />
                        </a>
                    </div>
                    
                    <h4>Project #5</h4>
                    <h2>Keeper App</h2>
                    <h3>This is a copy of Keeper App, where you can save your notes.</h3>
                    <div className="bottom-container">
                        {/* TODO: create a helper to navigate to some page */}
                        <a href="https://4zrnb.csb.app/" target="_blank" rel="noreferrer">
                            View
                        </a>
                        <div className="icons">
                            <Tooltip text="React">
                                <Icon iconSelector="react" />
                            </Tooltip>
                            <Tooltip text="JavaScript">
                                <Icon iconSelector="javascript" />
                            </Tooltip>
                            <Tooltip text="CSS">
                                <Icon iconSelector="css" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="card card-portfolio">
                    <div className="image-container">
                        <a rel="noreferrer">
                        <img src={PortfolioImage} alt="portfolio" />
                        </a>
                    </div>
                    
                    <h4>Project #6</h4>
                    <h2>Portfolio</h2>
                    <h3>The current portfolio was made with react and also have connection with a node backend.</h3>
                    <div className="bottom-container">
                        {/* TODO: create a helper to navigate to some page */}
                        <div className="icons">
                            <Tooltip text="Node">
                                <Icon iconSelector="node" />
                            </Tooltip>
                            <Tooltip text="React">
                                <Icon iconSelector="react" />
                            </Tooltip>
                            <Tooltip text="Saas">
                                <Icon iconSelector="saas" />
                            </Tooltip>
                            <Tooltip text="TypeScript">
                                <Icon iconSelector="typescript" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}