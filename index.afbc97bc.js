window.openMessageModal=function(e){let n=document.getElementById(e);n&&(n.style.display="flex")},window.closeMessageModal=function(e){let n=document.getElementById(e);n&&(n.style.display="none")},document.querySelectorAll(".message-close").forEach(e=>{e.addEventListener("click",function(){closeMessageModal(this.parentElement.parentElement.id)})}),window.addEventListener("load",()=>{sessionStorage.removeItem("modalOpened")});
//# sourceMappingURL=index.afbc97bc.js.map
