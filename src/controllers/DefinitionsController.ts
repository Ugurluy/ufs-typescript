import store from "@/store/index.ts";
import Definition from "@/models/Definition";


export class DefinitionsController {

    /**
     * @description get all fields
     * @returns {Definition[]} fields
     */
    public getAllDefinitions(): Definition[] {        
        return store.getters.definition;
    }

    /**
     * @description get Definition by id
     * @returns {Definition[]}
     */
    public getById(id: string): Definition {
        return store.getters.definition.find((f: {_id: string}) => f._id === id);
    }

    /**
     * @description search with id in fields
     * @param {string} query: query
     * @returns {Definition[]} fields
     */
    public search(query: string): Definition[] {
        return store.getters.definition.find((f: {_id: string}) => f._id.indexOf(query) > -1);
    }
}

export default new DefinitionsController();