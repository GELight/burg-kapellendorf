import Component from '@ember/component';

export default Component.extend({

    tagName: "section",
    classNames: ['gallery'],

    gallery: null,
    images: null,

    didReceiveAttrs() {
        
        let gallery = this.get('gallery');
        
        this.set('images', []);
        let images = this.get('images');
        
        gallery.get('images').forEach((image) => {

            let minWidth = image.minWidth ? image.minWidth : 1;
            let minHeight = image.minHeight ? image.minHeight : 1;

            let maxWidth = image.maxWidth ? image.maxWidth : (Math.floor(Math.random() * 2) + 1);
            let maxHeight = image.maxHeight ? image.maxHeight : (Math.floor(Math.random() * 2) + 1);

            image.width = Math.floor(Math.random() * maxWidth) + minWidth,
            image.height = Math.floor(Math.random() * maxHeight) + minHeight

            images.push(image);
        });

    }
    
});
