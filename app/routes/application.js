import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({

    intl: service(),

    beforeModel() {
      return this.get('intl').setLocale(['de-de']);
    },

    model() {

      let quoteIndex = 1 + Math.floor(Math.random() * Math.floor(5));

      return RSVP.hash({
        navigation: this.get('store').findAll('navigation').then((nav) => {
          return nav.filter((nav) => nav.get('type') === 'main');
        }),
        copyrightTo: new Date().getFullYear(),
        footerNavLinks: this.get('store').findAll('navigation').then((nav) => {
          return nav.filter((nav) => nav.get('type') === 'footer');
        }),
        quote: this.get('intl').t("quotes." + quoteIndex, {
          htmlSafe: true
        })
      });

    }

});
