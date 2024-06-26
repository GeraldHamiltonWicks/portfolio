import { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfileImage from '../../assets/images/profile.png';

interface HomeProps {
    isToApplyBlur: boolean,
    setPage: (page: 'home' | 'projects' | 'skills' | 'contact') => void
}

export const HomePage = (props: HomeProps): ReactElement => {
    return (
        <div id="home-page" className={props.isToApplyBlur ? 'page-blur' : ''}>
            <div className="top-container">
                <LazyLoadImage src={ProfileImage} alt="profile" />
            </div>
            <div className="bottom-container">
                <h1>Gerald Wicks</h1>
                <h3>Web Developer</h3>
                <hr/>
                <p>
                    As Full Stack Engineer with a robust background in React, Next, Node, JavaScript and TypeScript, with a focus on frontend development, I bring <bold>4 years of experience</bold> in crafting scalable web applications. Additionally, I have 2 years of <bold>experience collaborating with global teams</bold>, conducting communication in English. 
                </p>
                <a onClick={() => props.setPage('projects')}>Show more</a>            
            </div>
        </div>
    );
}
