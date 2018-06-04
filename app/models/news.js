import DS from 'ember-data';

export default DS.Model.extend({
    "from": DS.attr('date'),
    "to": DS.attr('date'),
    "title": DS.attr('string'),
    "description": DS.attr('string'),
    "nextEvent": DS.attr('boolean', { defaultValue: false })
});
