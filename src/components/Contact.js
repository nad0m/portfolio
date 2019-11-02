import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Contact = () => {

    return (
        <div style={{textAlign:'center', marginBottom:'8em'}}>
            <Button color='google plus' style={{margin:'1em'}}>
                <Icon name='envelope' /> Email
            </Button>
            
            <Button color='linkedin' style={{margin:'1em'}}>
                <Icon name='linkedin' /> LinkedIn
            </Button>

            <Button color='black' style={{margin:'1em'}}>
                <Icon name='github' /> GitHub
            </Button>
        </div>
    );
}

export default Contact;