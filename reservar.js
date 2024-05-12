<script>
         $(function() {
            $( "#datepicker-5" ).datepicker({
               beforeShowDay : function (date) {
                  var dayOfWeek = date.getDay ();
                  // 0 : Sunday, 1 : Monday, ...
                  if (dayOfWeek == 0 || dayOfWeek == 6) return [false];
                  else return [true];
               }
            });
         });
      </script>