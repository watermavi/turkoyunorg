
'use strict';

//
// Search ========================================
//

var searchbarStatus = false;

$('.searchbar').on('click', function(e) {
  e.stopPropagation();
  if (searchbarStatus === false) {
    e.preventDefault();
    searchbarStatus = true;
    $(this).addClass('active');
    $('.search-input').focus();
    $('.header .nav-item:not(.nav-search)').css('display', 'none');
  }
});

$(document).on('click', function(e) {
  if (searchbarStatus === true) {
    searchbarStatus = false;
    $('.searchbar').removeClass('active').addClass('closing');
		$('.nav-item:not(.nav-search, .nav-item.mobil)').delay(500).queue(function (next) {
			$(this).css('display', 'block');
      $('.searchbar').removeClass('closing');
			next();
		});
  }
});


//
// LazyLoad ==================================
//

var lazyLoader = new LazyLoad({
  elements_selector: ".lazyload"
});

//
// ServerOnline ==================================
//

// var ServerOnline = (function() {
//   var $onlineText = $('[data-toggle="onlinetext"]');
//   var $onlineBox = $('[data-toggle="onlinebox"]');
//   // Init
//   function init($onlineText) {
//     var $serverIP = $onlineText.attr("server-ip").split(':', 2);

//     if ($onlineAPI == 1) {
//       var $ajaxURL = "https://mcapi.us/server/status?ip=" + $serverIP[0] + (($serverIP[1]) ? "&port=" + $serverIP[1] : "");
//     }
//     else if ($onlineAPI == 2) {
//       var $ajaxURL = "https://eu.mc-api.net/v3/server/ping/" + $serverIP[0] + (($serverIP[1]) ? ":" + $serverIP[1] : "");
//     }
//     else if ($onlineAPI == 3) {
//       var $ajaxURL = "https://mcapi.tc/?" + $serverIP[0] + "/json";
//     }
//     else if ($onlineAPI == 4) {
//       var $ajaxURL = "https://api.keyubu.net/mc/ping.php?ip=" + $serverIP[0] + ":" + (($serverIP[1]) ? $serverIP[1] : "25565");
//     }
//     else if ($onlineAPI == 5) {
//       var $ajaxURL = "https://api.mcsrvstat.us/2/" + $serverIP[0] + (($serverIP[1]) ? ":" + $serverIP[1] : "");
//     }
//     else if ($onlineAPI == 6) {
//       var $ajaxURL = "https://api.mcsrvstat.us/2/" + $serverIP[0] + ":" + (($serverIP[1]) ? $serverIP[1] : "19132");
//     }
//     else {
//       var $ajaxURL = "https://mcapi.us/server/status?ip=" + $serverIP[0] + (($serverIP[1]) ? "&port=" + $serverIP[1] : "");
//     }

//   	$.ajax({
//   		url: $ajaxURL,
//   		dataType: "json",
//   		success: function(data) {
//         if ($onlineAPI == 1) {
//           var onlineStatus = data["online"];
//           var online = data["players"]["now"];
//         }
//         else if ($onlineAPI == 2) {
//           var onlineStatus = data["online"];
//           var online = data["players"]["online"];
//         }
//         else if ($onlineAPI == 3) {
//           var onlineStatus = data["status"];
//           var online = data["players"];
//         }
//         else if ($onlineAPI == 4) {
//           var onlineStatus = data["online"];
//           var online = data["players"]["online"];
//         }
//         else if ($onlineAPI == 5) {
//           var onlineStatus = data["online"];
//           var online = data["players"]["online"];
//         }
//         else if ($onlineAPI == 6) {
//           var onlineStatus = data["online"];
//           var online = data["players"]["online"];
//         }
//         else {
//           var onlineStatus = data["online"];
//           var online = data["players"]["now"];
//         }

