/**
 * Created by SagarKhatri on 18-Aug-15.
 * Updated by AndreF010203 on 6-Aug-19
 */
(function ($) {
    $.fn.toggleSwitch = function () {
        var id = this.attr("id"),
            switchDivId = id + "-switch";
        if($("div#"+switchDivId).length>0) return;
        $("<div/>", {class: "onoffswitch", id: switchDivId}).insertAfter(this);
        $("div#" + switchDivId).append(this.clone().addClass('onoffswitch-checkbox'));
        $("<label/>", {
            class: "onoffswitch-label",
            for: id
        }).appendTo("div#" + switchDivId);
        this.remove();
    };
}(jQuery));
