import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Contact = ({ links }) => {

    const [email, linkedin, github] = links;
    const mail = Object.values(email)[0];
    const linked = Object.values(linkedin)[0];
    const git = Object.values(github)[0];

    return (
        <div style={{textAlign:'center', marginBottom:'8em'}}>
            <Button href={mail} color='google plus' style={{margin:'1em'}}>
                <Icon name='envelope' /> Email
            </Button>
            
            <Button href={linked} color='linkedin' style={{margin:'1em'}}>
                <Icon name='linkedin' /> LinkedIn
            </Button>

            <Button href={git} color='black' style={{margin:'1em'}}>
                <Icon name='github' /> GitHub
            </Button>
        </div>
    );
}

export default Contact;