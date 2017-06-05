/**
 * Created by Administrator on 2017/6/5.
 */
$(function () {
    $(".add").on("click", function () {
        $(this).closest(".container").find("tbody").append($("#appendTr tbody").html());
        // $(this).parents(".form-data").append($("#appendTr tbody").html());
    })
    $(".table").delegate(".del", "click", function () {
        $(this).parents("tr").remove();
    })
    $(".nav-tabs li").on("click", function () {
        if($(this).hasClass("active")) return;
        $(this).siblings().each(function () {
            $(this).removeClass("active");
            $("#"+$(this).attr("class")).hide();
        })
        $("#"+$(this).attr("class")).show();
        $(this).addClass("active");
    })
})