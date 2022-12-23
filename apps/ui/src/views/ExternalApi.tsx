import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL ?? '';

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`);
      const responseData = await response.json();
      setMessage(responseData.message);
    } catch (error) {
      console.error(error);
      setMessage(`error (${typeof error})`);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${serverUrl}/api/messages/protected-message`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const responseData = await response.json();
      setMessage(responseData.message);
    } catch (error) {
      console.error(error);
      setMessage(`error (${typeof error})`);
    }
  };

  return (
    <div>
      <h1>External API</h1>
      <p>
        You use will use a button to call an external API using an access token, and the API will
        validate it using the API's audience value.
        <br />
        <strong>This route should be protected</strong>.
      </p>
      <div className='btn-group mt-5' role='group' aria-label='External API Requests Examples'>
        <button type='button' className='btn btn-primary' onClick={callApi}>
          Get Public Message
        </button>
        <button type='button' className='btn btn-primary' onClick={callSecureApi}>
          Get Protected Message
        </button>
      </div>

      {message && (
        <div className='mt-5'>
          <h6 className='muted'>Result</h6>
          <div className='container-fluid'>
            <div className='row'>
              <code className='col-12 text-light bg-dark p-4'>
                {JSON.stringify(message, null, 2)}
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
