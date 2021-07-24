function Position() {
    $(document).on("click", ".category-item", function() {
        if (!$(this).hasClass("open-sub-category")) {
            $(this).siblings(".open-sub-category").find(".sub-category-container").fadeOut(50),
            $(this).siblings(".open-sub-category").animate({
                marginBottom: 0
            }, 300).removeClass("open-sub-category"),
            $(this).addClass("open-sub-category");
            var widthCategories = $(".categories").width()
              , heightCategoryItem = $(this).outerHeight()
              , leftpos = -$(this).position().left
              , find = $(this).find(".sub-category-container");
            find.css({
                top: heightCategoryItem,
                left: leftpos,
                width: widthCategories
            }).fadeIn(300);
            var heightSub = find.outerHeight();
            $(this).animate({
                marginBottom: heightSub
            }, 50)
        }
    })
}
