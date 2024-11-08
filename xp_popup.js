/*

USAGE for Confirmation Box: 
  xp_popup("Confirmation Title", "This is the popup dialog text, do you want to continue?", {
    "Yes" : function(){
      // Continues code...
    },
    "No" : function(){
      // Does not continue...
    }
  });
  
USAGE for Alert Box:
  xp_popup("Alert Title", "This is the popup dialog text.", {
    "OK" : function(){
      // Continues code...
    }
  });
  
USAGE for multi-option of custom option popup box:
  xp_popup("Popup Title", "This is the popup dialog text", {
    "Option 1" : function(){},
    "Option 2" : function(){},
    "Option 3" : function(){},
    ...
  });
  
*/
var init_font = false;
window.silent = false;
window.downloadFont = function(){
  var css = document.createElement("STYLE");
  css.innerHTML = "@font-face{ font-family: WinXP; src: url('https://xobyte.neocities.org/files/fonts/win.woff'); }";
  document.documentElement.appendChild(css);
};
  window.onmouseup = function(e){
    window.mousedownOnTitle = false;
    var item = false;
    try {
      item = e.target.parentElement.parentElement ? e.target.parentElement.parentElement : false;
    } catch(outsideFrame){
      if(window.activePanes && window.activePanes[window.selectedWindow.id]){
        window.activePanes[window.selectedWindow.id].maximize();
      }
      return true;
    }
    if(item && item.className == "window"){
      var x = e.clientX - window.alertOffsetX;
      var y = e.clientY - window.alertOffsetY;
      if(y <= 0){
        try {
          window.activePanes[item.id].maximize();
          
        } catch(notRunningOnXP){}
      }
      item.style.transition = "left 40ms linear, top 40ms linear, width 40ms linear, height 40ms linear";
    }
  };
  window.onmousemove = function(e){
    if(window.mousedownOnTitle){
      e.preventDefault();
      var x = e.clientX - window.alertOffsetX;
      var y = e.clientY - window.alertOffsetY;
      if(y <= 0){ y = 0; }
      try {
        window.selectedWindow.style.transition = "none"; 
        window.activePanes[window.selectedWindow.id].position = [x, y];
      } catch(notRunningOnXP){}
      window.selectedWindow.style.position = "absolute";
      window.selectedWindow.style.left = x + "px";
      window.selectedWindow.style.top = y + "px";
    } 
  };
