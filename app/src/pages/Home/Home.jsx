import React, {useState, useEffect} from 'react';
import Tab from '../../components/Tabs/Tab';
import Slider from '../../components/Slider/Slider';
import Form from '../../components/Form/Form';
import './Home.css';

const Home = () => {
    const [sectionsLoaded, setSectionsLoaded] = useState(false);
    const [sections, setSections] = useState([]);
    const [description, setDescription] = useState('');
    const [activeTab, setActiveTab] = useState('Section 1');

    useEffect(() => {
        fetch('https://voda-react-assessment.herokuapp.com/home')
            .then(res => res.json())
            .then(
                result => {
                    setSectionsLoaded(true);
                    result.map(section => {
                        setDescription(section.description);
                        setSections(section.sections);
                    });
                },
                error => {},
            );
    }, []);

    return (
        <div className="home-container">
            <div className="home-header">
                <div className="col-12 home-title">{sectionsLoaded && <h2>{description}</h2>}</div>
                <div className="home-tabs">
                    {sectionsLoaded && (
                        <>
                            <Tab
                                activeTab={activeTab}
                                key="Section 1"
                                label="Section 1"
                                styles="noRouter"
                                noRouter
                                onClick={tab => setActiveTab(tab)}
                            />
                            <Tab
                                activeTab={activeTab}
                                key="Section 2"
                                label="Section 2"
                                styles="noRouter"
                                noRouter
                                onClick={tab => setActiveTab(tab)}
                            />{' '}
                        </>
                    )}
                </div>
            </div>

            {activeTab === 'Section 1' && (
                <div>
                    <div className="col-8 home-description">
                        {sections && sections[1] && <h3> {sections[0].title}</h3>}
                    </div>
                    <div className="col-12 home-tiles">
                        <div className="col-8 flex-container">
                            {sectionsLoaded &&
                                sections &&
                                sections[0] &&
                                sections[0].images.map(image => (
                                    <div key={image.title} className="col-4">
                                        <img src={image.img} className="image" title={image.title} alt="altimage" />
                                        <span className="image-title">{image.title}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'Section 2' && (
                <div>
                    <div className="col-8 home-description">
                        {sectionsLoaded && sections && sections[1] && <h3> {sections[1].title}</h3>}
                    </div>

                    <div className="col-8 section2">
                        <div className="col-6">
                            <div className="section2-title">
                                {sectionsLoaded && sections && sections[1] && sections[1].graphText}
                            </div>
                            {sectionsLoaded &&
                                sections &&
                                sections[1] &&
                                sections[1].stats.map((stat, index) => (
                                    <div key={stat.title}>
                                        <Slider title={stat.title} index={index} amount={stat.amount} />
                                    </div>
                                ))}
                        </div>
                        <div className="col-6">
                            <div className="section2-title center">
                                {sectionsLoaded && sections && sections[1] && sections[1].formText}
                            </div>
                            <div className="section2-subtitle center">
                                We work with ecosystem leaders, corporations and startups worldwide. How can we help you
                            </div>
                            {sectionsLoaded && sections && sections[1] && sections[1].formLabels && (
                                <div>
                                    <Form formLabels={sections[1].formLabels} buttonText={sections[1].formLabels} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
