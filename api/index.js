/**
 * Initilize all api verions according to application release
 **/
import v1 from "./v1"
export default (app, apiBase, io) => {
    v1(app, `${apiBase}/v1`, io)
}
