jQuery(function (jQuery) {
    jQuery('.attachment-shop_catalog.wp-post-image.lazy').attr(
        'alt', 'Producto Cerroverde'
        )
    jQuery('noscript>img.attachment-shop_catalog.wp-post-image.lazy').attr(
        'alt', 'Producto Licratex'
        )
    jQuery('nav').removeAttr('role')
})
