import Component from '@ember/component';
import { isEmpty } from '@ember/utils';

export default Component.extend({

    tagName: "section",
    classNames: ['gallery'],

    gallery: null,
    images: null,

    didReceiveAttrs() {
        
        let gallery = this.get('gallery');
        
        this.set('images', []);
        let images = this.get('images');
        
        if (!isEmpty(gallery)) {
            gallery.get('images').forEach((image) => {

                let minWidth = image.minWidth ? image.minWidth : 1;
                let minHeight = image.minHeight ? image.minHeight : 1;

                let maxWidth = image.maxWidth ? image.maxWidth : (Math.floor(Math.random() * 2));
                let maxHeight = image.maxHeight ? image.maxHeight : (Math.floor(Math.random() * 2));

                image.width = Math.floor(Math.random() * maxWidth) + minWidth;
                if (image.width > maxWidth) image.width = maxWidth;
                image.height = Math.floor(Math.random() * maxHeight) + minHeight;
                if (image.height > maxHeight) image.height = maxHeight;

                images.push(image);
            });
        }

    }
    
});
