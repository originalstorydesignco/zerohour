var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['tingle-modal'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<link rel=\'preload\' href=\'https://d3rse9xjbp8270.cloudfront.net/at.js\' as=\'script\' crossorigin=\'anonymous\'> <link rel=\'preload\' href=\'https://d3rse9xjbp8270.cloudfront.net/at.min.css\' as=\'style\'><script type=\'text/javascript\' src=\'https://d3rse9xjbp8270.cloudfront.net/at.js\' crossorigin=\'anonymous\'></script><div class="ngp-form" data-form-url="https://actions.everyaction.com/v1/Forms/3gzCtJpeBEC_balUQHuM6w2" data-fastaction-endpoint="https://fastaction.ngpvan.com" data-inline-errors="true" data-fastaction-nologin="true" data-databag-endpoint="https://profile.ngpvan.com" data-databag="everybody" data-mobile-autofocus="false" > </div>');

// open modal
modal.open();
