import routes from "./routes";
export default (app, apiBase, io) => {
    app.use(apiBase, routes)
}  