window.xp_popup = function(title, context, callbacks){
  var bool = true;
  if(!init_font){
    window.downloadFont();
    init_font = true;
  }
  window.sfx = new Audio("https://xobyte.neocities.org/files/WinXPNotify.mp3");
  var unacknowledged = true;
  var backgroundWrapper = document.createElement("DIV");
  var popup = document.createElement("DIV");
  var contextBox = document.createElement("DIV");
  
  contextBox.style.margin = "15px";
  contextBox.style.padding = "10px";
  contextBox.style.textAlign = "left";
  contextBox.style.border = "solid 1px #D0D0BF";
  contextBox.style.borderRadius = "5px";
  contextBox.style.minHeight = "50px";
  contextBox.innerHTML = context;
  
  var titleBox = document.createElement("DIV");
  var ico = document.createElement("IMG");
  ico.style.display = "inline";
  ico.style.height = "12pt";
  ico.style.marginRight = "5px";
  ico.src = "https://xobyte.neocities.org/files/win-min.png";
  titleBox.appendChild(ico);
  var tt = document.createElement("SPAN");
  tt.innerHTML = title;
  titleBox.appendChild(tt);
  titleBox.style.display = "flex";
  titleBox.style["align-items"] = "center";
  titleBox.style["justify-content"] = "flex-start";
  titleBox.style.color = "#FFF";
  titleBox.style.fontWeight = "bolder";
  titleBox.style.background = "#0055EA";
  titleBox.style.padding = "5px";
  titleBox.style.borderRadius = "2px 2px 0 0";
  titleBox.style.boxShadow = "0 2px 2px #2B90FF inset, 0 -1px 2px #333 inset";
  titleBox.style.userSelect = "none";
  
  // popup.draggable = true;
  window.mousedownOnTitle = false;
  window.selectedWindow;
  titleBox.onmousedown = function(e){
    window.selectedWindow = this.parentElement;
    window.mousedownOnTitle = true;
    window.alertDragging = true;
    var rect = e.target.parentElement.getBoundingClientRect();
    window.alertOffsetX = e.clientX - rect.x;
    window.alertOffsetY = e.clientY - rect.y;
    // this.style.opacity = "0";
  };
  popup.style.width = "470px";
  popup.style.maxWidth = "calc(90% - 30px)";
  popup.style.padding = "none";
  popup.style.borderRadius = "5px";
  popup.style.boxShadow = "1px 1px 2px #000, 1px 1px 2px #000 inset";
  popup.style.color = "#000";
  popup.style.backgroundColor = "#ECE9D8";
  popup.style.border = "solid 2px #0055EA";
  popup.style.fontFamily = "WinXP, Tahoma, sans-serif";
  // popup.style.borderTop = "solid 25px #0055EA";
  popup.onclick = function(e){
    e.stopPropagation();
  };
  popup.appendChild(titleBox);
  popup.appendChild(contextBox);
  
  var centerBox = document.createElement("DIV");
  
  centerBox.style.display = "flex";
  centerBox.style["align-items"] = "center";
  centerBox.style["justify-content"] = "center";
  
  for(options in callbacks){
    var btn_txt = document.createElement("SPAN");
    btn_txt.innerHTML = options;
    btn_txt.style.width = "90%";
    btn_txt.style.textAlign = "center";
    btn_txt.style.borderRadius = "3px";
    btn_txt.style.margin = "2px";
    btn_txt.style.whiteSpace = "nowrap";
    var button = document.createElement("DIV");
    button.appendChild(btn_txt);
    button.style.display = "flex";
    button.style["align-items"] = "center";
    button.style["justify-content"] = "center";
    button.style.cursor = "pointer";
    button.style.fontFamily = "inherit";
    button.style.backgroundColor = "#F2F2ED";
    button.style.color = "#000";
    button.style.borderRadius = "3px";
    button.style.margin = "2px";
    button.style.padding = "none";
    button.style.minWidth = "75px";
    button.style.fontSize = "10pt";
    button.style.userSelect = "none";
    // button.style.border = "inset 2px #AAA";
    button.onmouseover = function(){
      var child = this.children[0];
      // this.style.border = "inset 2px #AAA";
      this.style.background = "#F2F2ED";
      child.style.outline = "dotted 1px #333";
    };
    button.onmouseout = function(){
      var child = this.children[0];
      // this.style.border = "outset 2px #AAA";
      this.style.background = "#F2F2ED";
      child.style.outline = "none";
    };
    button.onclick = function(){
      var alertNode = document.getElementById("alert");
      document.body.removeChild(alertNode);
      if(callbacks[this.innerText] && typeof(callbacks[this.innerText]) == 'function'){
        return callbacks[this.innerText]();
      } else {
        if(callbacks[this.innerText]){
          return callbacks[this.innerText];
        } else {
          return true;
        }
      }
    };
    var btn_border = document.createElement("DIV");
    btn_border.style.background = "linear-gradient(#BCD4F6, #6982EE)";
    btn_border.style.padding = "none";
    btn_border.style.margin = "5px";
    btn_border.style.borderRadius = "3px";
    btn_border.style.border = "solid 1px #003C74";
    btn_border.appendChild(button);
    centerBox.appendChild(btn_border);
  }
  popup.appendChild(centerBox);
  backgroundWrapper.style.width = "100vw";
  backgroundWrapper.style.height = "100vh";
  backgroundWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
  backgroundWrapper.style.alignItems = "center";
  backgroundWrapper.style.justifyContent = "center";
  backgroundWrapper.style.position = "fixed";
  backgroundWrapper.style.left = "0";
  backgroundWrapper.style.top = "0";
  backgroundWrapper.style.transition = "opacity 250ms linear";
  backgroundWrapper.style.zIndex = Date.now();
  backgroundWrapper.appendChild(popup);
  backgroundWrapper.id = "alert";
  backgroundWrapper.style.display = "none";
  backgroundWrapper.onclick = function(e){
    var a = document.getElementById('alert');
    a.style.filter = "grayscale(100%)";
    var sfx = new Audio("https://xobyte.neocities.org/files/WinXPAlert.mp3");
    sfx.volume = 0.5;
    if(!window.silent){
      sfx.play();
    }
    setTimeout(function(){
      a.style.filter = "grayscale(0)";
      setTimeout(function(){
        a.style.filter = "grayscale(100%)";
        setTimeout(function(){
          a.style.filter = "grayscale(0)";
          setTimeout(function(){
            a.style.filter = "grayscale(100%)";
            setTimeout(function(){
              a.style.filter = "grayscale(0)";
              setTimeout(function(){
                a.style.filter = "grayscale(100%)";
                setTimeout(function(){
                  a.style.filter = "grayscale(0)";
                }, 75);
              }, 75);
            }, 75);
          }, 75);
        }, 75);
      }, 75);
    }, 75);
  };
  window.bgw = backgroundWrapper;
  
  document.body.appendChild(backgroundWrapper);
  setTimeout(function(){
    document.getElementById("alert").style.display = "flex";
  }, 250);
};


document.fonts.add(new FontFace("WinXP", "https://xobyte.neocities.org/files/fonts/win.woff"));