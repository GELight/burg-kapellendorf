import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({

    store: service(),

    model() {

        let found = false;

        return RSVP.hash({
            events: this.get('store').findAll('news').then((events) => {
              return events.filter((event) => {
                let visible = false;
                let msPerDay = 86400000;

                if ( event.get('to') && event.get('to').getTime() > new Date().getTime() || (event.get('from').getTime() + msPerDay) > new Date().getTime() ) {
                  visible = true;

                  if ( event.get('to') && event.get('to').getTime() < new Date().getTime() ) {
                    visible = false;
                  }

                }

                return visible;
              }).filter(event => {
                let msPerDay = 86400000;
                if (!found && event.get('from').getTime() > new Date().getTime()) {
                  event.set('nextEvent', true);
                  found = true;
                } else {
                  if (( new Date().getTime() > event.get('from').getTime() && new Date().getTime() < event.get('from').getTime() + msPerDay )
                    || ( new Date().getTime() > event.get('from').getTime() && event.get('to') && new Date().getTime() < event.get('to').getTime() + msPerDay )) {
                    event.set('eventStillInProgress', true);
                  }
                }
                return true;
              });
            })

        });
    }

});
