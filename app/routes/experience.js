import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    
    store: service(),

    model() {
        
        let date = new Date();

        let news = this.get('store').findAll('news').then((news) => {
            return news.filter((news) => news.get('from') );
        });
        
        return RSVP.hash({
            date: date
        });
    }

});
