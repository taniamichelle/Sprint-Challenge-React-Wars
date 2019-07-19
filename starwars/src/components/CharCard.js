import React from 'react';
import { Card } from 'semantic-ui-react';


function CharCard(props) {
    //console.log(props);
    return (
        <Card className='char-card'>
            <Card.Content>
                {/* <div className='char-card' > */}
                <h2>{props.name}</h2>
                <div className='gender'>{props.gender}</div>
                <div className='age'>{props.birth_year}</div>
                <div className='height'>{props.height}</div>
                <div className='mass'>{props.mass}</div>
                <div className='hair'>{props.hair_color}</div>
                <div className='eyes'>{props.eye_color}</div>
                {/* </div> */}
            </Card.Content>
        </Card>
    );
}

export default CharCard;