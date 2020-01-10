var API_URL = 'https://floating-harbor-78336.herokuapp.com/fastfood';

// $(function() {
//     $('.btn-search').click(function() {
//         $.get(API_URL, {}, function(data) {
//         console.log(data); // 1페이지에 해당하는 목록만 가져오므로 10개만 출력된다.
//         }, "text");
//     });
// });


$(function() {
    $('.btn-search').click(function() {
        var searchKeyword = $('#txt-search').val();

        search(1, 10, searchKeyword);
    });

    $('#txt-search').on('keypress', function(e) {
        if (e.keyCode === 13) {
            $('.btn-search').trigger('click');
        }
    });

    $('#txt-search').focus();
});

function search(page, perPage, searchKeyword) {
    if (typeof page !== 'number' || page < 1)
        page = 1;

    if (typeof perPage !== 'number' || perPage <= 0)
        perPage = 10;

    $.get(API_URL, {
        page: page,
        perPage: perPage,
        searchKeyword: searchKeyword
    }, function(data) {
        var list = data.list;
        var total = data.total;

        $('.total').html('총 ' + total + '개의 패스트푸드점을 찾았습니다.');

        var $list = $('.list').empty();

        for (var i = 0; i < list.length; i++) {
            var item = list[i];
                // 각 아이템 하나하나마다 DOM 객체를 만들어서 $list에 추가
                // 1. 템플릿을 복제한다.
                // 2. 복제한 템플릿에 데이터를 세팅한다.
                // 3. 목록에 복제한 템플릿을 추가한다.

            var $elem = $('#item-template')
                .clone()
                .removeAttr('id');      // 복제를 마친 엘리먼트는 더이상 템플릿이 아니며,
                                        // id 중복으로 인한 충돌이 우려되므로 삭제한다.

            var no = (page - 1) * perPage + i + 1;                            

            $elem.find('.item-no').html(no);
            $elem.find('.item-name').html(item.name);
            $elem.find('.item-addr').html(item.addr);

            $list.append($elem);
        }

        showPaging(page, perPage, total, searchKeyword);

    })
}

function showPaging(page, perPage, total, searchKeyword) {
    var $paging = $('.paging').empty();
    var numPages = 5;
    var pageStart = Math.floor((page - 1) / numPages) * numPages + 1;
    var pageEnd = pageStart + numPages - 1;
    var totalPages = Math.floor(total / perPage) + 1;

    if (pageEnd > totalPages)
        pageEnd = totalPages;

    var prevPage = pageStart - 1;

    if (prevPage < 1)
        prevPage = 1;

    var nextPage = pageEnd + 1;

    if (nextPage > totalPages)
        nextPage = totalPages;

    var $prevElem = $('<a href="javascript:search(' + prevPage + ',' + perPage + ',\'' + searchKeyword + '\')">Prev</a>');
    $prevElem.addClass('prev');
    $paging.append($prevElem);

    for (var i = pageStart; i <= pageEnd; i++) {
        var $elem = $('<a href="javascript:search(' + i + ',' + perPage + ',\'' + searchKeyword + '\')">' + i + '</a>');

        if (i === page) {
            $elem.addClass('current');
        }

        $paging.append($elem);
    } 
    
    var $nextElem = $('<a href="javascript:search(' + nextPage + ',' + perPage + ',\'' + searchKeyword + '\')">Next</a>');
    $nextElem.addClass('next');
    $paging.append($nextElem);


}