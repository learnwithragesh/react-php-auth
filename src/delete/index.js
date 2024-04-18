import { Get } from '../utils/Network';

export default function Delete() {
    let deleteSession = () => {
        Get("https://strackit.com/test/session/delete.php", (data) => {
            console.log(data);
        }, (e) => {
            console.log(e);
        });
    }

    return (
        <button onClick={() => deleteSession()}>
            Delete
        </button>
    );
}