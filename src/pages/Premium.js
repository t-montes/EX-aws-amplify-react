import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Premium = () => {
    return (
    <Authenticator>
        {({ signOut }) => {
            return (<div>
                <h1>This is the premium content page</h1>
                <button onClick={signOut}>Sign Out</button>
            </div>);
        }}
    </Authenticator>
    );
}

export default Premium;