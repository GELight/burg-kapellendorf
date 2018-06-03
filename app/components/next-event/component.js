import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    intl: service(),

    date: null,

    nextEvent: null,

    didReceiveAttrs() {
        
        let today = new Date();
        let eventDate = new Date(this.get('date'));
        let nextEventDate = this.get('intl').formatRelative(today.setDate(eventDate.getDate()));
        
        this.set('nextEvent', nextEventDate);
    }

});
