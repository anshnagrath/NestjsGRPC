import { Observable } from 'rxjs';
export interface IGrpcService {
    decodeHeroName(encodedName: IEncodedName): Observable<any>;
}
interface IEncodedName {
    data: string;
}
export {};
