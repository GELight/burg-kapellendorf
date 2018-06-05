import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: "section",
    classNames: ['next-event'],
    
    intl: service(),

    events: null,

    nextEvent: null,

    didReceiveAttrs() {
        
        if (this.get('events')) {
            let today = new Date();
            let eventDate = null;
            let found = false;

            this.get('events').forEach((event) => {
                if (!found && event.get('from').getTime() > today) {
                    eventDate = event.get('from');
                    found = true;
                }
            });
            
            if (found) {
                let nextEventDate = this.get('intl').formatRelative(today.setDate(eventDate.getDate()));
                this.set('nextEvent', nextEventDate);
            }
        }
    }
    
});
