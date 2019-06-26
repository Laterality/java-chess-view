import Axios, { AxiosPromise } from 'axios';

export default class Request {
    public static getSessionList(): AxiosPromise {
        return Axios.get(this.API_BASE_URL + '/sessions');
    }

    public static getGame(sessionId: string): AxiosPromise {
        return Axios.get(this.API_BASE_URL + `/session/${sessionId}`);
    }

    public static getMovable(sessionId: string, from: string): AxiosPromise {
        return Axios.get(this.API_BASE_URL + `/game/movable?sessionId=${sessionId}&from=${from}`);
    }

    public static movePiece(sessionId: string, from: string, to: string) {
        return Axios.put(this.API_BASE_URL + `/game/move`, {
            sessionId,
            from,
            to,
        });
    }

    public static getScore(sessionId: string) {
        return Axios.get(this.API_BASE_URL + `/game/score?sessionId=${sessionId}`);
    }

    public static endGame(sessionId: string) {
        return Axios.post(this.API_BASE_URL + `/game/end?sessionId=${sessionId}`);
    }

    public static createSession(title: string) {
        return Axios.post(this.API_BASE_URL + `/session`, {
            title,
        });
    }

    private static readonly API_BASE_URL = 'http://localhost:4567/api';
}
