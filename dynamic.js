$(document).ready(function () {
    var i = 1;
    $('#add').click(function () {
        //alert('ok'); i++;
        
        $('#dynamicadd').append('<tr id="rowbtn' + i + '"><div class="row"><div class="col-lg-4 flex"><td> <label class="col-lg-4" for="name">Name: </label> <input class="col-lg-8" type="text" name="name" id="name" placeholder="Name Here.." class="form-control"></td></div><div class="col-lg-4"><td> <label class="col-lg-4" for="name">Degree: </label> <input class="col-lg-8" type="text" name="name" id="name" placeholder="Degree Title Here.." class="form-control"></td></div><div class="col-lg-4"><td> <label class="col-lg-4" for="name">CGPA: </label> <input class="col-lg-8" type="text" name="name" id="name" placeholder="CGPA Here.." class="form-control"></td></div></div><td><button type="button" id= "btn' + i + '" class="btn remove_row">Remove</button ></td ></tr> ');
        i++;
        $('.remove_row').css("background-color", "#cccccc");
        $('.remove_row').css('border', '1px solid black');
});

    $(document).on('click', '.remove_row', function () {
        var row_id = $(this).attr("id");
        $('#row' + row_id).remove();
    });
});