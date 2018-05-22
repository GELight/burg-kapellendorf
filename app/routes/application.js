import Route from '@ember/routing/route';

export default Route.extend({
    
    intl: Ember.inject.service(),
    
    beforeModel() {
      return this.get('intl').setLocale(['de-de', 'en-en']);
    }

});
