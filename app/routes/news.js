import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    
    store: service(),

    model() {

        let today = new Date();
        let found = false;

        return RSVP.hash({
            events: this.get('store').findAll('news').then(events => {
                return events.forEach(event => {
                    if (!found && event.get('from').getTime() > today.getTime()) {
                        event.set('nextEvent', true);
                        found = true;
                    }
                });
            })
        });
    }

});
