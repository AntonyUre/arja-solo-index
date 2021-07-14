$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
});
var userAgent = navigator.userAgent.toLowerCase(),
    $document = $(document),
    plugins = {
        photoSwipeGallery: $("[data-photo-swipe-item]")
    };
if (plugins.photoSwipeGallery.length) {

    // init image click event
    $document.delegate("[data-photo-swipe-item]", "click", function (event) {
        event.preventDefault();

        var $el = $(this),
            $galleryItems = $el.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"),
            pswpElement = document.querySelectorAll('.pswp')[0],
            encounteredItems = {},
            pswpItems = [],
            options,
            pswpIndex = 0,
            pswp;

        if ($galleryItems.length == 0) {
            $galleryItems = $el;
        }

        // loop over the gallery to build up the photoswipe items
        $galleryItems.each(function () {
            var $item = $(this),
                src = $item.attr('href'),
                size = $item.attr('data-size').split('x'),
                pswdItem;

            if ($item.is(':visible')) {

                // if we have this image the first time
                if (!encounteredItems[src]) {
                    // build the photoswipe item
                    pswdItem = {
                        src: src,
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        el: $item // save link to element for getThumbBoundsFn
                    };

                    // store that we already had this item
                    encounteredItems[src] = {
                        item: pswdItem,
                        index: pswpIndex
                    };

                    // push the item to the photoswipe list
                    pswpItems.push(pswdItem);
                    pswpIndex++;
                }
            }
        });

        options = {
            index: encounteredItems[$el.attr('href')].index,

            getThumbBoundsFn: function (index) {
                var $el = pswpItems[index].el,
                    offset = $el.offset();

                return {
                    x: offset.left,
                    y: offset.top,
                    w: $el.width()
                };
            }
        };

        // open the photoswipe gallery
        pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpItems, options);
        pswp.init();
    });
}
if ($(window).width() < 768) {
    $("#no-more-tables tbody tr .toogle-table").click(function (e) {
        e.preventDefault();
        $(this).parents("tr").toggleClass("activo");
    });
}

