// $(document).ready(function () {
//     $('.readyDemo').text('Jquery Tutorail').css('color', 'red').fadeIn('slow')
// })

// SELECTOR
$(document).ready(function () {
    $('#btn').click(function () {
        $("a[href='yahoo.com']").text('Yahoo')

        $('#item-list > li').css('color' , 'turquoise')
    })
    
})