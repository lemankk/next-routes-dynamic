import Route from "./Route";
import { DynamicRouteProps } from "./types";
export declare type RequestHandlerQueryCallbackParams = {
    route: Route;
    query: any;
    req: any;
};
export declare type RequestHandlerQueryCallback = (params: RequestHandlerQueryCallbackParams) => any;
export declare class Registry {
    private _routes;
    get routes(): Route[];
    constructor();
    createOption(name: string | any, pattern?: string, page?: string): any;
    /**
     *
     * @param name
     * @param pattern
     * @param page
     */
    add(name: DynamicRouteProps | string, pattern?: string, page?: string): this;
    /**
     *
     * @param name
     * @param pattern
     * @param page
     */
    set(name: DynamicRouteProps | string, pattern?: string, page?: string): this;
    findByName(name: string): Route | null;
    match(url: string): any;
    findAndGetUrls(nameOrUrl: string, params?: {}): {
        route: Route;
        urls: {
            as: any;
            href: string;
        };
        byName: boolean;
    } | {
        route: any;
        urls: {
            href: any;
            as: string;
        };
        byName: boolean;
    };
    /**
     * Provide the handler for server-side
     * for the path request (IncomingMessage) handling
     * @param app
     * @param customHandler
     */
    getRequestHandler(app: any, customHandler?: any): (req: any, res: any, queryHandler?: RequestHandlerQueryCallback | null) => void;
}
export default Registry;
//# sourceMappingURL=Registry.d.ts.map