//   			if (onlineStatus == true || ($onlineAPI == 3 && onlineStatus != "offline")) {
//   				$onlineText.text(online);
//   				$onlineBox.addClass("active");
//   			}
//   			else {
//   				$onlineText.text("0");
//   			}
//   		}
//   	});
//   }
//   if ($onlineText.length) {
//     $onlineText.each(function() {
//       init($(this));
//     });
//   }
// })();

//
// CopyServerIP ==================================
//

// var CopyServerIP = (function() {
//   var $copyip = $('[data-toggle="copyip"]');
//   // Init
//   function init($copyip) {
//   	var clipboard = new ClipboardJS('[data-toggle="copyip"]');
//   	clipboard.on("success", function(e) {
//   		swal.fire({
//   			title: "BAŞARILI!",
//   			text: "Sunucu adresi başarıyla kopyalandı!",
//   			type: "success",
//   			confirmButtonColor: "#02b875",
//   			confirmButtonText: "Tamam"
//   		});
//   	});
//   }
//   if ($copyip.length) {
//     $copyip.each(function() {
//       init($(this));
//     });
//   }
// })();

//
// ClickDelete ==================================
//

var ClickDelete = (function() {
  var $clickdelete = $(".clickdelete");
  // Init
  function init($clickdelete) {
    $clickdelete.on("click", function() {
      return confirm("Silmek istediğinize emin misiniz?");
    });
  }
  if ($clickdelete.length) {
    $clickdelete.each(function() {
      init($(this));
    });
  }
})();

//
// Broadcast ==================================
//

var Broadcast = (function() {
  var $broadcast = $(".broadcast");
  // Init
  function init($broadcast) {
    $broadcast.marquee({
      speed: 75,
      pauseOnHover: true
    });
  }
  if ($broadcast.length) {
    $broadcast.each(function() {
      init($(this));
    });
  }
})();

//
// Select2 ==================================
//

var Select2 = (function() {
  var $select2 = $('[data-toggle="select2"]');
  // Init
  function init($select2) {
    $select2.select2({
      theme: 'bootstrap4',
      width: '100%',
      minimumResultsForSearch: Infinity
    });
  }
  if ($select2.length) {
    $select2.each(function() {
      init($(this));
    });
  }
})();

function newsImageResize($newsImageWidth) {
	var $imgNewHeight = (($newsImageWidth*360)/640);
	$(".img-container").height($imgNewHeight);
}

$(window).resize(function() {
	/* NEWS IMAGE RESIZE */
	newsImageResize($(".img-container").width());
});

$(document).ready(function() {
  /* Scroll Up */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>'
	});
	/* Tooltip */
	$('[data-toggle="tooltip"]').tooltip();
	/* New Tab */
	$("a[rel=external]").attr("target", "_blank");
	/* NEWS IMAGE RESIZE */
	newsImageResize($(".img-container").width());
});

$(window).on("load", function() {
	/* PRELOADER */
  if (document.querySelector('#preloader') != null) {
    $('#preloader').delay(250).fadeOut('slow');
    $('body').delay(250).css('overflow', 'auto');
  }
});

/* CONSOLE MESSAGE */
var consoleCopyrightStyle = [
  "margin: 16px 0",
  "border-radius: 10px"
].join(";");
var consoleWarningHeaderStyle = [
  "color: #ff0000",
  "font-size: 32px",
  "font-weight: 600",
  "margin: 8px 0"
].join(";");
var consoleWarningContentStyle = [
  "background-color: #ff0000",
  "color: #ffffff",
  "padding: 20px",
  "border-radius: 10px"
].join(";");
console.log(
  "%cDUR!"+
  "%cBu alan geliştiricilere özel bir tarayıcı özelliğidir. Birisi size buraya bir şey kopyalayıp yapıştırmanızı söylerse, bu bir aldatmacadır ve sitenizdeki hesabınıza erişmesine izin verir. Lütfen buraya başkasının verdiği bir kodu girmeyiniz!"+
  `%cTelif Hakkı © ${new Date().getFullYear()} LeaderOS G-EDITION`,
  consoleWarningHeaderStyle,
  consoleWarningContentStyle,
  consoleCopyrightStyle
);
