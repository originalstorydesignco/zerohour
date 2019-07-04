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
modal.setContent('<h1 style="font-family:Montserrat; font-size:3em;" class="center">Sign up for Zero Hour\'s Youth Climate Summit now!</h1>');

// add a button
modal.addFooterBtn('Yes please!', 'tingle-btn tingle-btn--primary', function() {
    openInNewTab('https://bit.ly/zerohourregister')
});

// add another button
modal.addFooterBtn('No thanks :(', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

// open modal
modal.open();

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
