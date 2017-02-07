(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2017 Allan Pichardo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var Pagefreezer = (function () {
    function Pagefreezer() {
    }
    Pagefreezer.diffPages = function (url1, url2, callback) {
        $.ajax({
            type: "GET",
            url: Pagefreezer.DIFF_API_URL,
            dataType: "json",
            jsonpCallback: callback,
            data: {
                old_url: url1,
                new_url: url2,
                as: "json",
            },
            success: callback,
            error: function (error) {
                console.log(error);
            },
            headers: { "x-api-key": "SP949Hsfdm2z9rYbnb9mC588hO2uV3Nna2pcy1cj" }
        });
    };
    return Pagefreezer;
}());
Pagefreezer.DIFF_API_URL = "/diff";
Pagefreezer.API_KEY = "SP949Hsfdm2z9rYbnb9mC588hO2uV3Nna2pcy1cj";
exports.Pagefreezer = Pagefreezer;

},{}],2:[function(require,module,exports){
/*
 * Copyright (c) 2017 Allan Pichardo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
var Pagefreezer_1 = require("./Pagefreezer");
$(document).ready(function () {
    console.log("ready");
    toggleProgressbar(false);
    $('#submitButton').click(function () {
        toggleProgressbar(true);
        Pagefreezer_1.Pagefreezer.diffPages($('#url1').val(), $('#url2').val(), function (data, status) {
            $('#pageView').html(data.result.output.html);
            $('#pageView link[rel=stylesheet]').remove();
            toggleProgressbar(false);
        });
    });
});
function toggleProgressbar(isVisible) {
    if (isVisible) {
        $('.progress').show();
    }
    else {
        $('.progress').hide();
    }
}

},{"./Pagefreezer":1}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9QYWdlZnJlZXplci50cyIsInNyYy9zY3JpcHRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7R0FRRzs7QUFFSCxvRUFBb0U7QUEyQnBFO0lBQUE7SUEwQkEsQ0FBQztJQXJCaUIscUJBQVMsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLElBQVksRUFBRSxRQUFpRTtRQUVqSCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUUsV0FBVyxDQUFDLFlBQVk7WUFDN0IsUUFBUSxFQUFFLE1BQU07WUFDaEIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEVBQUUsRUFBRSxNQUFNO2FBQ2I7WUFDRCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsVUFBUyxLQUFLO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxPQUFPLEVBQUUsRUFBQyxXQUFXLEVBQUUsMENBQTBDLEVBQUM7U0FDckUsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0ExQkEsQUEwQkM7QUF4QmlCLHdCQUFZLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLG1CQUFPLEdBQUcsMENBQTBDLENBQUM7QUFIMUQsa0NBQVc7OztBQ3JDeEI7Ozs7Ozs7O0dBUUc7O0FBRUgsNkNBQTBDO0FBRTFDLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLHlCQUFXLENBQUMsU0FBUyxDQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFDaEIsVUFBUyxJQUFJLEVBQUUsTUFBTTtZQUNqQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQTtBQUVGLDJCQUEyQixTQUFrQjtJQUN6QyxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0FBQ0wsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IEFsbGFuIFBpY2hhcmRvLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPlxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VmcmVlemVyUmVzcG9uc2Uge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHJlc3VsdDogUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdCB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgb3V0cHV0OiBPdXRwdXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0IHtcbiAgICBodG1sOiBzdHJpbmc7XG4gICAgZGlmZnM6IERpZmY7XG4gICAgcmF3SHRtbDI6IHN0cmluZztcbiAgICByYXdIdG1sMTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpZmYge1xuXG4gICAgbmV3OiBzdHJpbmc7XG4gICAgb2xkOiBzdHJpbmc7XG4gICAgY2hhbmdlOiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlZnJlZXplciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIERJRkZfQVBJX1VSTCA9IFwiL2RpZmZcIjtcbiAgICBwdWJsaWMgc3RhdGljIEFQSV9LRVkgPSBcIlNQOTQ5SHNmZG0yejlyWWJuYjltQzU4OGhPMnVWM05uYTJwY3kxY2pcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGlmZlBhZ2VzKHVybDE6IHN0cmluZywgdXJsMjogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlOiBQYWdlZnJlZXplclJlc3BvbnNlLCBzdGF0dXM6IHN0cmluZykgPT4gdm9pZCkge1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBQYWdlZnJlZXplci5ESUZGX0FQSV9VUkwsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBqc29ucENhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBvbGRfdXJsOiB1cmwxLFxuICAgICAgICAgICAgICAgIG5ld191cmw6IHVybDIsXG4gICAgICAgICAgICAgICAgYXM6IFwianNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIngtYXBpLWtleVwiOiBcIlNQOTQ5SHNmZG0yejlyWWJuYjltQzU4OGhPMnVWM05uYTJwY3kxY2pcIn1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn0iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IEFsbGFuIFBpY2hhcmRvLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtQYWdlZnJlZXplcn0gZnJvbSBcIi4vUGFnZWZyZWV6ZXJcIjtcblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlYWR5XCIpO1xuICAgIHRvZ2dsZVByb2dyZXNzYmFyKGZhbHNlKTtcblxuICAgICQoJyNzdWJtaXRCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvZ2dsZVByb2dyZXNzYmFyKHRydWUpO1xuICAgICAgICBQYWdlZnJlZXplci5kaWZmUGFnZXMoXG4gICAgICAgICAgICAkKCcjdXJsMScpLnZhbCgpLFxuICAgICAgICAgICAgJCgnI3VybDInKS52YWwoKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICQoJyNwYWdlVmlldycpLmh0bWwoZGF0YS5yZXN1bHQub3V0cHV0Lmh0bWwpO1xuICAgICAgICAgICAgICAgICQoJyNwYWdlVmlldyBsaW5rW3JlbD1zdHlsZXNoZWV0XScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVByb2dyZXNzYmFyKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSlcblxuZnVuY3Rpb24gdG9nZ2xlUHJvZ3Jlc3NiYXIoaXNWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYoaXNWaXNpYmxlKSB7XG4gICAgICAgICQoJy5wcm9ncmVzcycpLnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5wcm9ncmVzcycpLmhpZGUoKVxuICAgIH1cbn0iXX0=