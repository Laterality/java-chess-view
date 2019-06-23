export default class BoardStateDto {
    public static fromJson(json: any): BoardStateDto {
        return new BoardStateDto(
            json.id,
            json.gameSessionId,
            json.type,
            json.coordX,
            json.coordY,
        );
    }

    private _id: number;
    private _sessionId: number;
    private _type: string;
    private _coordX: string;
    private _coordY: string;

    private constructor(id: number, sessionId: number, type: string, coordX: string, coordY: string) {
        this._id = id;
        this._sessionId = sessionId;
        this._type = type;
        this._coordX = coordX;
        this._coordY = coordY;
    }

    public get id() { return this._id; }
    public get sessionId() { return this._sessionId; }
    public get type() { return this._type; }
    public get coordX() { return this._coordX; }
    public get coordY() { return this._coordY; }
}