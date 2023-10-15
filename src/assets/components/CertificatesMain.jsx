import introductionToFrontEndDevelopment from '../images/introduction-to-front-end-development.jpeg';
import versionControl from '../images/version-control.jpeg';
import htmlCssAndJavascriptForWebDevelopers from '../images/html-css-and-javascript-for-web-developers.jpeg';
import htmlAndCssInDepth from '../images/html-and-css-in-depth.jpeg';
import programingWithJavascript from '../images/programming-with-javascript.jpeg';
import reactBasics from '../images/react-basics.jpeg';
import introductionToBackEndDevelopment from '../images/introduction-to-back-end-development.jpeg';
import introductionToDatabasesForBackEndDevelopment from '../images/introduction-to-databases-for-back-end-development.jpeg';
import programmingInPython from '../images/programming-in-python.jpeg';
import djangoWebFramework from '../images/django-web-framework.jpeg';

function CertificatesMain() {
    return (
        <main>
            <div className="cert-heading">
                <h2>Certificates</h2>
            </div>
            <div className="cert-main">
                <div className='introduction-to-front-end-development'>
                    <h3>Introduction to Front-End Development</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={introductionToFrontEndDevelopment} alt="Course certificate for Introduction to Front-End Development by Meta"/>
                </div>
                <div className='version-control'>
                    <h3>Version Control</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={versionControl} alt="Course certificate for Version Control by Meta"/>
                </div>
                <div className='html-css-and-javascript-for-web-developers'>
                    <h3>HTML, CSS, and JavaScript for Web Developers</h3>
                    <h4>By Johns Hopkins University through Coursera</h4>
                    <img src={htmlCssAndJavascriptForWebDevelopers} alt="Course certificate for HTML, CSS, and JavaScript for Web Developers by Meta"/>
                </div>
                <div className='html-and-css-in-depth'>
                    <h3>HTML and CSS in Depth</h3>
                    <h4>By Johns Hopkins University through Coursera</h4>
                    <img src={htmlAndCssInDepth} alt="Course certificate for HTML and CSS in Depth by Meta"/>
                </div>
                <div className='programming-with-javascript'>
                    <h3>Programming With JavaScript</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={programingWithJavascript} alt="Course certificate for Programming With Javascript by Meta"/>
                </div>
                <div className='react-basics'>
                    <h3>React Basics</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={reactBasics} alt="Course certificate for React Basics by Meta"/>
                </div>
                <div className='introduction-to-back-end-development'>
                    <h3>Introduction to Back-End Development</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={introductionToBackEndDevelopment} alt="Course certificate for Introduction to Back-End Development by Meta"/>
                </div>
                <div className='introduction-to-databases-for-back-end-development'>
                    <h3>Introduction to Databases for Back-End Development</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={introductionToDatabasesForBackEndDevelopment} alt="Course certificate for Introduction to Databases for Back-End Development by Meta"/>
                </div>
                <div className='programming-in-python'>
                    <h3>Programming in Python</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={programmingInPython} alt="Course certificate for Programming in Python by Meta"/>
                </div>
                <div className='django-web-framework'>
                    <h3>Django Web Framework</h3>
                    <h4>By Meta through Coursera</h4>
                    <img src={djangoWebFramework} alt="Course certificate for Django Web Framework by Meta"/>
                </div>
            </div>
            <div className='cert-footer'>
                <h2>and still growing...</h2>
            </div>
        </main>
    );
}

export default CertificatesMain;