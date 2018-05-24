import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    
    intl: Ember.inject.service(),
    
    beforeModel() {
      return this.get('intl').setLocale(['de-de']);
    },

    model() {

      return RSVP.hash({
        navigation: this.get('store').findAll('navigation').then((nav) => {
          return nav.filter((nav) => nav.get('type') === 'main');
        }),
        copyrightTo: new Date().getFullYear()
      });
  
    }

});
