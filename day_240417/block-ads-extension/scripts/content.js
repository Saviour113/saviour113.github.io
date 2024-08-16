// remove ads
$(function () {
    $('h2:contains(Ads)').parent().find('a.minimizePanel').each(function () {
        this.click();
    })
});
