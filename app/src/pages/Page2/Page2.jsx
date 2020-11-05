import React, {useState, useEffect} from 'react';
import Tile from '../../components/Tile/Tile';
import './Page2.css';

const Page2 = () => {
    const [sectionsLoaded, setSectionsLoaded] = useState(false);
    const [tiles, setTiles] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('https://voda-react-assessment.herokuapp.com/page')
            .then(res => res.json())
            .then(result => {
                setSectionsLoaded(true);
                result.map(section => {
                    setDescription(section.description);
                    setTiles(section.tiles);
                });
            });
    }, []);

    return (
        <div className="home-container">
            <div className="home-header">
                <div className="col-12 home-title">{sectionsLoaded && <h2>{description}</h2>}</div>
            </div>

            <div className="col-12 page2-tiles">
                <div className="col-8">
                    {sectionsLoaded &&
                        tiles &&
                        tiles.map(tile => (
                            <Tile
                                icon={tile.icon}
                                key={tile.title}
                                title={tile.title}
                                description={tile.description}
                                link={tile.link}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

Page2.propTypes = {};

export default Page2;
