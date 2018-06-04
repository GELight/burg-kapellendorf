import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    
    store: service(),

    model() {
        return RSVP.hash({
            events: this.get('store').findAll('news')
        });
    }

});
