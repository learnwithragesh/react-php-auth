import { Get } from '../utils/Network';

export default function Gett() {
    let getSession = () => {
        Get("https://strackit.com/test/session/get.php", (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        });
    }

    return (
        <button onClick={() => getSession()}>
            Get
        </button>
    );
}