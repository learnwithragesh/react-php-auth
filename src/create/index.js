import { Get } from '../utils/Network';

export default function Create() {

    let createSession = () => {
        Get("https://strackit.com/test/session/create.php", (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        });
    }

    return (
        <button onClick={() => createSession()}>
            Create
        </button>
    );
}