import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.RESTAdapter.extend({

    urlForFindAll(modelName/*, snapshot*/) {
        let baseUrl = this.buildURL();
        return baseUrl + '/rest/' + pluralize(modelName) + '.json';
    },
    
    urlForFindRecord(id, modelName/*, snapshot*/) {
        let baseUrl = this.buildURL();
        return baseUrl + '/rest/' + pluralize(modelName) + '/' + id + '.json';
    }
    
});
