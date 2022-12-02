(()  => {
        let likec,commentc,totalcount;
        chrome.runtime.sendMessage({
            data: "DataFectched Successfully"
             }, function (response) {
              console.log(response);
              likec = parseInt(response.data);
              commentc = parseInt(response.data1)
              totalcount =  likec + commentc
              console.log(totalcount);
            //   alert(totalcount);
            
        })
        let i=0,k=0;
                    function changehere() {
                            if(i<likec){
                                let like = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-social-action-bar__action-button .react-button__trigger')[i]
                                like.click();
                                i++;
                            }
                                if(k<commentc){
                                    let commentbtn = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .comment span div button')[k]
                                    commentbtn.click()
                                    let comment = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container .comments-comment-texteditor .comments-comment-box-comment__text-editor .editor-container .editor-content .ql-editor p')[k];
                                    comment.innerHTML="CFBR";
                                    let post = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .social-details-social-activity .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container form')[k].querySelectorAll('div button')[2]
                                    post.click();
                                    k++;
                                }
                        }
                    setInterval(changehere, 4000);
                
})();


        